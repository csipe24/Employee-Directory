import React from "react";
import { Form, Button } from "react-bootstrap";

function SearchForm( props ){
    return(
            <div>
            <Form onsubmit= {e => e.preventDefault}>
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>Search By</Form.Label>
                <Form.Control type="" placeholder="" onChange={(e =>{props.updateSearch(e.target.value)})} />
            </Form.Group>
            </Form>
            </div>
)
}

// handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.firstName || !this.state.lastName) {
//       alert("Fill out your first and last name please!");
//     } else if (this.state.password.length < 6) {
//       alert(
//         `Choose a more secure password ${this.state.firstName} ${this.state
//           .lastName}`
//       );
//     } else {
//       alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//     }

//     this.setState({
//       firstName: "",
//       lastName: "",
//       password: ""
//     });
//   };

export default SearchForm;