const questions = [
  {
    question: `What should the console read when the following code is run?`,
    code: `
    const [, , animal] = ['Horse', 'Mouse', 'Cat'];
    console.log(animal); 
  `,
    answers: ["Horse", "Cat", "Mouse", "undefined"],
    correctAnswer: "Cat",
  },
  {
    question:
      "What is the name of the tool used to take JSX and turn it into createElement calls?",
    answers: ["JSX Editor", "ReactDOM", "Browser Buddy", "Babel"],
    correctAnswer: "Babel",
  },
  {
    question:
      "Why might you use useReducer over useState in a React component?",
    answers: [
      "when you want to replace Redux",
      "when you need to manage more complex state in an app",
      "when you want to improve performance",
      "when you want to break your production app",
    ],
    correctAnswer: "when you need to manage more complex state in an app",
  },
  {
    question:
      "Which props from the props object is available to the component with the following syntax?",
    answers: [
      "any that have not changed",
      "all of them",
      "child props",
      "any that have changed",
    ],
    correctAnswer: "all of them",
  },
  {
    question:
      "Consider the following code from React Router. What do you call :id in the path prop?",
    answers: [
      "This is a route modal",
      "This is a route parameter",
      "This is a route splitter",
      "This is a route link",
    ],
    correctAnswer: "This is a route parameter",
  },
  {
    question:
      "If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?",
    answers: ["`div`", "section", "component", "`h1`"],
    correctAnswer: "`h1`",
  },
  {
    question:
      "What does this React element look like given the following code?",
    code: `React.createElement('h1', null, "What's happening?");`,
    answers: [
      "`<h1 props={null}>What's happening?</h1>`",
      "`<h1>What's happening?</h1>`",
      '`<h1 id="component">What\'s happening?</h1>`',
      '`<h1 id="element">What\'s happening?</h1>`',
    ],
    correctAnswer: "`<h1>What's happening?</h1>`",
  },
  {
    question:
      "What property do you need to add to the Suspense component in order to display a spinner or loading state?",
    answers: ["lazy", "loading", "fallback", "spinner"],
    correctAnswer: "fallback",
  },
  {
    question:
      "How would you describe the message variable wrapped in curly braces below?",
    answers: [
      "a JS function",
      "a JS element",
      "a JS expression",
      "a JSX wrapper",
    ],
    correctAnswer: "a JS expression",
  },
  {
    question: "What can you use to handle code splitting?",
    answers: [
      "`React memo`",
      "`React split`",
      "`React lazy`",
      "`React fallback`",
    ],
    correctAnswer: "`React lazy`",
  },
  {
    question: "When do you use `useLayoutEffect`?",
    answers: [
      "to optimize for all devices",
      "to complete the update",
      "to change the layout of the screen",
      "when you need the browser to paint before the effect runs",
    ],
    correctAnswer: "to change the layout of the screen",
  },
  {
    question:
      "What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?",
    answers: [
      "Button A will not have access to the event object on click of the button",
      "Button B will not fire the handler this.handleClick successfully",
      "Button A will not fire the handler this.handleClick successfully",
      "There is no difference",
    ],
    correctAnswer: "There is no difference",
  },
  {
    question:
      "How do you destructure the properties that are sent to the Dish component?",
    answers: [
      "`function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }`",
      "`function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }`",
      "`function Dish(props) { return <h1>{name} {cookingTime}</h1>; }`",
      "`function Dish({}) { return <h1>{name} {cookingTime}</h1>; }`",
    ],
    correctAnswer:
      "`function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }`",
  },
  {
    question: "When might you use `React PureComponent`?",
    answers: [
      "when you do not want your component to have props",
      "when you have sibling components that need to be compared",
      "when you want a default implementation of `shouldComponentUpdate()`",
      "when you do not want your component to have state",
    ],
    correctAnswer:
      "when you want a default implementation of `shouldComponentUpdate()`",
  },
  {
    question:
      "Why is it important to avoid copying the values of props into a component's state where possible?",
    answers: [
      "because you should never mutate state",
      "because `getDerivedStateFromProps()` is an unsafe method to use",
      "because you want to allow a component to update in response to changes in the props",
      "because you want to allow data to flow back up to the parent",
    ],
    correctAnswer:
      "because you want to allow a component to update in response to changes in the props",
  },
  {
    question: "What is the children prop?",
    answers: [
      "a property that adds child components to state",
      "a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents",
      "a property that lets you set an array as a property",
      "a property that lets you pass data to child elements",
    ],
    correctAnswer:
      "a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents",
  },
  {
    question:
      "Which attribute is React's replacement for using innerHTML in the browser DOM?",
    answers: [
      "injectHTML",
      "dangerouslySetInnerHTML",
      "weirdSetInnerHTML",
      "strangeHTML",
    ],
    correctAnswer: "dangerouslySetInnerHTML",
  },
  {
    question: "Which of these terms commonly describe React applications?",
    answers: ["declarative", "integrated", "closed", "imperative"],
    correctAnswer: "declarative",
  },
  {
    question: "When using webpack, why would you need to use a loader?",
    answers: [
      "to put together physical file folders",
      "to preprocess files",
      "to load external data",
      "to load the website into everyone's phone",
    ],
    correctAnswer: "to preprocess files",
  },
  {
    question:
      "A representation of a user interface that is kept in memory and is synced with the 'real' DOM is called what?",
    answers: ["virtual DOM", "DOM", "virtual elements", "shadow DOM"],
    correctAnswer: "virtual DOM",
  },
  {
    question:
      "You have written the following code but nothing is rendering. How do you fix this problem?",
    answers: [
      "Add a render function",
      "Change the curly braces to parentheses or add a return statement before the `h1` tag",
      "Move the `h1` to another component",
      "Surround the `h1` in a `div`",
    ],
    correctAnswer:
      "Change the curly braces to parentheses or add a return statement before the `h1` tag",
  },
  {
    question: "To create a constant in JavaScript, which keyword do you use?",
    answers: ["const", "let", "constant", "var"],
    correctAnswer: "const",
  },
  {
    question:
      "What do you call a React component that catches JavaScript errors anywhere in the child component tree?",
    answers: [
      "error bosses",
      "error catchers",
      "error helpers",
      "error boundaries",
    ],
    correctAnswer: "error boundaries",
  },
  {
    question:
      "In which lifecycle method do you make requests for data in a class component?",
    answers: [
      "constructor",
      "componentDidMount",
      "componentWillReceiveProps",
      "componentWillMount",
    ],
    correctAnswer: "componentDidMount",
  },
  {
    question:
      "React components are composed to create a user interface. How are components composed?",
    answers: [
      "by putting them in the same file",
      "by nesting components",
      "with webpack",
      "with code splitting",
    ],
    correctAnswer: "by nesting components",
  },
  {
    question:
      "All React components must act like **_** with respect to their props.",
    answers: [
      "monads",
      "pure functions",
      "recursive functions",
      "higher-order functions",
    ],
    correctAnswer: "pure functions",
  },
  {
    question: "What is `[e.target.id]` called in this code snippet?",
    answers: [
      "a computed property name",
      "a set value",
      "a dynamic key",
      "a JSX code string",
    ],
    correctAnswer: "a dynamic key",
  },
  {
    question: "What is the name of this component?",
    answers: [
      "Clock",
      "It does not have a name prop",
      "ReactComponent",
      "Component",
    ],
    correctAnswer: "Clock",
  },
  {
    question: "What is sent to an `Array.map()` function?",
    answers: [
      "a callback function that is called once for each element in the array",
      "the name of another array to iterate over",
      "the number of times you want to call the function",
      "a string describing what the function should do",
    ],
    correctAnswer:
      "a callback function that is called once for each element in the array",
  },
  {
    question:
      "Why is it a good idea to pass a function to `setState` instead of an object?",
    answers: [
      "It provides better encapsulation",
      "It makes sure that the object is not mutated",
      "It automatically updates a component",
      "`setState` is asynchronous and might result in out of sync values",
    ],
    correctAnswer:
      "`setState` is asynchronous and might result in out of sync values",
  },
  {
    question:
      "What package contains the render() function that renders a React element tree to the DOM?",
    answers: ["`React`", "`ReactDOM`", "`Render`", "`DOM`"],
    correctAnswer: "`ReactDOM`",
  },
  {
    question: "How do you set a default value for an uncontrolled form field?",
    answers: [
      "Use the `value` property",
      "Use the `defaultValue` property",
      "Use the `default` property",
      "It assigns one automatically",
    ],
    correctAnswer: "Use the `defaultValue` property",
  },
  {
    question:
      "What do you need to change about this code to get this code to run?",
    answers: [
      "Add quotes around the return value",
      "Remove `this`",
      "Remove the render method",
      "Capitalize `clock`",
    ],
    correctAnswer: "Capitalize `clock`",
  },
  {
    question: "Which Hook could be used to update the document's title?",
    answers: [
      "`useEffect(function updateTitle() { document.title = name + ' ' + lastname; });`",
      "`useEffect(() => { title = name + ' ' + lastname; });`",
      "`useEffect(function updateTitle() { name + ' ' + lastname; });`",
      "`useEffect(function updateTitle() { title = name + ' ' + lastname; });`",
    ],
    correctAnswer:
      "`useEffect(function updateTitle() { document.title = name + ' ' + lastname; });`",
  },
  {
    question:
      "Which function from React can you use to wrap Component imports to load them lazily?",
    answers: ["`fallback`", "`split`", "`lazy`", "`memo`"],
    correctAnswer: "`lazy`",
  },
  {
    question:
      "How do you invoke setDone only when component mounts, using hooks?",
    answers: [
      "`useEffect(() => { setDone(true); });`",
      "`useEffect(() => { setDone(true); }, []);`",
      "`useEffect(() => { setDone(true); }, [setDone]);`",
      "`useEffect(() => { setDone(true); }, [done, setDone]);`",
    ],
    correctAnswer: "`useEffect(() => { setDone(true); }, []);`",
  },
  {
    question:
      "Currently, `handleClick` is being called instead of passed as a reference. How do you fix this?",
    answers: [
      "`<button onClick={this.handleClick.bind(this)}>Click this</button>`",
      "`<button onClick={handleClick()}>Click this</button>`",
      "`<button onclick={this.handleClick}>Click this</button>`",
      "`<button onClick={this.handleClick}>Click this</button>`",
    ],
    correctAnswer: "`<button onClick={this.handleClick}>Click this</button>`",
  },
  {
    question: "Which answer best describes a function component?",
    answers: [
      "A function component is the same as a class component",
      "A function component accepts a single props object and returns a React element",
      "A function component is the only way to create a component",
      "A function component is required to create a React component",
    ],
    correctAnswer:
      "A function component accepts a single props object and returns a React element",
  },
  {
    question: "Which library does the `fetch()` function come from?",
    answers: [
      "FetchJS",
      "ReactDOM",
      "No library, `fetch()` is supported by most browsers",
      "React",
    ],
    correctAnswer: "No library, `fetch()` is supported by most browsers",
  },
  {
    question:
      "What will happen when this useEffect Hook is executed, assuming name is not already equal to John?",
    answers: [
      "It will cause an error immediately",
      "It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable",
      "It will update the value of name once and not run again until name is changed from the outside",
      "It will cause an infinite loop",
    ],
    correctAnswer:
      "It will update the value of name once and not run again until name is changed from the outside",
  },
  {
    question: "Which choice will not cause a React component to rerender?",
    answers: [
      "if the component calls `this.setState({})`",
      "the value of one of the component's props changes",
      "if the component calls `this.forceUpdate()`",
      "one of the component's siblings rerenders",
    ],
    correctAnswer: "one of the component's siblings rerenders",
  },
  {
    question:
      "You have created a new method in a class component called handleClick, but it is not working. Which code is missing?",
    answers: [
      "`this.handleClick = this.handleClick.bind(this);`",
      "`props.bind(handleClick);`",
      "`this.handleClick.bind();`",
      "`this.handleClick.bind(this);`",
    ],
    correctAnswer: "`this.handleClick = this.handleClick.bind(this);`",
  },
  {
    question:
      "React does not render two sibling elements unless they are wrapped in a fragment. Below is one way to render a fragment. What is the shorthand for this?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "C",
  },
  {
    question:
      "If you wanted to display the count state value in the component, what do you need to add to the curly braces in the `h1`?",
    answers: ["this.state.count", "count", "state", "state.count"],
    correctAnswer: "this.state.count",
  },
];

