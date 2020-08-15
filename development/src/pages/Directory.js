import React from "react";
import API from "../utils/API.js";
import UserTable from "../components/userTable";
import SearchForm from "../components/form"
import { Container, card} from "react-bootstrap";

class Directory extends React.Component{
    state = {
        name: "",
        role: "",
        manager: "",
        users: [],
        search: ""
      }

      updateSearch = (search) => {
        this.setState({search})
      }

      componentDidMount() {
        API
        .getUser()
        .then(res => this.setState({users: res.data.results}));
      }

      render() {
        return (
          <div className="container">
          <div className="card">
          <SearchForm updateSearch={this.updateSearch}/>
          </div>
        <UserTable users = {this.state.users} search={this.state.search}/>
        </div>
        )
      }
}


export default Directory;