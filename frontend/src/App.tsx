import React, {Component} from 'react';
// import { Nav } from 'react-bootstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavComponent from "./Components/Nav/NavComponent";
import HomeComponent from "./Components/Pages/homeComponent";
import QuestionPageComponent from "./Components/Pages/questionPageComponent";
import QuestionPostPageComponent from "./Components/Pages/questionPostPageComponent";

class App extends Component<any>{
  
  render(){
    return(
    <div className="App">
      <BrowserRouter>
        <NavComponent/>
        <Switch>
          <Route exact={true} path="/" component={HomeComponent}/> 
          <Route exact={true} path="/post" component={QuestionPostPageComponent}/> 
          <Route exact={true} path="/question/:questionTitle" component={QuestionPageComponent}/> 
        </Switch>
      </BrowserRouter>
    </div>   
    )
  }
}

export default App;



//Mission

//Frontend
//1. Create Question Post Page
//2. 

//Backend
//1. Connect to mongo cluster and send posts.
//2. CRUD for Question Posts and Comments. 
//3. Authorization
//4. Timetable Auth