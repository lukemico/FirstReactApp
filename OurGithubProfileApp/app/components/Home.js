import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      numClick: 0
    };
    this.pickRandomStudent = this.pickRandomStudent.bind(this);
  }
  pickRandomStudent() {
    console.log("Pick random student");
  }
  render() {
    return (
      <div className="home">
        <h2>Welcome to our Github App</h2>
        <p>This will display a profile page for a given user</p>
        <h4>Number of Clicks: {this.state.numClicks}</h4>
        <hr />
        <Link to ="/search">
          <button className="button-primary">
          Search
        </Link>
        &nbsp;
        <button className="button-primary" onClick={this.pickRandomStudent}>
          Pick a random WDi21 student
        </button>
      </div>
    );
  }
}

export default Home;
