var express = require('express');
var expressHbs = require('express-handlebars');
var app = express();
//thiet lap thu vien handlebars

app.engine('handlebars',expressHbs({
    //thiet lap thu muc ten cua file layout cha
    layoutsDir:__dirname+'/views/layouts',
    defaultLayout:'main'
}))

app.set('view engine', 'handlebars');

//lang nghe http get
app.get('/' ,function (require , response){

    // response.send('hello xin chao cac ban :')
 

    // var name = "Dinh Phu";

    // var arr =["Apple","Class","Public","Name","ABC"];

    // response.render('abc',{
    //     title:name,
    //     date:'2021/03/29',
    //     array:arr});
    

});
app.get('/Login' ,function (require , response){

    // response.send('hello xin chao cac ban :')
 

    // var name = "Dinh Phu";

    // var arr =["Apple","Class","Public","Name","ABC"];

    // response.render('abc',{
    //     title:name,
    //     date:'2021/03/29',
    //     array:arr});
    

});
app.get('/Register' ,function (require , response){

    // response.send('hello xin chao cac ban :')
 

    // var name = "Dinh Phu";

    // var arr =["Apple","Class","Public","Name","ABC"];

    // response.render('abc',{
    //     title:name,
    //     date:'2021/03/29',
    //     array:arr});
    

});

//lang nghe http post
app.post('/Login' ,function (require , response){

   res.send('hello from simple server :)')

});

app.listen(process.env.PORT || '3002')