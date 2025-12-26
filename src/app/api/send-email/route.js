import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(request) {
    try {
        const { email, subject, message } = await request.json();

        // Basic validation
        if (!email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"TaskFlow" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
        });

        return NextResponse.json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email send error:", error);

        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
