# all-the-things

## Your task for today!

Each member of your team should add the following items to this project, following the GitHub Group Workflow Document:

1. A piece of state to the state object in `App.js`. For example:

    ```javascript
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      ...
    ]
    ```

2. Add a new component. This component will live inside it's own directory in the `Pages` directory, just like the existing `XxxxxxxThings.jsx` files inside the `XxxxxxxThings` directories. Name the component appropriately, it will be used to iterate over the things you put into state in step one and display them inside of the ThingCard component. Your `XxxxxxxThings.jsx` file will look similar to this, changing names where appropriate:
  
    ```javascript
    import React from 'react';
    import ThingCard from '../../components/ThingCard/ThingCard'
    import { Link } from 'react-router-dom'

    const StyledThings = (props) => {
      return (
        <>
          <Link to="/">Home</Link>

          {props.things.map((thing, idx) => 
            <ThingCard key={idx} thing={thing}/>
          )}
        </>
      )
    }

    export default StyledThings
    ```

3. Add a link to your new component inside of `App.jsx` alongside the existing links:

    ```javascript
    <Route exact path='/'>
      <>
        <h1>All-The-Things</h1>
        <Link to="/the-manliest-things">Ben's Things</Link><br/>
        <Link to="/the-functional-things">Shahzad's Things</Link><br/>
        <Link to="/the-well-styled-things">David's Things</Link><br/>
        <Link to="/your-new-link-here">Your Things!</Link><br/>
      </>
    </Route>
    ```

4. Make a new route that points to the new link you just made, and displays the component you just created (don't forget to import the component you just made!) It should look something like this:

   	```javascript
   	<Route exact path='/your-new-link-here'>
      <XxxxxxxThings things={this.state.xxxxxxxThings} />
    </Route>
   	```

After you have completed these steps follow the steps in the GitHub Group Workflow Document to get your work into the Git Commander's main repo from the project. When that is done pull any additional changes down to your local repository.