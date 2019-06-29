import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return(
            <div className='row'>
                <nav className="col-12">
                    <ul className='nav justify-content-end'>
                        <li className='nav-item nav-link text-white'>Register</li>
                        <li className='nav-item nav-link text-white'>Stadistics</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;