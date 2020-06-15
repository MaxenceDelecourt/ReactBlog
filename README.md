This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Hello,

This is my first project with react js
I wanted to learn this framework and after learning the course on openclassroom, i decided to
create my blog with create-react-app, antdesign and contenfulManagement.

You can download this application if you want have a personnal blog.
in this application i create a simple crud for article.

on this application you have 
- a Home ( for your presentation, contact etc ... ).
- a list of articles with a pagination and search bar.
- login access for an admin dashboard
- dashboard for change your account ( password, avatar etc .. ) and edit your article.

this application is under development.

for contentfull you need to create 2 content : 

post with fields :

- title (short text)
- description (short text)
- slug (short text) 
- content (long text)
- author (reference)
- publish Date (date & time)
- Featured Image (Media)

Author with fields :

- fullName (short text)
- Bio (long text)
- Website (short text) 
- Avatar (Media)

After this changed your configuration client in the react app :

check the file API.js in folder API.
and changed the access token and space configuration.

for this information you can go on your personal space in contentful account
in the settings go to the API KEYS and content management token and click on generate personal token.
(the space config is just in the tab content delivery).

After this yarn start for lunch your project on your localhost

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
