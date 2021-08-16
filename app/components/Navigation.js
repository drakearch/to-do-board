import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="grey darken-4">
                <div className="container nav-wrapper">
                    <a href="" className="brand-logo">To-Do Board</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="">To-Do List 
                                <span className="chip red darken-2 white-text" style={{verticalAlign:"top", lineHeight:"16px", height:"18px", padding:"0 6px", marginTop:"10px"}}>{ this.props.ntodos }</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;