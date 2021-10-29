import React from "react";
import { TaskNumber } from "../TaskNumber";
import { Greeting } from "./Greeting";
import { Mailbox } from "./Mailbox";
import { Page } from "./Page";

const messages = ["React", "Re: React", "Re:Re: React"];

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export class Task7 extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <TaskNumber number="7" />
        <Greeting isLoggedIn={false} />
        {button}
        <Mailbox unreadMessages={messages} />
        <Page />
      </div>
    );
  }
}

// export const Task7 = (props) => {
//   function UserGreeting(props) {
//     return (
//       <div>
//         <TaskNumber number="7" />
//         <h1>Welcome back!</h1>
//       </div>
//     );
//   }

//   function GuestGreeting(props) {
//     return (
//       <div>
//         <TaskNumber number="7" />
//         <h1>Please sign up.</h1>
//       </div>
//     );
//   }

//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   } else {
//     return <GuestGreeting />;
//   }
// };
