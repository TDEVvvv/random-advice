import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./loading";
export default class App extends Component {
  state = {
    advice: "",
    loading: false,
  };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    this.setState({ loading: true });
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          {this.state.loading ? (
            <Loading />
          ) : (
            <h1 className="heading">{advice}</h1>
          )}
          <button onClick={this.fetchAdvice} className="button">
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}
