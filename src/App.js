import React from "react";
import Header from "./components/Header";
import TicketList from "./components/TicketList"

function App(props){
  var greenApp = {
    backgroundColor: '#003300',
    color: '#ffff00'
  }
  return (
    <div style={greenApp}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
