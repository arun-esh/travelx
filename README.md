![image-20220812010623419](img/image-20220812010623419.png)

<h1 align="center">
Travelx
</h1>

<h2 align="center">
University Courseware COMP - 3340 Project
</h2>

<h4 align="center">
University of Windsor
</h4>



<hr>

<h3 align="center">
🔴 We are still working on this project 🔴
</h3> 

<hr>

The project is the part of the university courseware 3340 which relates to basics of the web development. As the part of course, we learn HTML, CSS, javascript, Server Side PHP, NodeJs, Databases, etc. 

Click on the link to check the [Requirements](https://github.com/arun-esh/comp3340Project/blob/main/requirements.md)



## About Travelx

![Issues](https://img.shields.io/github/issues/arun-esh/comp3340Project) ![Forks](https://img.shields.io/github/forks/arun-esh/comp3340Project) ![Repo Size](https://img.shields.io/github/repo-size/arun-esh/comp3340Project) ![Contributors](https://img.shields.io/github/contributors/arun-esh/comp3340Project)   

Named out Project as **TRAVELX** which is vacation booking website and has locations all over the world. Travelx customer can book their stay as per their likings. 

### Tech we used

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css](https://img.shields.io/badge/CSS3-1572B6?&style=for-the-badge&logo=css3&logoColor=white) ![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![saas](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![php](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white) 

![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) ![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![mongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)



### How it started

To have database was one of the requirements of the project. Started googling around and decided to go with mongoDB. While learning mongoDB, [Arunesh](https://github.com/arun-esh) came across the open databases from [mongoDB university](https://university.mongodb.com). Here is his [Proof of Completion](https://university.mongodb.com/course_completion/836e6c4a-4f7d-43ed-8ed0-24f0319d261b). 

Dataset `sample_airbnb` has vocation home listings and their reviews. This dataset has around 5000 entries and each entry has minimum of 30 fields. We needed a dataset which has decent content and also can easily be combined with frontend. 

**Initial Idea**

* Get a front page with all the locations
  * Add some basic info related to locations
    * location name
    * price
    * summary or description
    * number of bathrooms
    * number of bedrooms
    * image of the location
    * link to detailed information about the location
* Get few static pages
  * Login Page
  * Signup Page
  * About
  * Contact us



## How to install

### For mac users

* Go to [Nodejs.org](https://nodejs.org/en/)
* Download the package

![image-20220812005444133](img/image-20220812005444133.png)

* Run the installer

![image-20220812005625814](img/image-20220812005625814.png)

Verify Node installtion

```bash
node -v
```



## Backend

### Datasource 

For this project we use the data shared by [MongoDB](https://www.mongodb.com/docs/atlas/sample-data/sample-airbnb/). The data provided by MongoDB is a sample data from AirBnB's open source data ([link](http://insideairbnb.com/get-the-data/)).

### Database

We used mongoDB as database for this project which is a non-relational database. Here is the schema for user collection. Used mostly `type: string`, but there are other types as well. Check out the schema for **products** which has variety of types for its fields. If there is a`Required` field that means we have to add this info, otherwise we will see the appropriate error notification.


**Example**: In case,  `name:` is not provided, then it will alert the user to provide the name with `message:` `Please tell us your name!`



```jsx
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  }
});

const User = mongoose.model('User', userSchema); 

module.exports = User;

```

