# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form to send emails.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Once connected, copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Choose a template or start from scratch
4. Set up your template with these variables:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email address
   - `{{message}}` - The message content
   - `{{to_email}}` - Your email address (chidinmanwankwoala@gmail.com)

   Example template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

5. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Scroll down to **API Keys**
3. Copy your **Public Key**

## Step 5: Configure Your Application

1. Create a `.env` file in the root of your project (same directory as `package.json`)
2. Add the following variables with your values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Restart Your Development Server

After adding the `.env` file, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message

## Troubleshooting

- **"Email service is not configured"**: Make sure your `.env` file exists and contains all three variables
- **"Failed to send message"**: Check your EmailJS dashboard for error logs
- **No email received**: Verify your email service is properly connected in EmailJS

## Security Note

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Your Public Key is safe to use in frontend code (it's designed for client-side use)

