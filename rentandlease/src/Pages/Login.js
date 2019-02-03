import React, { PureComponent } from "react";
import LoginForm from "../Components/LoginForm";
import { getApi, postApi } from "../Common/api";
import { connect } from "react-redux";
import { login, Login_failure } from "../Actions/UserActions";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-bootstrap";

export class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      validationerror: {
        username: null,
        password: null
      }
    };
  }

  submit = event => {
    event.preventDefault();
    console.log(this.state);
    let error = {
      username: null,
      password: null
    };
    if (this.state.username == "") {
      error.username = "Username is required";
    }
    if (this.state.password == "") {
      error.password = "Password is required";
    }

    this.setState({ validationerror: error });

    this.props.login("aangal@iu.edu", "1234");
  };

  handleChange = event => {
    let error = {
      username: null,
      password: null
    };
    console.log(event.target.name);
    console.log(event.target.value);

    if (event.target.name == "username") {
      if (event.target.value == "") {
        error.username = "Username is required";
      }
    }

    if (event.target.name == "password") {
      if (event.target.value == "") {
        error.password = "Password is required";
      }
    }
    console.log(error);
    this.setState({
      [event.target.name]: event.target.value,
      validationerror: error
    });
  };

  render() {
    // return <LoginForm onSubmit={this.submit} />;
    return (
      <form onSubmit={event => this.submit(event)}>
        <div>
          <label htmlFor="username">Email</label>
          <input
            name="username"
            type="email"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        {this.state.validationerror.username && (
          <div>{this.state.validationerror.username}</div>
        )}
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        {this.state.validationerror.password && (
          <div>{this.state.validationerror.password}</div>
        )}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button
          variant="primary"
          onClick={() => this.props.history.push("/register")}
        >
          Register
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    Login
  };
};

// Login = reduxForm({ form: "Login" })(Login);

export default connect(
  () => ({}),
  { login, Login_failure }
)(Login);
