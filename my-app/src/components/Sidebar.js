import React from "react";
import css from "./css/Sidebar.module.css";

const SideBar = () => {
    return (
        <div className={css.sidebar}>
            <a>My Photos</a>
            <a>My Paintings</a>
            <a>My Illustrations</a>
        </div>
        )
}

export default SideBar
    