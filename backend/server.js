const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
       
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL, 
            subject: `Portfolio Contact Form - Message from ${name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Sender's Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

       
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
