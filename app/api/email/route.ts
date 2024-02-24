import { isRatelimited } from "@/utils/ratelimits";
import nodemailer from "nodemailer";
import { type MailOptions } from "nodemailer/lib/json-transport";

const { SEND_EMAIL, RECEIVE_EMAIL, APP_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: SEND_EMAIL,
    pass: APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { content, email }: { content: string; email: string } =
    await request.json();
  const mailOptions: MailOptions = {
    from: SEND_EMAIL,
    to: RECEIVE_EMAIL,
    subject: "Website Email",
    text: `[${email}]\n\n${content}`,
  };
  transporter.sendMail(mailOptions);
  return new Response("Email has been sent");
}
