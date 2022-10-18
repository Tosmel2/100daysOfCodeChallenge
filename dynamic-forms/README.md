# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


 ## Introduction
Interest in digital awareness has dramatically increased, and web application is one of the great ways to build and design a software application to solve one human challenge or the other. Collecting users’ data is one area of development that can not be overlooked.

Are you a junior/senior software engineer who wants to collect data in chunks using form fields and watch out for individual changes using react hooks? Then this article is for you.

## Things to Learn
In this article, I will show you how I handle the following:

- Render dynamic forms
- Handle the changes in all forms
- Using a button to add more forms
- Using a button to remove forms
- Use styled components
- Best code practices

## Prerequisite
- Know Javascript
- Know ReactJs
- Install Npm/Node

## Setting Up Environment
To create a new react project, use the following [link](https://create-react-app.dev/docs/getting-started/), and name it dynamic-forms. In your terminal, navigate to the desktop folder and install styled-components as shown below:

<code>
cd desktop
npx create-react-app@latest dynamic-forms
cd dynamic-forms

# with npm
npm install --save styled-components

# with yarn
yarn add styled-components

code .

</code>

In the snippet above, I navigated to the desktop folder, went inside to the dynamic-forms, react project I created and installed styled-components for a flexible styling of the application.

## Folder Structure
Let’s go to the terminal and run the following code snippet:

<code>
cd src
mkdir View
cd View
mkdir Styles Util
cd Styles
touch ViewStyles.js
cd ..
cd Util
touch handlers.js
cd ..
touch Main.js
cd ..

</code>

I navigated inside the src folder, and created a folder named View, inside the View folder, I created two folders named Styles, Util and a component named Main.js. Inside the Styles folder, I created a file named ViewStyle.js, and inside the Util I created handlers.js.

Let’s go into the app.js and remove the returned jsx, leaving just the div elements with the class of App.


<code>
  import "./App.css";
  import Main from "./View/Main";

  const App = () => {
    return (
      <div>
        <Main />
      </div>
    );
  };

  export default App;
</code>

let's go into the app.css and removed all the style properties, and add a default styling as show below:

<code>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</code>

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.