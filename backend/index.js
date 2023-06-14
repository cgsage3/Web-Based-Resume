// To connect with your mongoDB database
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true } )

.then(() => console.log('Connected Successfully'))

.catch((err) =>err ? console.log(err) :
    console.log('Connected to yourDB-name database'));

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
const User = mongoose.model('users', UserSchema);
const Exprerience = mongoose.model('newexp', experienceSchema);
 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // Exprerience.createIndexes();
    // You can check backend is working or not by
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
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

app.get("/xp", async (req, res) => {
  try {
    const u = await Exprerience.find({ });
    res.send(u);
    console.log(u);
  } catch (err) {
    console.log(err);
  }
});


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