import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import ManliestThings from '../ManliestThings/ManliestThings'
import FunctionalThings from '../FunctionalThings/FunctionalThings'
import StyledThings from '../StyledThings/StyledThings'
import TechnologicalThings from '../TechnologicalThings/TechnologicalThings'

class App extends Component {
  state = { 
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },
    ],
    davidsThings: [
      {
        name: "waffle",
        image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Liam",
        image: "https://i.imgur.com/l2qX34X.jpg",  
        attributes: ["fluffy", "happy", "sleepy", "dumb"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
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
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ],
    yonisThings: [
      {
        name: "laptop",
        image: "data:image/jpeg;base64,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",  
        attributes: ["efficient", "sleek", "not a taco", "overheating"],
      },
      {
        name: "taco",
        image: "data:image/jpeg;base64,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",
        attributes: ["meat", "tasty", "taco", "man's best friend"], 
      },
      {
        name: "PS4",
        image: "data:image/jpeg;base64,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",
        attributes: ["fun", "time consuming", "good for playing taco themed games", "rage-inducing", "used by all the introverts"],
      },
      { 
        name: "car", 
        image: "data:image/jpeg;base64,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", 
        attributes: ["blue", "gets you places", "always in the sun", "needs more legroom"], 
      },
    ],
  } 
  render() {
    return (
      <>
        <Route exact path='/'>
          <>
            {/* All the <a> tags should live here */}
            <h1>All-The-Things</h1>
            <Link to="/the-manliest-things">Ben's Things</Link><br/>
            <Link to="/the-functional-things">Shahzad's Things</Link><br/>
            <Link to="/the-well-styled-things">David's Things</Link><br/>
            <Link to="/the-high-tech-things">Yoni's Things</Link><br/>
          </>
        </Route>
        {/* All the <Route> components should live here */}
        <Route exact path='/the-functional-things'>
          <FunctionalThings things={this.state.shahzadsThings} />
        </Route>
        <Route exact path='/the-manliest-things'>
          <ManliestThings things={this.state.bensThings} />
        </Route>
        <Route exact path='/the-well-styled-things'>
          <StyledThings things={this.state.davidsThings} />
        </Route>
        <Route exact path='/the-high-tech-things'>
          <TechnologicalThings things={this.state.yonisThings} />
        </Route>
      </>
      
    );
  }
}
 
export default App;

