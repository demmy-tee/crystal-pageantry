import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();



// transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendRegistrationEmail = async (contestant, contestantId) => {
  const emailBody = `
      <h2>Hello ${contestant.name},</h2>
      <p>🎉 Congratulations! You have successfully registered for the
      <b>Mr & Mrs Fresher Beauty Pageant ${new Date().getFullYear()}</b>.</p>

      <p>Your unique contestant ID is:
        <b style="color:#D4AF37">${contestantId}</b>
      </p>

      <p>Next Phase: Our team will review your details. You’ll be contacted soon about
      auditions and further requirements.</p>

      <p>Stay prepared and best of luck!</p>
      <br/>
      <p>Best Regards,<br/>Crystal Pageant Committee</p>
    `;

    const mailOptions = {
    from: process.env.EMAIL_USER,
    to: contestant.email,
    subject: `Welcome ${contestant.name} - Mr & Miss Fresher Pageant`,
    html: emailBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
