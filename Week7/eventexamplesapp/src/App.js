import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      amount: '',
      currency: ''
    };
  }

  incrementValue = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementValue = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { amount, currency } = this.state;
    if (currency.toLowerCase() === 'euro') {
      const result = parseFloat(amount) * 80;
      alert(`Converting to Euro. Amount is ${result}`);
    } else {
      alert("Please enter 'Euro' in the currency field.");
    }
  };

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementValue}>Increment</button><br /><br />
        <button onClick={this.decrementValue}>Decrement</button><br /><br />
        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button><br /><br />
        <button onClick={this.handleSyntheticEvent}>Click on me</button><br /><br />

        <h2 style={{ color: "green", fontWeight: "bold" }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <label htmlFor="amount" style={{ width: "80px" }}>Amount:</label>
              <input
                id="amount"
                type="text"
                name="amount"
                value={this.state.amount}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <label htmlFor="currency" style={{ width: "80px" }}>Currency:</label>
              <input
                id="currency"
                type="text"
                name="currency"
                value={this.state.currency}
                onChange={this.handleChange}
              />
            </div>
            <div style={{ marginLeft: "80px" }}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
