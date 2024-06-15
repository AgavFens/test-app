import React from "react";
import Header from "./components/header";
import Mainer from "./components/Main";

class App extends React.Component{
  render(){
    return(
    <div>
      <Header/>
      <Mainer/>
    </div>
    )
  }
}

export default App