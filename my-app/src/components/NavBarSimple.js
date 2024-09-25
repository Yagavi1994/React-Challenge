import React from "react";
import css from "./css/NavBarSimple.module.css";
import NavBarForm from "./NavBarForm";

class NavBarSimple extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            introduction: "Hello, guest!",
            buttonText: "Login",
            count: 0,
            isLoggedIn: false,
        }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            return{
                introduction: prevState.introduction === "Hello, guest!" ? "Welcome back, User!" : "Hello, guest!",
                buttonText: prevState.buttonText === "Login" ? "Logout" : "Login",
                isLoggedIn: prevState.isLoggedIn === false ? true : false,
            }
        
        });
    }

    increment = () => {
        this.setState((prevState, prevProps) => {
            return{
                count: prevState.count + 1,
            }
        });
    }

    render(){
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.introduction}</span>
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
                {this.state.isLoggedIn && <NavBarForm />}
            </div>
        )
    }
}

export default NavBarSimple