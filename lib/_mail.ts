import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  // TODO: Query params of both token and email should be used for verification, so there is no need for uuid token and can use smaller token such as nummber.

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: '2 Factor Autentication Code',
    html: `<p>Your 2FA code: ${token}</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  // TODO: Query params of both token and email should be used for verification, so there is no need for uuid token and can use smaller token such as nummber.
  const confirmLink = `${domain}/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  // TODO: Query params of both token and email should be used for verification, so there is no need for uuid token and can use smaller token such as nummber.
  const confirmLink = `${domain}/new-password?token=${token}&email=${email}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${confirmLink}">here</a> to reset your password.</p>`,
  });
};
