import React, { Component } from 'react';
import './Crud.css'
import InputPanel from './InputPanel';
import TablePanel from './tablePanel';
import { VALIDATE } from "./validate"

class Crud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: "Suketu",
                    email: "suketupatel29@gmail.com",
                    age: "21",
                    gender: "Male"
                },
                {
                    name: "Ashish",
                    email: "as@gmail.com",
                    age: "21",
                    gender: "Male"
                },
            ],
            isValid: {
                name: true,
                email: true,
                age: true,
            },
            currentInput: {
                name:"",
                email:"",
                age:"",
                gender:"Male"
            },
            mode : "create"
        }
    }
    validateInput = (e, key, data) => {
        let validity = this.state.isValid
        let currIn = this.state.currentInput;
        currIn[key]=e.target.value;
        if (VALIDATE[key](e.target.value, data)) {
            validity[key] = true;
        } else {
            validity[key] = false;
        }
        this.setState(this.state)
    }
    handleOnClick = (e) => {
        e.preventDefault();
        this.setState({
            data: [...this.state.data, { 
                name: this.state.currentInput.name, 
                email: this.state.currentInput.email, 
                age: this.state.currentInput.age, 
                gender: this.state.currentInput.gender
            }],
            currentInput:{
                name:"",
                email:"",
                age:"",
                gender:"Male"
            }
        })  
    }

    handleEdit = (e,id) => {
        // console.log(id)\
        const node = this.state.data.find((item)=>item.email===id);
        this.setState({
            currentInput:{
                name:node.name,
                email:node.email,
                age:node.age,
                gender:node.gender
            },
            mode : "edit"
        })

    }

    handleEditSubmit = (e) => {
        e.preventDefault()
        let i = 0;
        let node = this.state.data.find((item,index)=>{
            i=index;
            return item.email===this.state.currentInput.email
        });
        node = this.state.data[i]
        node.name=this.state.currentInput.name;
        node.email=this.state.currentInput.email;
        node.age=this.state.currentInput.age;
        node.gender=this.state.currentInput.gender;
        this.setState({
            currentInput:{
                name:"",
                email:"",
                age:"",
                gender:""
            },
            mode : "create"
        })
    }
    handleCancel = (e)=>{
        e.preventDefault()
        this.setState({
            currentInput:{
                name:"",
                email:"",
                age:"",
                gender:""
            },
            mode : "create"
        })
    }

    handleRemove = (e,id) =>{
        let updatedList = this.state.data.filter((item)=>item.email!==id)
        this.setState({
            data:updatedList
        })
    }
    handleSort =(key)=>{
        console.log("connected")
        this.state.data.sort((a, b) => (a[key].toLowerCase() === b[key].toLowerCase()) ? 0 : (a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1))
        this.setState(this.state)
        console.log(this.state.data)
    }
    // handleSort =(key)=>{
    //     let copy = [...this.state.data];
    //     copy.sort((a, b) => (a[key] === b[key]) ? 0 : (a[key] > b[key] ? 1 : -1))
    //     console.log("??",this.copy)
    // }
    // copy.sort((a, b) => (a[key] === b[key]) ? 0 : (a[key] > b[key] ? 1 : -1))
    render() {
        return (
            <div className="my-container">
                <InputPanel
                    validateInput={this.validateInput}
                    handleOnClick={this.handleOnClick}
                    state={this.state}
                    handleEditSubmit={this.handleEditSubmit}
                    handleCancel = {this.handleCancel}
                />
                <TablePanel
                    state={this.state}
                    handleEdit={this.handleEdit}
                    handleRemove={this.handleRemove}
                    handleSort = {this.handleSort}
                />
            </div>
        )
    }
}
export default Crud