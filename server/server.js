// server/server.js – full version
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const FORM_CONFIG = {
  contact: {
    subject: 'New Contact Form Message',
    recipient: process.env.CONTACT_EMAIL_RECEIVER,
    template: (data) => `
      <h2>Contact Form Message</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${data.service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `
  },
  book_meeting: {
    subject: 'New Meeting Booking Request',
    recipient: process.env.BOOK_MEETING_EMAIL || process.env.CONTACT_EMAIL_RECEIVER,
    template: (data) => `
      <h2>Meeting Booking Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Purpose:</strong> ${data.purpose || 'Not specified'}</p>
      ${data.message ? `<p><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
    `
  },
  cta_meeting: {
    subject: 'CTA – New Meeting Booking',
    recipient: process.env.CTA_MEETING_EMAIL || process.env.CONTACT_EMAIL_RECEIVER,
    template: (data) => `
      <h2>Call‑to‑Action Meeting Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Meeting Purpose:</strong> ${data.purpose || 'Not specified'}</p>
      <p><em>Submitted via the CTA modal on the homepage.</em></p>
    `
  },
  cta_catalogue: {
    subject: 'CTA – Catalogue Request',
    recipient: process.env.CTA_CATALOGUE_EMAIL || process.env.CONTACT_EMAIL_RECEIVER,
    template: (data) => `
      <h2>Catalogue Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Catalogue Type:</strong> ${data.purpose || 'Not specified'}</p>
      <p><em>Submitted via the CTA modal on the homepage.</em></p>
    `
  }
};

app.post('/api/send-email', async (req, res) => {
  const { formType, name, email, phone, purpose, service, message } = req.body;

  if (!formType || !FORM_CONFIG[formType]) {
    return res.status(400).json({ error: 'Invalid or missing form type.' });
  }
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const config = FORM_CONFIG[formType];
  const html = config.template({ name, email, phone, purpose, service, message });

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: config.recipient,
      subject: config.subject,
      html,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});