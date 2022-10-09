# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Introduction

# Prerequisites
- Route Protections
- What Are Protected Routes?
- How To Create Protected Routes In React
Step 1 : Create a new react project <br>
Step 2 : Install dependencies <br>
Step 3 : Create Some Components<br>
Step 4 - Implement routes<br>
Step 5 - Create protected route<br>
Step 6 - Implement protected route<br>

## Introduction
 Often times, when building an application, you'll need to protect certain routes in your application from users who don't have the proper authentication/authorisation.

React router is a great way to go when it comes to routing, but you don’t really have the option to protect routes from being accessed by anyone.

Now, that's a challenge!

In this article, I will show you a super neat way of resolving a piece of those challenges. we will learn how to put restrictions on access to certain pages/routes based on the user's authentication.

We'll cover the following
- Route Protection

- How To Create Protected Routes In React

- Session Storage
Note: you will be using React Router v6, which is a bit different from previous versions.

## Prerequisites
To follow along with the examples in this article, be sure to have some or all of the following.

- A basic understanding of React.
- An understanding of React Router.

## Route Protections
Preventing unauthorised users from accessing your React page is critical for security.

When it comes to security and protection, it is often a hassle and a complication to do in ReactJs. Luckily, the solution to this is really simple and straightforward

# What Are Protected Routes?
Protected routes are those routes that only grant access to authorised users. This means that users must first meet certain conditions before accessing that specific route.

Protected routes let us choose which routes users can visit if they are logged in. For example, you might have public routes that you want anyone accessing, like a landing page, a about page, and the login page. Protected routes should only be available to users that are logged in, like a dashboard, profile or settings page.


## How To Create Protected Routes In React
# Step 1 : Create a new react project
We start by creating a app with the name "react protected app". You could name it anything you like.

<code>npx create-react-app react-protected-app </code>

# Step 2 : Install dependencies
We'd be installing the "react-router-dom" library for page routing.
<code>
  # Using NPM
  npm install react-router-dom

  # Using Yarn
  yarn add react-router-dom
</code>

# Step 3 : Create Some Components
We'll have five(5) components, Home, About, Dashboard, Profile, and Signin, which will map nicely to our five(5) routes, /, /about, /dashboard, /profile, and /signin.

The /, /about, and /login routes will be publicly accessible while our /dashboard and /profile route will be private. For now, we'll just render them like normal routes though.

Create a folder called components and create the five(5) components in it.

- Home.js - '/'

<code>
  import React from 'react'

  const Home = () => {
    return (
      <div>
        <h1>Home page (Public)</h1> 
      </div>
    )
  }

  export default Home
</code>

- About.js - '/about'
<code>
  import React from 'react'

  const About = () => {
    return (
      <div>
        <h1>About page (Public)</h1> 
      </div>
    )
  }

  export default About
</code>

- SignIn.js - '/signin'

Here, we'll be using useState hook to manage the input states, session storage will also be used to store data locally on our browser, useNavigate() to direct user to their dashboard after the sign in process.

We store user data on our browser storage using sessionStorage.setItem()
<code>
  import { useState } from "react";
  import { useNavigate } from "react-router-dom";

  const SignIn = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
      name: '',
      email: '',
      password:''
    })

    const handleChange = (e)=> {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        sessionStorage.setItem('user', JSON.stringify(data))
        navigate("/dashboard")
    }

      return (
        <div className="signin">
          <h1> Sign in (Public)</h1>
          <form onSubmit={handleSubmit} >
            <input type="text" name='name' placeholder="Enter name" onChange={handleChange}/>
            <input type="text" name='email' placeholder="Enter email" onChange={handleChange} />
            <input type="text" name='password' placeholder="Enter password" onChange={handleChange} />
            <button >Sign in</button>
          </form>
        </div>
      );
    };

  export default SignIn
</code>

- Dashboard.js - '/dashboard'
This is a private route. Only logged in users should access it. We would implement the route protection in a bit.

