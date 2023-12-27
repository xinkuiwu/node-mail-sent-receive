const nodemailer = require('nodemailer')
const fs = require('fs')

// 发邮件
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 587,
  secure: false,
  auth: {
    user: 'xxxxxxx@qq.com',
    pass: 'xxxxxxx'
  }
})

async function main() {
  const info = await transporter.sendMail({
    from: `"wu" <xxxxxxx@qq.com>`,
    to:'xxxxxxx@qq.com',
    subject: 'hello wuwu2',
    text: 'text xxxxx2',
    html: fs.readFileSync('./test.html')

  })

  console.log('邮件发送成功：', info.messageId)
}
main().catch(console.error)