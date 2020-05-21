const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});
