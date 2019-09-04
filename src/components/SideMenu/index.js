import React, { Component } from 'react';
import styles from './SideMenu.module.css';
import '../../App.css';
import { NavLink } from 'react-router-dom'


export default class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styles: styles,
            chatName: "LyChat",
            showSettings: false,
            search: ''
        }

        this.inputSearch = this.inputSearch.bind(this)
        this.showSettings = this.showSettings.bind(this)
    }


    inputSearch = (event) => {
        this.setState({search: event.target.value})
        console.log(this.state.search)
    }

    showSettings = () => {
        console.log('showSettings is ' + this.state.showSettings)
        if (!this.state.showSettings) {
            document.getElementsByClassName(this.state.styles.dropdownSettings)[0].style.display = 'block';
            this.setState({ showSettings: true })
        } else {
            document.getElementsByClassName(this.state.styles.dropdownSettings)[0].style.display = 'none';
            this.setState({ showSettings: false })

        }
    }

    render() {
        return (
            <aside className={this.state.styles.sideBar}>
                <div className={this.state.styles.search}>
                    <div className={this.state.styles.inputWrapper}>
                        <input type="search" placeholder="Search" onChange={this.inputSearch} value={this.state.search}></input>
                        <div className={this.state.styles.clearButton}>
                            <svg width="26" height="24">
                                <circle cx="12" cy="12" r="11" fill="#ccc"></circle>
                                <path stroke="white" strokeWidth="2" d="M8.25,8.25,15.75,15.75"></path>
                                <path stroke="white" strokeWidth="2" d="M8.25,15.75,15.75,8.25"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" className={this.state.styles.dropdownChats}>Chat Name</button>
                    <ul className={this.state.styles.chatsList}>
                        <li className={this.state.styles.chatToggle}><a href={'#' + this.state.chatName}>LyChat</a></li>
                    </ul>
                </div>
                <ul>
                    <li><NavLink to="/Info">Info</NavLink></li>
                    <li>
                        <NavLink to="/Settings" className="" onClick={this.showSettings}>Settings</NavLink>
                        <ul className={this.state.styles.dropdownSettings} style={{ display: 'none' }}>
                            <li><NavLink to="/Settings/Greetings">Greetings</NavLink></li>
                            <li><NavLink to="/Settings/Gifs">Gifs</NavLink></li>
                            <li><NavLink to="/Settings/Bananas">Bananas</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to="/OtherProjects">Other Projects</NavLink></li>
                </ul>
            </aside>
        )
    }
}
