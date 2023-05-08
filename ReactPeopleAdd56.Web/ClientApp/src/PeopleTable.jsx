import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow'

class PeopleTable extends React.Component {

    state = {
        people: [],

        firstName: '',
        lastName: '',
        age: ''
    }
    onClearClick = () => {
        this.setState({ firstName: '', lastName: '', age: '' })
        this.setState({ people: [] })
    }
    onAddClick = () => {
        const copy = [...this.state.people];
        const person = { firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age }
        copy.push(person)
        this.setState({ people: copy })
        this.setState({ firstName: '', lastName: '', age: '' })
    }
    onFirstNameTextboxChange = (e) => {
        this.setState({ firstName: e.target.value });
    }
    onLastNameTextboxChange = (e) => {
        this.setState({ lastName: e.target.value });
    }
    onAgeTextboxChange = (e) => {
        this.setState({ age: e.target.value });
    }

    render() {

        return (<>

            <PersonForm firstName={this.state.firstName}
                lastName={this.state.lastName}
                age={this.state.age}
                onAddClick={this.onAddClick}
                onClearClick={this.onClearClick}
                onFirstNameTextboxChange={this.onFirstNameTextboxChange}
                onLastNameTextboxChange={this.onLastNameTextboxChange}
                onAgeTextboxChange={this.onAgeTextboxChange}

            />
            {this.state.people.length === 0 ? <h2>There is no one added yet, Be the first to add!</h2> :
                <div className="app-container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <PersonRow people={this.state.people} />
                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </>
        )
    }
}
export default PeopleTable;