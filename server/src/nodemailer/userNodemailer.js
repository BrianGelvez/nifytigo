require('dotenv').config();
const { GMAIL_USER, GMAIL_PASSWORD } = process.env;
const nodemailer = require('nodemailer')




const WelcomeEmail = async (email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASSWORD
            },
        });

        const mailOptions = {
            from: GMAIL_USER,
            to: email,
            subjet: 'Bienvenido a nuestra pagina!',
            text: 'gracias por registrarte a NifytiGo, ahora puedes comprar y vender Nfts en el momento que quieras',
        }

        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.error('Error al enviar el correo electónico: ', error);
    }
};

module.exports = WelcomeEmail;


