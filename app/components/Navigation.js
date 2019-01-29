import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="light-blue darken-4">
                <div className="container nav-wrapper">
                    <a href="" className="brand-logo">Todos
                        <span className="new badge red" data-badge-caption="">
                            { this.props.ntodos }
                        </span>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Navigation;