const additionalQuestions = [
  {
    question:
      "Per the following code, when is the Hello component assigned to greeting?",
    answers: [
      "never",
      "when `isLoggedIn` is true",
      "when a user logs in",
      "when the Hello function is called",
    ],
    correctAnswer: "when `isLoggedIn` is true",
  },
  {
    question: "In the following code block, what type is orderNumber?",
    answers: ["string", "boolean", "object", "number"],
    correctAnswer: "string",
  },
  {
    question:
      "You have added a style property to the `h1` but there is an unexpected token error when it runs. How do you fix this?",
    answers: [
      '`const element = <h1 style="backgroundColor: "blue"">Hi</h1>;`',
      "`const element = <h1 style={blue}>Hi</h1>;`",
      '`const element = <h1 style="blue">Hi</h1>;`',
      '`const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;`',
    ],
    correctAnswer:
      '`const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;`',
  },
  {
    question:
      "Which function is used to update state variables in a React class component?",
    answers: ["replaceState", "refreshState", "updateState", "`setState`"],
    correctAnswer: "`setState`",
  },
  {
    question:
      "Consider the following component. What is the default color for the star?",
    answers: ["black", "red", "grey", "white"],
    correctAnswer: "grey",
  },
  {
    question:
      "What is the difference between the click behaviors of these two buttons (assuming that this `handleClick` is not bound correctly)?",
    answers: [
      "`Button A will not have access to the event object on click of the button`",
      "`Button A will not fire the handler this.handleClick successfully`",
      "`There is no difference`",
      "`Button B will not fire the handler this.handleClick successfully`",
    ],
    correctAnswer:
      "`Button A will not fire the handler this.handleClick successfully`",
  },
  {
    question:
      "How would you add to this code, from React Router, to display a component called About?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "A",
  },
  {
    question:
      "Which class-based component is equivalent to this function component?",
    answers: ["A", "B", "C", "X C"],
    correctAnswer: "X C",
  },
  {
    question:
      "Given the code below, what does the second argument that is sent to the render function describe?",
    answers: [
      "where the React element should be added to the DOM",
      "where to call the function",
      "where the root component is",
      "where to create a new JavaScript file",
    ],
    correctAnswer: "where the React element should be added to the DOM",
  },
  {
    question:
      "Why should you use React Router's Link component instead of a basic `<a>` tag in React?",
    answers: [
      "The link component allows the user to use the browser's `Back` button",
      "There is no difference--the `Link` component is just another name for the `<a>` tag",
      "The `<a>` tag will cause an error when used in React",
      "The `<a>` tag triggers a full page reload, while the `Link` component does not",
    ],
    correctAnswer:
      "The `<a>` tag triggers a full page reload, while the `Link` component does not",
  },
  {
    question:
      "What is the first argument, `x`, that is sent to the `createElement` function?",
    answers: [
      "the element that should be created",
      "the order in which this element should be placed on the page",
      "the properties of the element",
      "data that should be displayed in the element",
    ],
    correctAnswer: "the element that should be created",
  },
  {
    question:
      "Which class-based lifecycle method would be called at the same time as this effect Hook?",
    answers: [
      "componentWillUnmount",
      "componentDidMount",
      "render",
      "componentDidUpdate",
    ],
    correctAnswer: "componentDidMount",
  },
  {
    question: "What is the name of the base component of this component?",
    answers: ["Comp", "h1", "ReactComponent", "Component"],
    correctAnswer: "Component",
  },
  {
    question: "When using a portal, what is the first argument?",
    answers: [
      "the current state",
      "the element to render",
      "the App component",
      "the page",
    ],
    correctAnswer: "the element to render",
  },
  {
    question: "What is `setCount`?",
    answers: [
      "the initial state value",
      "a variable",
      "a state object",
      "a function to update the state",
    ],
    correctAnswer: "a function to update the state",
  },
  {
    question: "What is the use of map function below?",
    answers: [
      "gives a map of all the entries in database",
      "returns a heading tag for every entry in the database containing its data",
      "returns one heading tag for all the entries in database",
      "checks which entry in the database is suitable for heading tag",
    ],
    correctAnswer:
      "returns a heading tag for every entry in the database containing its data",
  },
  {
    question: "Describe what is happening in this code?",
    answers: [
      "It is creating a new object that contains the same name property as the props object",
      "It is assigning the value of the props object's firstName property to a constant called name",
      "It is retrieving the value of props' name property firstName",
      "It is assigning the value of the props object's name property to a constant called firstName",
    ],
    correctAnswer:
      "It is assigning the value of the props object's name property to a constant called firstName",
  },
  {
    question: "What is wrong with this code?",
    answers: [
      "React components cannot be defined using functions",
      "React does not allow components to return more than one element",
      "The component needs to use the return keyword",
      "String literals must be surrounded by quotes",
    ],
    correctAnswer:
      "React does not allow components to return more than one element",
  },
  {
    question: "When using a portal, what is the second argument?",
    answers: [
      "the App component",
      "the page",
      "the current state",
      "the DOM element that exists outside of the parent component",
    ],
    correctAnswer:
      "the DOM element that exists outside of the parent component",
  },
  {
    question: "Given this code, what will be printed in the `<div>` tag?",
    answers: [
      "It will produce an error saying 'cannot read property 'length' of undefined'",
      "1",
      "undefined",
      "2",
    ],
    correctAnswer: "2",
  },
  {
    question: "What is this pattern called?",
    answers: [
      "object destructuring",
      "array destructuring",
      "spread operator",
      "code pushing",
    ],
    correctAnswer: "array destructuring",
  },
  {
    question:
      "What is the first file loaded by the browser in a basic React project?",
    answers: [
      "src/App.js",
      "src/index.js",
      "public/manifest.json",
      "public/index.html",
    ],
    correctAnswer: "public/index.html",
  },
  {
    question:
      "The code below is rendering nothing and generates this error: 'ReactDOM is not defined'. How do you fix this issue?",
    answers: [
      "`createRoot(document.getElementById('root'));`",
      "`ReactDOM(element, document.getElementById('root'));`",
      "`renderDOM(element, document.getElementById('root'));`",
      "`DOM(element, document.getElementById('root'));`",
    ],
    correctAnswer: "`createRoot(document.getElementById('root'));`",
  },
  {
    question:
      "In this component, how do you display whether the user was logged in or not?",
    answers: [
      "`The user is loggedIn ? logged in : not logged in`",
      "Write a function to check the login status",
      "`The user is {isLoggedIn = 'no'}`",
      "`The user is {isLoggedIn ? 'logged in' : 'not logged in'}`",
    ],
    correctAnswer: "`The user is {isLoggedIn ? 'logged in' : 'not logged in'}`",
  },
  {
    question:
      "You are rendering a list with React when this warning appears in the console: 'Warning: Each child in a list should have a unique 'key' prop'. How do you fix this issue?",
    answers: [
      "Add a key prop with the same value to each item in the list",
      "Clear the console warnings",
      "Use the UseId hook to generate a unique key for each element in the list",
      "When iterating over the list items, add a unique property to each list item",
    ],
    correctAnswer:
      "Add a key prop with the same value to each item in the list",
  },
  {
    question:
      "How would you generate the boilerplate code for a new app that you are building to collect underpants?",
    answers: [
      "npm create-react-app collect-underpants",
      "npx start-app collect-underpants",
      "react new collect-underpants",
      "npx create-react-app collect-underpants",
    ],
    correctAnswer: "npx create-react-app collect-underpants",
  },
  {
    question:
      "Add the code that will fire the photon torpedoes when the button is clicked",
    answers: [
      "`<button onClick={firePhotonTorpedoes()}>Pew Pew</button>`",
      "`<button onClick={firePhotonTorpedoes}>Pew Pew</button>`",
      "`<button onClick={this.firePhotonTorpedoes()}>Pew Pew</button>`",
      "`<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>`",
    ],
    correctAnswer:
      "`<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>`",
  },
  {
    question: "What is the process of deciding whether an update is necessary?",
    answers: ["shadow DOM", "fiber", "reconciliation", "setting state"],
    correctAnswer: "reconciliation",
  },
  {
    question:
      "React is an open-source project but is maintained by which company?",
    answers: ["Intuit", "Twitter", "Facebook", "Snapchat"],
    correctAnswer: "Facebook",
  },
  {
    question: "What command can you use to generate a React project?",
    answers: ["react-starter", "create-react-app", "react-gen", "react-start"],
    correctAnswer: "create-react-app",
  },
  {
    question:
      "What is the browser extension called that React developers use to debug applications?",
    answers: [
      "React Developer Tools",
      "React Tooling Add-on",
      "React Codewatch",
      "React Debug",
    ],
    correctAnswer: "React Developer Tools",
  },
  {
    question: "Which tool is not part of Create React App?",
    answers: ["React", "webpack", "ReactDOM", "JQuery"],
    correctAnswer: "JQuery",
  },
  {
    question:
      "What is the JavaScript syntax extension that is commonly used to create React elements?",
    answers: ["HTML", "JavaScriptX", "JSX", "React JavaScript"],
    correctAnswer: "JSX",
  },
  {
    question:
      "How might you check property types without using Flow or TypeScript?",
    answers: [
      "Check Manually",
      "Use `prop-helper`",
      "use `checker-types`",
      "use `prop-types`",
    ],
    correctAnswer: "use `prop-types`",
  },
  {
    question: "How do you add an id of heading to the following h1 element?",
    answers: [
      "`let dish = <h1 id={heading}>Mac and Cheese</h1>;`",
      '`let dish = <h1 id="heading">Mac and Cheese</h1>;`',
      '`let dish = <h1 id:"heading">Mac and Cheese</h1>;`',
      '`let dish = <h1 class="heading">Mac and Cheese</h1>;`',
    ],
    correctAnswer: '`let dish = <h1 id="heading">Mac and Cheese</h1>;`',
  },
  {
    question:
      "What value of button will allow you to pass the name of the person to be hugged?",
    answers: [
      "`<button onClick={(name) => this.hug(name)}>Hug Button</button>;`",
      "`<button onClick={this.hug(e, name)}>Hug Button</button>;`",
      "`<button onClick={(e) => hug(name, e)}>Hug Button</button>;`",
      "`<button onClick={(e) => this.hug(name, e)}>Hug Button</button>;`",
    ],
    correctAnswer:
      "`<button onClick={(e) => this.hug(name, e)}>Hug Button</button>;`",
  },
  {
    question: "What pattern is being used in this code block?",
    answers: [
      "function defaults",
      "array destructuring",
      "PRPL pattern",
      "destructuring assignment",
    ],
    correctAnswer: "destructuring assignment",
  },
  {
    question:
      "How would you correct this code block to make sure that the sent property is set to the Boolean value false?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "A",
  },
  {
    question: "What is the use of super(props) in React?",
    answers: [
      "To call the constructor of the parent class",
      "To initialize this.props in the constructor",
      "Both of the above",
      "None of the above",
    ],
    correctAnswer: "Both of the above",
  },
  {
    question: "What is Redux in React?",
    answers: [
      "A state container for JavaScript apps",
      "A tool for building UI components",
      "Both of the above",
      "None of the above",
    ],
    correctAnswer: "A state container for JavaScript apps",
  },
  {
    question:
      "What is the purpose of the virtual DOM in React, and how does it improve performance in web applications?",
    answers: [
      "The virtual DOM is used to store user authentication data securely",
      "The virtual DOM is a backup copy of the actual DOM, created for debugging purposes",
      "The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM",
      "The virtual DOM is a database used to store component states",
    ],
    correctAnswer:
      "The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM",
  },
  {
    question:
      "You run the following code and get this error message: 'invalid hook call'. What is wrong with the code?",
    answers: [
      "The useState call needs to be called inside of the PokeButton component",
      "The react package is likely not installed correctly",
      "useState is not imported correctly. Import useState directly instead of importing react",
      "PokeButton is a pure function and therefore cannot have any local state",
    ],
    correctAnswer:
      "The useState call needs to be called inside of the PokeButton component",
  },
  {
    question:
      "A colleague comes to you for help on a react component. They say that the poke button renders correctly, however when the button is clicked, this error is shown: 'setPoked is not defined'. What is wrong with their code?",
    answers: [
      "onClick prop should be onclick",
      "The click handler passed to the onClick prop is inlined. Move this handler into a variable outside of JSX",
      "They use object destructuring instead of array destructuring. Wrap the poked and setPoked values in an array",
      "poked and setPoked are not destructured in the correct order",
    ],
    correctAnswer:
      "They use object destructuring instead of array destructuring. Wrap the poked and setPoked values in an array",
  },
  {
    question:
      "This component is loaded dynamically. What should you replace XXXX with to complete the code?",
    answers: ["Component", "Fragment", "Suspense", "Lazy"],
    correctAnswer: "Suspense",
  },
  {
    question: "Elements in lists in React should have _**_ that are ___**",
    correctAnswer: "keys ; unique",
  },
  {
    question:
      "You want to memorize a callback function so you ensure that React does not recreate the function at each render. Which hook would you use to accomplish this?",
    answers: ["useRef", "useMemo", "memo", "useCallback"],
    correctAnswer: "useCallback",
  },
  {
    question:
      "You want to perform a network operation as the result of a change to a component's state named userInput. What would you replace XXXX with?",
    answers: ["[userInput]", "userInput", "undefined", "[]"],
    correctAnswer: "[userInput]",
  },
  {
    question: "When is the Hello component displayed?",
    answers: [
      "When isLoggedIn is false",
      "When isLoggedIn is true",
      "When isLoggedIn is false and the Hello function is invoked",
      "Never",
    ],
    correctAnswer: "When isLoggedIn is true",
  },
  {
    question: "When do you use `useLayoutEffect`?",
    answers: [
      "To optimize for all devices",
      "To complete the update",
      "To change the layout of the screen",
      "When you need the browser to paint before the effect runs",
    ],
    correctAnswer: "To change the layout of the screen",
  },
  {
    question: "What is the difference between state and props in React?",
    answers: [
      "Props are set by the parent component, state is set by the child component",
      "Props are passed to a component, state is managed within the component",
      "Props can be updated, state cannot be updated",
      "There is no difference - props and state are the same",
    ],
    correctAnswer:
      "Props are passed to a component, state is managed within the component",
  },
  {
    question: "Which language can you not use with React?",
    answers: ["Swift", "JSX", "JavaScript", "TypeScript"],
    correctAnswer: "Swift",
  },
  {
    question: "Which answer best describes a function component?",
    answers: [
      "A function component is the same as a class component",
      "A function component accepts a single props object and returns a React element",
      "A function component is the only way to create a component",
      "A function component is required to create a React component",
    ],
    correctAnswer:
      "A function component accepts a single props object and returns a React element",
  },
  {
    question: "Which library does the `fetch()` function come from?",
    answers: [
      "FetchJS",
      "ReactDOM",
      "No library. `fetch()` is supported by most browsers",
      "React",
    ],
    correctAnswer: "No library. `fetch()` is supported by most browsers",
  },
  {
    question:
      "In React, what is the purpose of the `key` prop when rendering a list of components?",
    answers: [
      "The `key` prop is used to provide a unique identifier for the component",
      "The `key` prop is used to define the color of the component",
      "The `key` prop is required to render a list of components",
      "The `key` prop is used by React to optimize updates and identify which items have changed or been added/removed in the list",
    ],
    correctAnswer:
      "The `key` prop is used by React to optimize updates and identify which items have changed or been added/removed in the list",
  },
  {
    question: "What is the primary function of React Router?",
    answers: [
      "React Router is used for fetching data from APIs",
      "React Router is used to create animations in React applications",
      "React Router is used for managing state in React components",
      "React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages",
    ],
    correctAnswer:
      "React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages",
  },
  {
    question: "When should you use Redux in a React application?",
    answers: [
      "Redux is always required in React applications",
      "Redux should be used when you need to fetch data from APIs",
      "Redux is used for creating user interfaces but not for state management",
      "Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state",
    ],
    correctAnswer:
      "Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state",
  },
  {
    question: "What is the use of React hooks?",
    answers: [
      "To optimize React apps for mobile devices",
      "To add visual effects to React components",
      "To allow using state and lifecycle methods in function components",
      "To integrate with external UI libraries like Bootstrap",
    ],
    correctAnswer:
      "To allow using state and lifecycle methods in function components",
  },
  {
    question:
      "How can you pass data through a React component tree without having to pass props down manually at every level?",
    answers: [
      "By using React context",
      "By using redux",
      "By using react router",
      "By using react lifecycle methods",
    ],
    correctAnswer: "By using React context",
  },
];

export default questions;
