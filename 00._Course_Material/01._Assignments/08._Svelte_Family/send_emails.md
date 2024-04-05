# Send emails 

Hand-in: No Teams hand in required since this will be part of mandatory II and thus part of the exam project.

Send emails but beware:

* **NEVER** use your personal email for this.

* **NEVER** push credentials, API keys, secrets or passwords to Git. 

## Suggestion 1: Resend

Easiest solution and sends out actual emails: 

https://www.resend.com

## Suggestion 2: Nodemailer

https://nodemailer.com/

Nodemailer provides a fake SMTP server for testing called Ethereal Mail. It is fine to use this but no actual emails will be sent out. You can check Ethereal mail to get a link to the email that would’ve been sent.

Here is an example of how to use Ethereal Mail.

```js
import nodemailer from 'nodemailer';

const testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});

const info = await transporter.sendMail({
  from: '"Your Name" <your.email@example.com>',
  to: 'recipient@example.com',
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: '<b>Hello world?</b>',
});

console.log('Message sent: %s', info.messageId);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
```

### [Optional] Send actual emails

It is not required to configure Nodemailer with an actual SMTP server. For instance, you could use Gmail to act as an SMTP server that sends out emails.  

If you use Gmail then remember to turn on “less secure apps”. For security reasons this has become harder in recent years but there are ways around it. 

NEVER use your personal email with Nodemailer and be careful not to leak the credentials by pushing them to pubilc Git repositories. 

## Suggestion 3: Other

Sendgrid, Mailgun, Amazon SES etc.  