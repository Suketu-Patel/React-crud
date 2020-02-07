import React, { Component } from 'react';

import './Crud.css'
class InputPanel extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container-fluid m-0 inputContainer">
                <div className="form-wrapper">
                    <form className="form p-5">
                        <label>Name
                        <input type="text" className={(!this.props.state.isValid.name)?"form-control border-danger":"form-control"} 
                        aria-label="Username" placeholder="Average Joe" 
                        aria-describedby="basic-addon1" 
                        onChange={this.handleChange} 
                        onBlur={(e)=>this.props.validateInput(e,"name")}/>
                        </label>
                        <label className="ml-2">e-mail
                        <input type="text" className={(!this.props.state.isValid.email)?"form-control border-danger":"form-control"} 
                        placeholder="exaple@xyz.com" aria-label="Recipient's username" aria-describedby="basic-addon2" onBlur={(e)=>this.props.validateInput(e,"email",this.props.state.data)} />
                        </label>
                        <label className="ml-2">Age
                        <input type="number" className={(!this.props.state.isValid.age)?"form-control border-danger":"form-control"} aria-label="Username" placeholder="0" aria-describedby="basic-addon1" onBlur={(e)=>this.props.validateInput(e,"age")}/>
                        </label>
                        <label className="ml-2">Gender
                            <select className="form-control" id="inputState" onChange={(e) => console.log(e.target.value)}>
                                <option name="male">Male</option>
                                <option name="female">Female</option>
                            </select>
                        </label>
                        <br />
                        <input type="submit" className="btn createBtn" value="Create" onClick={this.props.handleOnClick}/>
                    </form>
                </div>
            </div>
        )
    }
}
export default InputPanel