# next-hyperspace-boilerplate
Sample next.js [next-page-transition](https://github.com/illinois/next-page-transitions) boilerplate with a (star wars) hyperspace loading component

# Live Demo
Visit [https://next-hyperspace-boilerplate.now.sh/](https://next-hyperspace-boilerplate.now.sh/)

## Note
This project is built with next.js, but the hyperspace loading component can also be used in a native react project.

# Features
- Fade in/out transition when switching the page. You can alter it [here](https://github.com/borispoehland/next-hyperspace-boilerplate/blob/26b84375a2324fbb6875f4ed8e98daab63861dee/src/style.sass#L7). The transition was taken/kept from the [author's example snippet](https://github.com/illinois/next-page-transitions#getting-started)
- Hyperspace loading animation! Whenever your page has to wait for data, follow the instructions [here](https://github.com/illinois/next-page-transitions#support-for-delayed-enters) or use my code [here](https://github.com/borispoehland/next-hyperspace-boilerplate/blob/master/pages/loading.js) in order to play the hyperdrive animation (or a loading spinner) while "waiting" for the data (here, a timeout of 2 seconds was used). See the [troubleshooting section for more](#troubleshooting) 
- Powerful CSS with [SASS](https://sass-lang.com/)
- Code inspection with [ESLint](https://eslint.org/)

## Get started
- Clone the project, enter the root directory and run <code>npm install</code>
- For development mode, run <code>npm run dev</code>
- For production mode, run <code>npm run build</code> and then <code>npm run start</code>

## Troubleshooting
- I changed some lines in the [Loading component](https://github.com/borispoehland/next-hyperspace-boilerplate/blob/master/pages/loading.js) and somehow, the hyperdrive loading animation won't play anymore. What can I do?

First, make sure you call [this when the loading is done](https://github.com/borispoehland/next-hyperspace-boilerplate/blob/26b84375a2324fbb6875f4ed8e98daab63861dee/pages/loading.js#L14) (you will have this prop automatically when wrapping the page into the <code>&lt;PageTransition&gt;</code>-component, as shown [here](https://github.com/borispoehland/next-hyperspace-boilerplate/blob/26b84375a2324fbb6875f4ed8e98daab63861dee/pages/_app.js#L17)).
Besides, assign [this static prop](https://github.com/borispoehland/next-hyperspace-boilerplate/blob/26b84375a2324fbb6875f4ed8e98daab63861dee/pages/loading.js#L33) to the component that is loading the content.
Finally, return null while the state is loading, as shown [here](https://github.com/borispoehland/next-hyperspace-boilerplate/blob/26b84375a2324fbb6875f4ed8e98daab63861dee/pages/loading.js#L23).

- I want the charging animation to only be played if the loading time is longer than <code>X</code> seconds

Change the <code>loadingDelay</code>-prop as indicated [here](https://github.com/illinois/next-page-transitions#pagetransition-props).

For futher assistance, please consult [the original creator](https://github.com/illinois/next-page-transitions).



