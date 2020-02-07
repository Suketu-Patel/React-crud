import React, { Component } from 'react';
import './Crud.css'
import InputPanel from './InputPanel';
import TablePanel from './tablePanel';
import {VALIDATE} from "./validate"

// import {CRUD} from "./CrudF"

class Crud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name:"Suketu",
                    email:"suketupatel29@gmail.com",
                    age:"21",
                    gender:"Male"
                },
            ],
            isValid: {
                name:true,
                email:true,
                age:true,
                allValid:false
            }
        }
    }
    validateInput = (e,key,data)=>{
        if(VALIDATE[key](e.target.value,data)){
            let validity = this.state.isValid
            validity[key] = true;
        }else{
            let validity = this.state.isValid
            validity[key] = false;
        }
        this.setState(this.state)
    }
    handleOnClick = (e)=>{
        e.preventDefault();
        if(this.state.isValid.allValid){
            this.setState({
                data : [...this.state.data,{name:"Ashish",email:"ashish@mernbois.com",age:"21",gender:"male"}]
            })
        }else{
            
        }
    }
    render() {
        return (
            <div className="my-container">
                <InputPanel
                    validateInput = {this.validateInput}
                    handleOnClick = {this.handleOnClick}
                    state={this.state}
                />
                <TablePanel
                    state={this.state}
                />
            </div>
        )
    }
}
export default Crud