import {createTransport} from 'nodemailer';
import {Email} from '../interfaces/email.ts';
class MailService {
  constructor() {    
    this.transporter = createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: 
        pass: 
      },
    });
  }
  public static async sendMail(email: Email) {
  const mail
  }
}
