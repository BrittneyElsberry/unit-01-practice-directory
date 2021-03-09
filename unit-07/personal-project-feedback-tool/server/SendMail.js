// // const nodemailer = require('nodemailer')

// async function main() {
//     // Create a SMTP transporter object
//     let transporter = nodemailer.createTransport({
//         sendmail: true,
//         newline: 'windows',
//         logger: false
//     });

//     // Message object
//     let message = {
//         from: req.body.email,

//         // Comma separated list of recipients
//         to: 'Test Manager <testnodemailerprojects@yahoo.com>',
//         // bcc: 'andris@ethereal.email',

//         // Subject of the message
//         subject: 'New feedback from your team has been submitted!',

//         // plaintext body
//         text: 'Hello!',

//         // HTML body
//         html:
//             '<p><b>Hello</b> to myself</p>' +
//             '<p>___ from your team submitted new feedback with from the ____ category. Here\'s what they had to say " "<br/></p>',

//             //can send images with img tag.. example: <img src="cid:nyan@example.com"/>

//         // An array of attachments
//         attachments: [
//             // String attachment
//             {
//                 filename: 'notes.txt',
//                 content: 'Some notes about this e-mail',
//                 contentType: 'text/plain' // optional, would be detected from the filename
//             },

//             // Binary Buffer attachment
//             {
//                 filename: 'image.png',
//                 content: Buffer.from(
//                     'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
//                         '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
//                         'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
//                     'base64'
//                 ),

//                 cid: 'note@example.com' // should be as unique as possible
//             },

//             // File Stream attachment
//             {
//                 filename: 'nyan cat ✔.gif',
//                 path: __dirname + '/assets/nyan.gif',
//                 cid: 'nyan@example.com' // should be as unique as possible
//             }
//         ]
//     };

//     let info = await transporter.sendMail(message);
//     console.log('Message sent successfully as %s', info.messageId);
// }

// main().catch(err => {
//     console.error(err.message);
//     process.exit(1);
// });