Here, we get data from our session storage from sign in using sessionStorage.getItem() as shown below
<code>
  import React from 'react'
  import { Link } from 'react-router-dom';

  const Dashboard = () => {
    let user = '';
    try {
      user = JSON.parse(sessionStorage.getItem('user'))
    } catch (error) {
      //
    }

    return (
      <div>
        <h1>Dashboard (Private)</h1>
        <p>{`Welcome to your Dashboard ${user.name}  `}</p>
        <p>Go to <Link to='/profile'> profile</Link></p>
      </div>
    )
  }

  export default Dashboard
</code>

- Profile.js - '/profile'
Another private route. We display the user details here and also give the user the ability to logout.

The logout feature simply clears the session storage using sessionStorage.clear() and redirects the user to the sign in page.

<code>
  import React from 'react'
  import { Link } from 'react-router-dom';

  const Profile = () => {
  let user = ""
    try {
      user = JSON.parse(sessionStorage.getItem('user'))
    } catch (error) {
      //
    }

    const logout = () => {
      sessionStorage.clear()
      window.location='/signin'
    }

    return (
      <div>
        <h1>Profile (Private)</h1>
        <h3>Your details</h3>
        <p>{`Name: ${user?.name}`}</p>
        <p>{`Email: ${user?.email}`}</p>
        <p>Back to <Link to='/dashboard'> dashboard</Link></p>
        <button onClick={()=> logout()}> Logout</button>
      </div>
    )
  }

  export default Profile

</code>

# Step 4 - Implement routes
In your index.js file, import the BrowserRouter component and wrap it over your App.js component as shown below.
<code>
  import React from "react";
  import ReactDOM from "react-dom/client";
  import { BrowserRouter as Router } from "react-router-dom";
  import App from "./App";

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
</code>

In your App.js file, import all the components as shown below.
<code>
import { Link, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import SignIn from "./components/Signin";
import Home from "./components/Home";
import About from "./components/About";


//nav component
function Nav() {
  return (
    <nav>
      <ul className="nav-links" >
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/signin">Sign In</Link> </li>
        <li> <Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link> </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
</code>

# Step 5 - Create protected route
Now the fun part, time to make our /dashboard and /profile routes private so only users who are authenticated can access them.

First off, let's create a new component called ProtectedRoute.js.

We create a function useAuth. This simply confirms if the user exist by checking the session storage. If user exist, they are given access using the Outlet component from react-router-dom

If the user doesn't exist, they get an alert and are redirected to the '/signin' route with the navigate function.

# Warning:

Note that this, or any other solution you write on the front-end, is going to be for UX purposes only. You should have proper checks in place on the server side to make sure users aren't getting access to data they shouldn't be.

<code>
  import React from 'react'
  import { Outlet } from 'react-router-dom';

  const ProtectedRoute = () => {
    const useAuth = () => {
      const user = sessionStorage.getItem('user');
      return user;
    };

    const navigate = () => {
      alert('You are unauthorised to access this. Please sign in')
      window.location="/signin";
    }

  const isAuth = useAuth();
    return (
        isAuth ? (<Outlet /> ) : navigate()
    )
  }

  export default ProtectedRoute
</code>

# Step 6 - Implement protected route
Now, we wrap our private routes with the ProtectedRoute.js component.

In your App.js file, import the ProtectedRoute component and wrap it over your private routes as shown below
<code>
  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
</code>

Your App.js file should look like this, as shown below.

<code>
import { Link, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import SignIn from "./components/Signin";
import Home from "./components/Home";
import About from "./components/About";

//nav component
function Nav() {
  return (
    <nav>
      <ul className="nav-links" >
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/signin">Sign In</Link> </li>
        <li> <Link to="/dashboard">Dashboard</Link></li>
        <li> <Link to="/profile">Profile</Link> </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />

        {/* public routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}
</code>

At this point, everything is working fine.

That's it on creating protected routes. You can now access the Dashboard and Profile page only if you are logged in. If you try to navigate to the Dashboard or Profile page without logging in you will be redirected to the Sign in page.

# Summary
This is just one example of how you can use React Router to add protected routes to your React application. React Router embraces React's composition model, you can compose it together in any way that makes sense for your app.

I hope this article helped you to understand private routes (alias protected routes) in React Router and how to use them as guards for routes that require authorisation based on the authentication status of a user.

What do you think about this article? Follow me and Share your thoughts in the comment section.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.