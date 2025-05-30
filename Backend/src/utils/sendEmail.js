import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text, html }) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_ID,
            pass: process.env.GMAIL_PASS,
        }
    });

    const mail = {
        from: `"Portfolio Contact" <${process.env.GMAIL_ID}>`,
        to,
        subject,
        text,
        html,
    }

    await transporter.sendMail(mail);
}

export { sendEmail }