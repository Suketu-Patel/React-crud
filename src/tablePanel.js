import React from "react";
class TablePanel extends React.Component{

    render(){
    const table = this.props.state.data.map((item) => {
        return (
            <tr key={item.email}>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>
                    <button className="actions" onClick={(e) => this.props.handleEdit(e, item.email)}><i className="fas fa-edit">
                    </i></button>
                    <button className="actions" onClick={(e) => this.props.handleRemove(e, item.email)}><i className="fas fa-trash-alt"></i></button>
                </td>
            </tr>)
    })
    return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="tableHeads" scope="col" onClick={()=>this.props.handleSort("email")}>e-mail <i className="fas fa-sort"></i></th>
                        <th className="tableHeads" scope="col" onClick={()=>this.props.handleSort("name")}>Name <i className="fas fa-sort"></i></th>
                        <th className="tableHeads" scope="col" onClick={()=>this.props.handleSort("age")}>Age <i className="fas fa-sort"></i></th>
                        <th className="tableHeads" scope="col" onClick={()=>this.props.handleSort("gender")}>Gender <i className="fas fa-sort"></i></th>
                        <th className="tableHeads" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
    )
}
}
export default TablePanel