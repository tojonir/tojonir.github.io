require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const { json } = require("express");

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello from resume sender!");
});

app.post("/", async (req, res) => {
  if (req.body.to === undefined) {
    return res.status(401).json("receiver is required");
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_AUTH,
    },
  });

  await transporter.sendMail(
    {
      from: "tojonirinandrianarijaona@gmail.com",
      to: req.body.to,
      subject: "ANDRIANARIJAONA Tojonirina",
      html: {
        path: "./mail.html",
      },
      encoding: "text/html",
      attachments: [
        {
          path: "./assets/in.png",
          cid: "in",
        },
        {
          path: "./assets/instagram.png",
          cid: "insta",
        },
        {
          path: "./assets/Profile.png",
          cid: "profile",
        },
      ],
    },
    (err) => {
      if (err) return res.status(400).json(err);
      return res.json("sent");
    }
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
