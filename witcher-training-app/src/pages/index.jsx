import React from "react";
import { Link } from "react-router-dom";
import "../public/styles/App.css";

class MainPage extends React.Component {
  componentDidMount() {
    document.body.classList.add("mainBody");
  }

  componentWillUnmount() {
    document.body.classList.remove("mainBody");
  }
  render() {
    return (
      <div className="frontPageLinks">
        <h1>Witcher Training</h1>
        <div className="pageLinks">
          <Link to="/">Main Page</Link>
        </div>
        <div className="pageLinks">
          <Link to="/heartrate">Max Heartrate Calculator</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
