/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require("http");
//var cors = require('cors');
//
//var app = express();
//app.use(cors());

//var express = require("express")
//  , http = require("http");
//
//var app = express(); 
//var server = http.createServer(app);
//var request = require('request');
//
//request.post(
//    'http://127.0.0.1:9292/addTask',
//    { taskDTO: { key: 'value' } },
//    function (error, response, body) {
//        if (!error && response.statusCode === 200) {
//            // Send the response body as "Hello World"
//   var test = ["work", "work"];
//  // response.end(test +'');
//            console.log(body);
//        }
//    }
//);
//var express = require('express')

var items =[
                        {"name": "Write a NodeJS helloWorld", "addedOn": "04/11/2016"},
                        {"name": "Attend Owasp training", "addedOn": "04/12/2016"},
                        {"name": "Watch a tutorial on Angular 2", "addedOn": "04/13/2016"}
                        ];
//http.configure(function() {
//  http.use(express.bodyParser());
//});
                                                                       
http.createServer(function (request, response) {
    
   if ('/tasks' === request.url) {
        switch (request.method) {
            case 'GET':
                 var headers = {};
                headers["Access-Control-Allow-Origin"] = "*";
                headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
                headers["Access-Control-Allow-Credentials"] = true;
                headers["Content-Type"] = "application/json";
                headers["Access-Control-Max-Age"] = '86400'; // 24 hours
                headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
                //  show(response);
                // response.header('Access-Control-Allow-Origin', "*");
                response.writeHead(200, headers);

                // Send the response body as "Hello World"
                // var test = {"work":"workFromHome"};
                //  response.end(test+'');

                var otherArray = ["item1", "item2"];
                var otherArray1 = {"tasks": items};
                var otherObject = {item1: "item1val", item2: "item2val"};
                var json = JSON.stringify({
                    anObject: otherObject,
                    anArray: otherArray,
                    anotherArray: otherArray1,
                    another: "item"
                });
                response.end(json);
                break;
            case 'POST':
                var headers = {};
                headers["Access-Control-Allow-Origin"] = "*";
                headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
                headers["Access-Control-Allow-Credentials"] = true;
                headers["Content-Type"] = "application/json";
                headers["Access-Control-Max-Age"] = '86400'; // 24 hours
                headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
                //  show(response);
                // response.header('Access-Control-Allow-Origin', "*");
                response.writeHead(200, headers);
                add(request, response);
                break;
            default:
                badRequest(response);
        }
    } else {
        notFound(response);
    }
}).listen(9292);

// Console will print the message
console.log('Server running at http://127.0.0.1:9292/');


//function show(res) {
//    var html = '<html><head><title>Todo List</title></head><body>'
//            + '<h1>Todo List</h1>'
//            + '<ul>'
//            + items.map(function (item) {
//                return '<li>' + item + '</li>'
//            }).join('')
//            + '</ul>'
//            + '<form method="post" action="/">'
//            + '<p><input type="text" name="item" /></p>'
//            + '<p><input type="submit" value="Add Item" /></p>'
//            + '</form></body></html>';
//    res.setHeader('Content-Type', 'text/html');
//    res.setHeader('Content-Length', Buffer.byteLength(html));
//    res.end(html);
//}

function notFound(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
}

function badRequest(res) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bad Request');
}

var qs = require('querystring');
var bodyParser = require('body-parser')
//var app = express()

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
//
//// parse application/json
//app.use(bodyParser.json())
var qs = require('querystring');


function add(req, res) {
   // req.setHeader("Accept", "application/json");
//   res.setHeader('Content-Type', 'text/plain');
//    console.log(req.body+"in node");      // your JSON
//    items.push(req.body);
//    res.send("Task added successfully"); 
   // if (req.method === 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;
            console.log(body+' test body');
            items.push(JSON.parse(body));

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
//             res.statusCode = 400;
//             res.setHeader('Content-Type', 'text/plain');
            res.end(body); 
        });

        req.on('end', function () {
            var post = qs.parse(body);
            console.log(post+'post');
            // use post['blah'], etc.
        });
    //}
}