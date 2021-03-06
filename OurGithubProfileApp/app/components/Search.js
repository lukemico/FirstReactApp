import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
    // Make sure that any time the handleUserInput function is called, the this keyword represents the Search component itself (rather than null)
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(event) {
    // Knowing that a component is just a representation of data (state)
    // This function here should change the state of this component and should re-render
    const searchTerm = event.currentTarget.value;
    this.setState({ searchTerm });
  }
  render() {
    return (
      <div className="searchComponent">
        <h3>Search for a user</h3>
        <form>
          <input
            type="text"
            onChange={this.handleUserInput}
            value={this.state.searchTerm}
            className="u-full-width"
            placeholder="Username:"
          />
          <input
            type="submit"
            className="button-primary"
            value={`Search for ${this.state.searchTerm}`}
          />
        </form>
      </div>
    );
  }
}

export default Search;
