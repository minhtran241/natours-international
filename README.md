<h1 align="center">
  <br>
  <a href="https://natours-international.herokuapp.com/"><img src="https://github.com/minhtran241/natours-international/blob/main/public/img/logo-green-round.png" alt="Natours" width="200"></a>
  <div>
  ⛰ Natours-International Application ⛰
  </div>
</h1>

<h3 align="center">An awesome tour booking site built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a></h3>

✅ Natours-International is a full stack web application that specially designed for persons who love travelling and going on tour vacations.

✅ The API and the app itself are hosted on the same server.

## 🖼 Overview

✅ Natours-International allows users to book tour vacations.

✅ A visiting user who has not yet created an account on the app can simply see all the current tours as well as detailed information about each tour.

✅ Once signed up or logged in, they can then book any tour of their choice.

✅ Users can write only one review for any tour they book.

## 🎯 Purpose

✅ Natours-International is a pet project, built for the express purpose of honing my skills in back-end web development.

## 📝 Demonstration

#### 🏠 Home Page :

<div align="center">
<!-- ![natoursHomePage](https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Home.png | width=640) -->
<img src="https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Home.png" width="640">
</div>

#### ⛰ Tour Details :

<div align="center">
<img src="https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Booked-Tour.gif">
</div>

#### 💵 Payment Process :

<div align="center">
<!-- ![paymentprocess](https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Payment.png | width=640) -->
<img src="https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Payment.png" width="640">
</div>

#### 🔑 Login Page :

<div align="center">
<!-- ![login](https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Login.png | width=640) -->
<img src="https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Login.png" width="640">
</div>

#### 🏄‍♂️ User Profile :

<div align="center">
<!-- ![userprofile](https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Admin.png | width=640) -->
<img src="https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Admin.png" width="640">
</div>

## 🖥 API Usage

Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:

```
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
- {{password}} with your user password as value.
```

Check [Natours API Documentation](https://documenter.getpostman.com/view/8689170/SVmzvwpY?version=latest) for more info.

<b> API Features: </b>

Tours List 👉 https://natours-international.herokuapp.com/api/v1/tours

Tours State 👉 https://natours-international.herokuapp.com/api/v1/tours/tour-stats

Get Top 5 Cheap Tours 👉 https://natours-international.herokuapp.com/api/v1/tours/top-5-cheap

Get Tours Within Radius 👉 https://natours-international.herokuapp.com/api/v1/tours/tours-within/200/center/34.098453,-118.096327/unit/mi

## 💻 Deployment

The website is deployed with git into heroku. Below are the steps taken:

```
git init
git add -A
git commit -m "Commit message"
heroku login
heroku create
heroku config:set CONFIG_KEY=CONFIG_VALUE
parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js
git push heroku master
heroku open
```

You can also changed your website url by running this command:

```
heroku apps:rename natours-users
```

## 🛠 Build With

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Stripe](https://stripe.com/) - Online payment API
- [Postman](https://www.getpostman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
- [Heroku](https://www.heroku.com/) - Cloud platform

## 📲 Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running

```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```

## ♻️ Setting Up Your Local Environment

If you wish to play around with the code base in your local environment, do the following

```
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the neccessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB, MAPBOX, STRIPE, SENDGRID and MAILTRAP. Please ensure to have at least basic knowledge of how these services work.
* In your .env file, set environment variables for the following:
    * DATABASE=your mongodb database url
    * DATABASE_PASSWORD=your mongodb password

    * SECRET=your json web token secret
    * JWT_EXPIRES_IN=90d
    * JWT_COOKIE_EXPIRES_IN=90

    * EMAIL_USERNAME=your mailtrap username
    * EMAIL_PASSWORD=your mailtrap password
    * EMAIL_HOST=smtp.mailtrap.io
    * EMAIL_PORT=2525
    * EMAIL_FROM=your real life email address

    * SENDGRID_USERNAME=apikey
    * SENDGRID_PASSWORD=your sendgrid password

    * STRIPE_SECRET_KEY=your stripe secret key
    * STRIPE_WEBHOOK_SECRET=your stripe web hook secret

* Start the server.
* Your app should be running just fine.
```

#### ⚙️ Demo-`.env` file :

<div align="center">
<!-- ![demo-env](https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Demo-env.png | width=640) -->
<img src="https://github.com/minhtran241/natours-international/blob/main/public/Screenshots/Demo-env.png" width="640">
</div>

## 📌 Main Features

<div align="center">
✅ Users
✅ Tours
✅ Bookings
✅ Reviews
</div>

## 🏄‍♂️ Users

✅ Users can sign up with the application.

✅ Users can log into the application.

✅ Users can log out of the appication.

✅ Users can update their password.

✅ Users can reset their password

✅ Users can update their general information.

✅ Users can see their profile page.

✅ A user can be either a regular user or an admin or a lead-guide or a guide.

✅ When you sign up, you are a regular user by default.

## 🏝 Tours

✅ Tours can be created by an admin user or a lead-guide.

✅ Tours can be seen by every user.

✅ Tours can be updated by an admin user or a lead-guide.

✅ Tours can be deleted by an admin user or a lead-guide.

## ⛳️ Bookings

✅ Only regular users can book tours (make a payment).

✅ Regular users can not book the same tour twice.

✅ Regular users can see all the tours thay have booked.

✅ An admin user or a lead-guide can see every booking on the app.

✅ An admin user or a lead-guide can delete any booking.

✅ An admin user or a lead-guide can create a booking (manually, without payment).

✅ An admin user or a lead-guide can not create a bookng for thesame user twice.

✅ An admin user or a lead-guide can edit any booking.

## 💬 Reviews

✅ Only regular users can write reviews for tours which they have booked.

✅ All users can see the reviews of each tour.

✅ Regular users can edit and delete their own reviews.

✅ Regular users can not review thesame tour twice.

✅ An admin can delete any review.

## 🎉 Acknowledgement

- This project is part of the online course I've taken at Udemy. Thanks to Jonas Schmedtmann for creating this awesome course! Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2019](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)
