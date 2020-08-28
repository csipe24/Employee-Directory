import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm"
import {Container, Card} from "react-bootstrap";

class Directory extends React.Component{
    state = {
        name: "",
        role: "",
        manager: "",
        users: [],
        search: "",
        searchType: "name",
        sort: ""
      }

      updateSearch = (search) => {
        this.setState({search})
      }

      updateSort = (sort) => {
        this.setState({sort})
      }

      componentDidMount() {
        API
        .getUser()
        .then(res => this.setState({users: res.data.results}));
      }

      render() {
        return (
          <Container>
            <Card body>
              <SearchForm updateSearch={this.updateSearch}/>
            </Card>
            <h1>Employee Directory</h1>
              <UserTable users= {this.state.users} search={this.state.search} updateSort={this.updateSort} sort={this.state.sort}/>
          </Container>
        )
      }
}


export default Directory;