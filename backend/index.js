// To connect with your mongoDB database
require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const puppeteer = require('puppeteer'); // Adding Puppeteer
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true } )

.then(() => console.log('Connected Successfully'))

.catch((err) =>err ? console.log(err) :
    console.log('Connected to yourDB-name database'));

// Schema for info
const infoSchema = new mongoose.Schema({
    bio: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
  
});
// Schema for experience
const experienceSchema = new mongoose.Schema({
    year: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
        unique: true,
    },    
    companyName: {
        type: String,
        required: true,
        unique: true,
    },
    details: {
        type: [String],
        unique: true,
    },
  
});
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Schema for cover letter
const coverSchema = new mongoose.Schema({
    coverName: {
        type: String,
        required: true,
    },
    dear: {
        type: String,
    },
    letter: {
        type: String,
        required: true,
        unique: true,
    },
    createdOn: Date
});
const User = mongoose.model('users', UserSchema);
const Exprerience = mongoose.model('newexp', experienceSchema);
const Cover = mongoose.model('coverLetter', coverSchema);
const Info = mongoose.model('info', infoSchema);
 

app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is working!");
    // Exprerience.createIndexes();
    // Cover.createIndexes();
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly

});

app.post("/add-cover", async (req, resp) => {
    try {
        const cov = new Cover(req.body);
        let coverR = await cov.save();
        coverR = coverR.toObject();
        if (coverR) {
            delete coverR.password;
            resp.send(req.body);
            console.log(coverR);
        } else {
            console.log("cover already added");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.post("/add-info", async (req, resp) => {
    try {
        const infoV = new Info(req.body);
        let infoR = await infoV.save();
        infoR = infoR.toObject();
        if (infoR) {
            delete infoR.password;
            resp.send(req.body);
            console.log(infoR);
        } else {
            console.log("Info already added");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.post("/add", async (req, resp) => {
    try {
        const exp = new Exprerience(req.body);
        let result = await exp.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("experience already added");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.get("/fetch", async (req, res) => {
  try {
    const u = await User.find({ });
    res.send(u);
    console.log(u);
  } catch (err) {
    console.log(err);
  }
});

app.get("/fetch-cover", async (req, res) => {
  try {
    const b = await Cover.find({ });
    res.send(b);
    console.log(b);
  } catch (err) {
    console.log(err);
  }
});

app.get("/fetch-bio", async (req, res) => {
  try {
    const c = await Info.find({ });
    res.send(c);
    console.log(c);
  } catch (err) {
    console.log(err);
  }
});

app.get("/xp", async (req, res) => {
  try {
    const u = await Exprerience.find({ });
    res.send(u);
    console.log(u);
  } catch (err) {
    console.log(err);
  }
});


app.use('/p-pdf/covername/:id', (req, res, next) => {
    // Launching the Puppeteer controlled headless browser and navigate to the Digimon website
    url="https://web-based-reume-front.onrender.com?coveronly=true&covername=" + req.params.id;
    loc="public/cover"+req.params.id+".pdf";
    console.log(url);
(async () => {
    const browser = await puppeteer.launch({});
    const rPage = await browser.newPage();
    const cPage = await browser.newPage();


    await cPage.goto(url, {
        waitUntil: "networkidle0"
    });

    await cPage.pdf({
        path: loc,
        format: "Letter",
        printBackground: true
    });

    await browser.close();
})();
next()
}, (req, res, next) => {
  res.send('Printing Pdf')
  next()
})

app.use('/p-pdf/resume', (req, res, next) => {
(async () => {
    const browser = await puppeteer.launch();
    const rPage = await browser.newPage();
    const cPage = await browser.newPage();

    await rPage.goto("https://web-based-reume-front.onrender.com?resumeonly=true", {
        waitUntil: "networkidle2"
    });


    await rPage.pdf({
        path: "public/resume.pdf",
        format: "Letter",
        printBackground: true
    });

    await browser.close();
})();
next()
}, (req, res, next) => {
  res.send('Printing Pdf')
  next()
})

app.use(express.static('public'))
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(5000);

