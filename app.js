const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const app = express();
const path = require("path");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
sgMail.setApiKey("SG." + process.env.apiKey);

// Enables CORS
app.use(cors({ origin: true }));

// connect mongodb
mongoose.connect(process.env.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const appSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: Number },
  age: { type: Number },
  gender: { type: String },
});

const Volunteer = mongoose.model("Volunteer", appSchema);

// appointment api
app.post("/api/volunteer", (req, res) => {
  const emailData = {
    from: "care.mysuru.tourism@gmail.com",
    to: req.body.email,
    subject: "Application submitted",
    // mail template
    html: `<section id="mail" style="font-family: Arial, Helvetica, sans-serif; text-align: left; width: 100%;position: relative;">
        <div id="image" style="width: 100%;">
            <img src="https://www.lumahealth.io/wp-content/uploads/2018/05/Transparency-in-the-Doctor-Patient-Relationship-1.jpg" alt="banner image" style="width: 100%;">
        </div>
        <div id="content" style="width: 100%;">
            <p>Dear ${req.body.name},</p>
            <p>Thank you for showing interest in becoming a volunteer.</p>
            <p>We have received your application, soon will be contacting you.</p>
            <p id="name">Name : ${req.body.name}</p>
            <p id="email">E-mail : ${req.body.email}</p>
            <p id="phone">Phone : ${req.body.phone}</p>
            <p id="gender">Gender : ${req.body.gender}</p>
            <br>
            <p>If you have any queries, You can contact us at +91 xxxxxxxxx</p>
            <br>
            <p>Regards,<br>Mysuru Tourism</p>
            <a href="https://error404-mysuru.herokuapp.com/" style="text-decoration: none; width: 100%;"><button style="width: 130px; height: 35px; border-radius: 5px; position: absolute; left: 50%; transform: translateX(-50%); background-color: #3A96FF; outline: none; border: none; color: white; font-size: 16px;">Visit MyDoc</button></a>
        </div>
        <br>
        <br>
        <br>
        <br>
    </section>    `,
  };
  let newApp = new Volunteer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    gender: req.body.gender,
  });
  newApp.save();

  (async () => {
    try {
      await sgMail
        .send(emailData)
        .then((sent) => {
          return res.send("Submitted successfully");
        })
        .catch((err) => {
          return res.send(err);
        });
    } catch (error) {
      return res.send(err);
    }
  })();
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 5000);
