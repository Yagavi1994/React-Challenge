import React from 'react'
import css from "./css/NavBarForm.module.css";

const NavBarForm = () => {
    return (
      <div className={css.NavBar}>
          <form action="/submit" method="post">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              
              <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }  

export default NavBarForm