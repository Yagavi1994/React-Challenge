import React, {Component} from 'react'
import css from "./css/NavBarForm.module.css";


export class NavBarForm extends Component {

  constructor(props) {
    super(props)
      this.inputName = React.createRef();
      this.inputPassword = React.createRef();
  }

    handleSubmit = (event) => {
      event.preventDefault();
    }

  render() {
    return (
      <div className={css.NavBar}>
        <form action="/submit" method="post">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={this.inputName} name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={this.inputPassword} name="password" required />

          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}


export default NavBarForm