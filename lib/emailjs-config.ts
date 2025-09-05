// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail recommended)
// 4. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
// 5. Get your Public Key from Account > API Keys
// 6. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_portfolio", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_contact", // Replace with your EmailJS template ID
  PUBLIC_KEY: "your_public_key_here", // Replace with your EmailJS public key
}

// Example EmailJS template content:
// Subject: New Portfolio Contact from {{from_name}}
// Body:
// Name: {{from_name}}
// Email: {{from_email}}
//
// Message:
// {{message}}
