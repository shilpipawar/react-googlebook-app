
# React-GoogleBook-APP
 React-based Google Books Search app. This application has built with React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. we have also use Node, Express and MongoDB so that users can save books to review or purchase later.

 # Application has 2 pages:
1. Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.


2. Saved - Renders all books saved to the Mongo database. User has an option to "View" the book info, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.


 ## Express routes for your app:

* /api/books (get) - Should return all saved books as JSON.
* /api/books (post) - Will be used to save a new book to the database.
* /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
* (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

# GitHUb & Heroku link 
Gethub [{https://github.com/shilpipawar/react-googlebook-app}] 
Application deployed on heroku click here [https://boiling-sands-13236.herokuapp.com/]
## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
