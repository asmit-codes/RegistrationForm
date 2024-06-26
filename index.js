var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var userRoutes = require('./routes/userRoutes')
const app = express();


app.use(express.json());
app.use(express.static('pages'));
app.use(express.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://infoasmitkumar:qwertyuiop@bharatdb.amjmiin.mongodb.net/?retryWrites=true&w=majority&appName=bharatdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.post("/submit", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone; // Corrected variable name
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
    const path = require('path');
res.sendFile(path.join(__dirname, 'pages', 'success.html'));
});
app.use('/users', userRoutes);
app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.html');
}).listen(3000);

console.log("Listening on port 3000");