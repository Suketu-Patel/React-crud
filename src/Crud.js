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
    //maps the key to the appropriate validate function and perform validation upon it.
    validateInput = (e, key, data) => {
        //validity is used just for coloring the borders red. 
        let validity = this.state.isValid
        let currIn = this.state.currentInput;
        if (VALIDATE[key](e.target.value, data)) {
        currIn[key]=e.target.value;
            validity[key] = true;
        } else {
            validity[key] = false;
        }
        this.setState(this.state)
    }
    /**
     * concats the data to the existing state.data
     * @param e:Object event object
     */
    handleOnClick = (e) => {
        //prevents page from reloading.
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
    /**
     * set the values in each input with the selected row values and change mode from create to edit.
     * @param e:Object event object
     * @param id:String email-id of selected row
     */
    handleEdit = (e,id) => {
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
    /**
     * commits the changes done on editing to the state
     * @param e:Object event object
     */
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
    /**
     * clears all the values in inputs and puts the mode back to create
     * @param e:Object event object
     */
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
    /**
     * deletes the selected row
     * @param e:Object event object
     * @param id:String email-id of selected row
     */
    handleRemove = (e,id) =>{
        let updatedList = this.state.data.filter((item)=>item.email!==id)
        this.setState({
            data:updatedList
        })
    }
    /**
     * sort the list according to the clicked heading of table
     * @param key:String
     */
    handleSort =(key)=>{
        this.state.data.sort((a, b) => (a[key].toLowerCase() === b[key].toLowerCase()) ? 0 : (a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1))
        this.setState(this.state)
    }

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