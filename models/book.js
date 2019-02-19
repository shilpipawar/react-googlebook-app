const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/react-googlebook-app"
);

const googlebooks = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type:String},
  image:String,
  link: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", googlebooks);

// const bookseed = new Book({ title: "The Hunger Games",
// authors: ["Suzanne Collins"],
// description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
// image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
// link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
// });

module.exports = Book;