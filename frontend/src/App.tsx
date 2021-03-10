import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomeComponent from "./Components/Questions/homeComponent"

class App extends Component<any>{
  
  render(){
    return(
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomeComponent}/>   
        </Switch>
      </BrowserRouter>
    </div>   
    )
  }
}

export default App;



//Mission

//1. Create list of questions. 

//2. Comment feature on question. Send zoom link from there. 