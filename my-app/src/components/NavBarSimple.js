import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            introduction: "Hello, guest!",
            buttonText: "Login",
            count: 0
        }
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            return{
                introduction: prevState.introduction === "Hello, guest!" ? "Welcome back, User!" : "Hello, guest!",
                buttonText: prevState.buttonText === "Login" ? "Logout" : "Login",
            }
        
        });
    }

    increment (){
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
                <button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={()=>this.increment()}>Increment</button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default NavBarSimple