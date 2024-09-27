import React, {useState} from 'react'
import css from "./css/NavBarForm.module.css";


function NavBarForm() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, password);
    }
    return (
      <div className={css.NavBar}>
        <form>

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          name="password" required />

          <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
      </div>
    )
  }


export default NavBarForm