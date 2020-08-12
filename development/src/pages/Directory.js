import React from "react";

class Directory extends React.Component{
    state = {
        name: "",
        role: "",
        manager: "",
        users: []
      };

      render() {
        return (<span>{this.state.users.length}</span>)
      }
}


export default Directory;