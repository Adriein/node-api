import React, { Component } from 'react';

import EditableCard from "./EditableCard";

class EditMode extends Component {
    render(){
        return(
            <div className="col-12">
                <EditableCard user={this.props.state.selectedUser}/>
                {console.log(this.props.state.selectedUser)}
            </div>
        )
    }
}

export default EditMode;