# File Structure

```markdown
.
├── public
│   ├── icons
│   │   └── favicon.ico
│   ├── images
│   │   └── favicon.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   ├── context
│   │   └── Context.jsx
│   ├── pages
│   │   └── Home.jsx
│   ├── routes
│   │   └── routes.js
│   ├── styles
│   │   └── index.css
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

# Cloning The Template

```bash
git clone https://github.com/f6c5/react-template.git your_project_name
cd your_project_name
```

# Change Project Name

### package.json

```json
  "name": "your_project_name"
```

# İnstall Dependencies & Run

```bash
npm i
npm start
```

***

# Add New Page

### 1. Create a new file in the *pages* folder

> *This file will be your new page* 

### 2. Code your page in this file and *export*

> *This page cannot be used without exporting*

### 3. Defining the route

> *defining the path to the page*

> **routes/routes.js**
> ```jsx
> import Home from "../pages/Home.jsx";
> import NewPage from "../pages/NewPage.jsx" // import the page
> 
> const routes = [
>   {
>     path: "/",
>     element: <Home />,
>   },
>   {
>     path:"/new-page", // specify the path to the page
>     element: <NewPage/>  // new page component
>   }
> ];
> 
> ...
> 
> ```

***

# Context Api

> **context/Context.jsx**
> ```jsx
> import { createContext, useContext, useState } from "react"; // import useState
> const Context = createContext();
> 
> const Provider = ({ children }) => {
>   const [newState, setNewState] = useState("value"); // create state
> 
>   const changeNewState = (value) => {
>     setNewState(value);
>   };
> 
>   const values = {
>     newState, // add state
>     changeNewState,
>   };
> 
>   return <Context.Provider value={values}>{children}</Context.Provider>;
> };
> 
> export const useData = () => useContext(Context);
> export default Provider;
> 
> ```

> *use state*

> the_page_or_component_you_will_use.jsx
>
> ```jsx
> import { useData } from "../context/Context.jsx"; // import hook
> import React from "react";
> 
> export default function the_page_or_component_you_will_use() {
>   const { newState, changeNewState } = useData(); // use hook
> 
>   return <div>{newState}</div>; // use state in context
> }
> ```