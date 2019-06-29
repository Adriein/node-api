import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <div className='card'>
                <div className='card-header'>User: {this.props.user.id}</div>
                <div className='card-body'>
                    <h4>{this.props.user.first_name}</h4>
                    <h4>{this.props.user.last_name}</h4>
                </div>

            </div>

        );
    }
}

export default Card;