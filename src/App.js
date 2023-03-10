/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // send a request to the backend to check the user's credentials
    // if the credentials are valid, 
    navigate('/home');
    // otherwise, set an error message to display to the user
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Log in</button>
    </form>
  );
}

export default App;

*/

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom'
import "./App.css";
import { Link } from "react-router-dom";

import { Component } from "react";
import toast from "react-hot-toast";
import ReactDOM from "react-dom";
import UserInfo from "./configs/userInfo";
import Container from "react-bootstrap/Container";

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  connect = (e) => {
    e.preventDefault();
    var html = "<div class='alert alert-danger'>";
    
  const navigate = useNavigate();
    navigate('/home');
    // eslint-disable-next-line no-undef
   /* UserService.findUserByEmail(this.state.email).then((response) => {
      if (response.data == "") {
        html += "<div>Cet email n'existe pas</div>";
        html += "</div>";
        document.getElementById("errorsLogin").innerHTML = html;
        toast.error("ERREUR");
      } else {
        if (response.data.password != this.state.password) {
          html += "<div>Fausse combinaison</div>";
          html += "</div>";
          document.getElementById("errorsLogin").innerHTML = html;
          toast.error("ERREUR");
        } else {
          // eslint-disable-next-line no-undef
          UserInfo.userInfos = response.data;
          localStorage.setItem(
            "userInfos",
            // eslint-disable-next-line no-undef
            JSON.stringify(UserInfo.userInfos)
          );
            //this.props.history.push("/admin-profil");
            toast.success("Connection avec succ??s")
        }
      }
    }); */
  };

  render() {
    return (
      <Container>
        <div className="center">
          <h1>Login</h1>
          <Form>
            <div className="txt_field">
              <input
                name="field"
                type="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={this.changeEmailHandler}
              />
            </div>
            <div className="txt_field">
              <input
                type="password"
                placeholder="Password"
                required
                value={this.state.password}
                name="field"
                onChange={this.changePasswordHandler}
              />
            </div>
            <Button
              id="submit"
              size="lg"
              onClick={this.connect}
             // disabled={!this.validateForm()}
            >
              Login
            </Button>
          </Form>
          <div id="errorsLogin"></div>
        </div>
      </Container>
    );
  }
}

export default App;