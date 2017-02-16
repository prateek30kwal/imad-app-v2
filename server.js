var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles={
    'articleOne':{
            title:'THIS IS THE NEW PAGE OF ARTICLE -ONE',
            heading:'ARTICLE-ONE',
            date:'16-feb-2017',
            content:`
                
                
                <div>
                    <p>
                        HELLO FRIENDS THIS IS MY FIRST WEB PAGE ON THE HASURA-APP.IO<br>
                        AND I AM VERY THANKFUL TO THE TEAM OF HASURA AND NPTEL TEAM THAT <br>
                        THEY PROVIDE A GREAT OPPPORTUNITY BY PROVIDING A PLATFORM TO BUILD OUR OWN <br>
                        APP.<br>
                    </p>
                </div>`},
    'articletwo':{
            title:'THIS IS THE NEW PAGE OF ARTICLE-TWO',
            heading:'ARTICLE-TWO',
            date:'18-feb-2017',
            content:`
                
                
                <div>
                    <p>
                        HELLO FRIENDS THIS IS MY SECOND WEB PAGE ON THE HASURA-APP.IO<br>
                        AND I AM VERY THANKFUL TO THE TEAM OF HASURA AND NPTEL TEAM THAT <br>
                        THEY PROVIDE A GREAT OPPPORTUNITY BY PROVIDING A PLATFORM TO BUILD OUR OWN <br>
                        APP.<br>
                    </p>
                </div>`
    },
    'articlethree':{
        title:'THIS IS THE NEW PAGE OF ARTICLE-THREE',
            heading:'ARTICLE-THREE',
            date:'20-feb-2017',
            content:`
                
                
                <div>
                    <p>
                        HELLO FRIENDS THIS IS MY THIRD WEB PAGE ON THE HASURA-APP.IO<br>
                        AND I AM VERY THANKFUL TO THE TEAM OF HASURA AND NPTEL TEAM THAT <br>
                        THEY PROVIDE A GREAT OPPPORTUNITY BY PROVIDING A PLATFORM TO BUILD OUR OWN <br>
                        APP.<br>
                    </p>
                </div>`
    },
    
    
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;
            var htmlcontent= `
                   
                <html>
                <head>
                    <title>
                    ${title}
                    </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="/ui/style.css" rel="stylesheet" />
                    
                </head>
                <body>
                  <div class="container">
                    <div>
                        <a href="/">HOME</a>
                    </div>
                    <hr/>
                    <h2>${heading}</h2>
                    <div>
                        <h3>${date}</h3>
                    </div>
                    ${content}
                  </div>
                </body>
            </html>
            `;
            return htmlcontent;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
    var articleName=req.params.articleName;
    
    res.send(createTemplate(articles[articleName])); 
});
/*app.get('/article-two',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});
app.get('/article-three',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
