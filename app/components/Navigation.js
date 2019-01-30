import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="indigo darken-4">
                <div className="container nav-wrapper">
                    <a href="" className="brand-logo">{ this.props.ntodos } Todos</a>
                </div>
            </nav>
        )
    }
}

export default Navigation;