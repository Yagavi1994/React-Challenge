import React, { Component } from "react";
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)

    this.state = {
        isLoaded: false,
        posts: savedPosts,
        
    }

    this.inputSearch = React.createRef();

    }

    getData() {
        setTimeout(() => {
            console.log(true)
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    componentDidMount() {
        this.getData()
    }

    handleChangeEvent = (event) => {
        const inputSearch = event.target.value.toLowerCase();
        console.log(inputSearch)
        const filteredPosts = savedPosts.filter(post => 
            {
                return post.name.toLowerCase().includes(inputSearch)

            })
        this.setState ({
           posts: filteredPosts
        })
    } 
    
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <div>
                        <h1>My Photos</h1>
                    </div>
                    <div>
                        <form>
                            <label htmlFor="id-search">Search: </label>
                            <input id="id-search" name="search" ref={this.inputSearch} onChange={(event) => this.handleChangeEvent(event)} type="text" placeholder="By Author" />
                            <h4>Posts found: {this.state.posts.length} </h4>
                        </form>
                    </div>
                </div>

                <div className={css.SearchResults}>
                    {this.state.isLoaded ? <PostItem savedPosts={this.state.posts} /> : <Loader />}
                </div>
            </div>
        )
    }
}

export default Content