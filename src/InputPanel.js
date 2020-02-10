import React, { Component } from 'react';

import './Crud.css'
import { VALIDATE } from './validate';
class InputPanel extends Component {
    render() {
        const isDisabled =
            (
                Object
                    .keys(this.props.state.currentInput)
                    .some(x => this.props.state.currentInput[x] === "")
                || VALIDATE.error.email
            )

        return (
            <div className="container-fluid m-0 inputContainer">
                <div className="form-wrapper">
                    <form className="form p-5">
                        <label>Name {VALIDATE.error["name"] && <span>{VALIDATE.error["name"]}</span>}

                        <input type="text"
                                className={(!this.props.state.isValid.name) ? "form-control border-danger" : "form-control"}
                                placeholder="Average Joe"
                                value={this.props.state.currentInput.name}
                                onChange={(e) => this.props.validateInput(e, "name")}
                        />

                        </label>
                        <label className="ml-2">e-mail {VALIDATE.error["email"] && <span>{VALIDATE.error["email"]}</span>}

                            <input type="text" className={(!this.props.state.isValid.email) ? "form-control border-danger" : "form-control"}
                                placeholder="example@xyz.com"
                                value={this.props.state.currentInput.email}
                                onChange={(e) => this.props.validateInput(e, "email", this.props.state.data)}
                            />

                        </label>
                        <label className="ml-2">Age {VALIDATE.error["age"] && <span>{VALIDATE.error["age"]}</span>}
                            <input type="number" className={(!this.props.state.isValid.age) ? "form-control border-danger" : "form-control"}
                                value={this.props.state.currentInput.age}
                                placeholder="0" onChange={(e) => this.props.validateInput(e, "age")} />
                        </label>
                        <label className="ml-2">Gender
                            <select className="form-control" id="inputState" onBlur={(e) => this.props.validateInput(e, "gender")}>
                                <option name="male">Male</option>
                                <option name="female">Female</option>
                            </select>
                        </label>
                        <br />
                        {
                            (this.props.state.mode==="create")?
                            <input type="submit" className="btn createBtn" value="Create" onClick={this.props.handleOnClick}
                            disabled={isDisabled}
                            />
                            :
                            <input type="submit" className="btn createBtn" value="Update" onClick={this.props.handleEditSubmit}
                            disabled={isDisabled}
                            />
                        }
                        <input type="submit" className="btn cancelBtn ml-2" value="Cancel" onClick={this.props.handleCancel}
                        />
                        
                    </form>
                </div>
            </div>
        )
    }
}
export default InputPanel