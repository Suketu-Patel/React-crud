import React from "react";
function TablePanel(props) {
    const table = props.state.data.map((item) => {
        return (
            <tr key={item.email}>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                    <button className="actions" onClick={(e) => props.handleEdit(e, item.email)}><i className="fas fa-edit">
                    </i></button>
                    <button className="actions" onClick={(e) => props.handleRemove(e, item.email)}><i className="fas fa-trash-alt"></i></button>
                </td>
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
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
    )
}
export default TablePanel