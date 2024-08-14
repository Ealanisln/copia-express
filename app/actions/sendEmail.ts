// app/actions/sendEmail.ts
"use server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const msg = {
    to: "copiaexpressleon@outlook.com", // Your email address
    from: "emmanuel@alanis.dev", // Your verified sender email in SendGrid
    subject: `New contact form submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Phone: ${phone}
      Message: ${message}
    `,
    html: `
      <strong>Nombre:</strong> ${name}<br>
      <br>
      <strong>Correo electrónico:</strong> ${email}<br>
      <strong>Asunto:</strong> ${subject}<br>
      <strong>Telefóno:</strong> ${phone}<br>
      <strong>Mensaje:</strong> ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}
