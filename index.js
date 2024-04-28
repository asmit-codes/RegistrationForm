var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var userRoutes = require('./routes/userRoutes')
const app = express();

app.use(bodyParser.json());
app.use(express.static('pages'));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.post("/submit", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phno; // Corrected variable name
    var password = req.body.password;
    var cpwd = req.body.cpwd;

    var data = {
        "name": name,
        "email": email,
        "phone": phone,
        "cpwd": cpwd,
        "password": password
    };

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Succesfully");
    });
    res.sendFile(__dirname + '/pages/success.html');
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.html');
}).listen(3000);

console.log("Listening on port 3000");
