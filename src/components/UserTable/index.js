import React from "react";
// import useUserFilter from "../../utils/hooks/userUserFilter";
import { Table } from "react-bootstrap";
import useLocationSort from "../../utils/hooks/useLocationSort";

function UserTable( {users, search, sort, updateSort} ){

    const filterBySearch = user => {
        const fullName = `${user.name.first} ${user.name.last}`;
        return !search || fullName.toLowerCase().includes( search.toLowerCase()); 
    }

    const sortByLocation = useLocationSort(sort);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone #</th>
                <th scope="col">Email</th>
                <th scope="col">
                    Address
                <button onClick={()=>updateSort("asc")}>ASC</button>
                <button onClick={()=>updateSort("desc")}>DESC</button>
                </th>
                </tr>
            </thead>
            <tbody>
        {users.filter(filterBySearch).sort(sortByLocation).map(user=>{
            return (            
                <tr key={user.id.value}> 
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.city}, {user.location.state}</td>
                </tr>
                )
        })} 
      </tbody>
        </Table>
    )
}

export default UserTable;

