import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" placeholder="First Name" className="form-control" value={this.props.firstName} onChange={this.props.onFirstNameTextboxChange} ></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Last Name" className="form-control" value={this.props.lastName} onChange={this.props.onLastNameTextboxChange}></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Age" className="form-control" value={this.props.age} onChange={this.props.onAgeTextboxChange}></input>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-success w-100" onClick={this.props.onAddClick} >Add</button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-warning w-100" onClick={this.props.onClearClick}>Clear</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default PersonForm;


