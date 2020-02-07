import React from "react";
function TablePanel(props) {
    const table = props.state.data.map((item) => {
        return (
        <tr key = {item.email}>
            <td>{item.email}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
        </tr>)
    })
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">e-mail</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}
export default TablePanel