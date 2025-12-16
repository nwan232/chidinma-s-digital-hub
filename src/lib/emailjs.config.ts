// EmailJS Configuration
// Get these values from your EmailJS account: https://www.emailjs.com/
// 1. Create a service (Gmail, Outlook, etc.) and get your Service ID
// 2. Create an email template and get your Template ID
// 3. Get your Public Key from Account > API Keys

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

