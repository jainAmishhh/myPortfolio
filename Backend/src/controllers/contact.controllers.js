import { contactMe } from "../models/contact.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

const shareInfo = asyncHandler(async (req, res, next) => {
    try {
        const { name, email, number, services, aboutProject, message } = req.body;

        if ([name, email, number, aboutProject].some((field) => !field || field.trim() === " ")) {
            return res
                    .status(400)
                    .json({
                        success: false,
                        message: "All required fields must be filled: name, email, number, aboutProject"
                    });
        }

        const createEntry = await contactMe.create({
            name: name.trim(),
            email: email.trim(),
            number: number.trim(),
            services: services?.trim() || "Not specified", 
            aboutProject: aboutProject.trim(),
            message: message?.trim() || "",
        });

        await sendEmail({
            to: process.env.GMAIL_ID,
            subject: `New Contact Form Submission for ${services}`,
            text: `${aboutProject}`,
            html: `
              <h3>New Contact Request</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Number:</strong> ${number}</p>
              <p><strong>Services:</strong> ${services || "Not specified"}</p>
              <p><strong>Project Info:</strong> ${aboutProject}</p>
              <p><strong>Message:</strong> ${message || "No message provided"}</p>
            `,
        })

        res
          .status(201)
          .json({
            success: true,
            message: "Thanks for reaching out! I’ll get back to you soon.",
            data: createEntry,
          });
    } catch (error) {
        console.error("Server error:", error);
        next(error); 
    }
})

export  { shareInfo };
