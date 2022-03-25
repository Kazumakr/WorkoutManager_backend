# WorkoutManager-Backend

This project is for managing workout records.

Project Link: [https://spiffy-puppy-816ccb.netlify.app/]

Test Account  
Email: test@test.com  
Password: Test

Frontend : [https://github.com/Kazumakr/WorkoutManager_frontend]

## Table of Contents (Optional)

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [References](#references)

## Description

The reason I created this project is because I wanted to keep track of my workouts. I have to memorize the last weight I used in order to properly increase the dumbbell weight. In addition to weight, I also want to keep track of dates. I felt I needed this app because I have to record these in each body part.

The status (rest, ready, lazy) is displayed according to the time elapsed from the date of the workout, so you can workout with recovery in mind. You can also register a weekly schedule. I named this app "Workout Manager" because these features help people who work out.

This is the first time using MySQL for my own project and learned how to handle it differently from MongoDB, which I use frequently.  
I struggled with the nodejs frameworks sequelize and jwt. The code style of Sequelize is slightly different from mongoose, so I built this project while reading the official documentation and stackoverflow. I was not sure where to store the jwt token, but I stored it in localstorage and passed through authentication middleware on every page refresh. I felt I needed to learn to enhance security.

### Built With

- [Sequelize](https://sequelize.org/)
- [MySQL](https://dev.mysql.com/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)

## Features

- Authentification(SignUp/Login)
- Edit an account info
- Delete an account
- Add a workout record
- Edit a workout record
- Delete a workout record
- Create a workout schedule
- Edit a workout schedule
- Get workouts by body parts

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Kazumakr/
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter parameters for MySQL connection in `.env`.
   ```shell
   PORT=3001
    USERNAME=
    PASSWORD=
    DATABASE=
    HOST=
   ```
4. start
   ```sh
   npm start
   ```

## Usage

## User

### Create a new user(sign up)

`POST /users/signup`

### Login

`POST /users/login`

### Get single user (id: UserID)

`GET /users/singleuser/:id`

### Update user infomation

`PUT /users/:id`

### Update password (id: UserID)

`PUT /users/changepassword/:id`

### Delete user (id: UserID)

`DELETE /users/delete/:id`

### authentification user

`GET /users/auth`

## Workout

### Create a new workout record

`POST /workouts`

### Update a workout record (id : workout ID)

`PUT /workouts/:id`

### Delete a workout record (id : workout ID)

`DELETE /workouts/:id`

### Get workout records (limit : Number of data loads at one time)

`GET /workoutslist/:limit`

### Get a single workout record (id : workout ID)

`GET /workouts/:id`

## Schedule

### Create a new schedule

`POST /schedule`

### Update a schedule

`PUT /schedule`

### Get a schedule

`GET /schedule`

## Days(This is used to update user status)

### Push a new date of workout (id : UserId)

`POST /days/:id`

## License

License under the [MIT License](LICENSE)

## References

- [Sequelize](https://sequelize.org/)
- [MySQL](https://dev.mysql.com/doc/)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [stack overflow](https://stackoverflow.com)
- [BezKoder](https://www.bezkoder.com)
- [YouTube](https://www.youtube.com)
- [DEV Community](https://dev.to)
- [MDN](https://developer.mozilla.org/)
- [HTML DOM](https://htmldom.dev/)
- [Medium](https://medium.com/)
