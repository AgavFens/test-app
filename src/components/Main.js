import React from "react";
import Frame126 from "../image/Frame 1261154448.png";
import Group126 from "../image/Group 1261155065.png";

class Mainer extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
        <h1>Welcome to</h1>
        <img src={Group126} alt="Group 126" />
        <h1 className="h1:first-child">Haven Burger</h1>
        </div>
        <img src={Frame126} alt="Frame 126" />
      </div>
    );
  }
}

export default Mainer;
