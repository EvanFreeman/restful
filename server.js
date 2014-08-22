var express = require('express');
var bodyParser = require('body-parser');
var restful = require('node-restful');
var mongoose = restful.mongoose;

var app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/restful');

var ProductSchema =mongoose.Schema({
  name: String,
  sku: String,
  price: Number
});

var Products = restful.model('products', ProductSchema);

Products.methods(['get','put','post','delete']);
Products.register(app, '/api/products');

app.listen(3000);
console.log('Server is running on port 3000');
