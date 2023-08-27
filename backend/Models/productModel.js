// The model.js file in the models folder defines the Mongoose schema for your data.

// The schema defines the structure and validation rules for your MongoDB database.

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must hava a name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
    maxLength:[8,'The  price should be less than 8 characters']
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true],
      },
      url: {
        type: String,
        required: [true],
      },
    },
  ],
  category:{
    type:String,
    required:[true,'The product should hava a  category ']
  },
  stock:{
    type:Number,
    default:1,
    maxLength:[4,'The product stock should be less than 4 characters']
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comments: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// module.exports:
// This is a Node.js feature that allows you to export objects from a module.

module.exports = mongoose.model("Product", productSchema);

// The mongoose.model() function takes two arguments:

// 1) The first argument, "Product", is the name of the model. This name is used to identify the collection in the MongoDB database. MongoDB will pluralize the name and create a collection with that name in lowercase (e.g., "products").

// 2)  The second argument, productSchema, is the schema that defines the structure and validation rules for the documents stored in the "products" collection.
