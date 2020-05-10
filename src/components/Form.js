import React, { Component } from 'react'
import FetchUser from './FetchUser'
import axios from 'axios'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:'',
             data: ''
        }
    }

    handleChange= (e) => {
        this.setState({username: e.target.value})
    }

    handleSubmit =(e) => {
       e.preventDefault()
       axios.get(`https://api.github.com/users/${this.state.username}`)
            .then(res => this.setState({data: res.data}))
        this.setState({username:''})

    }
    
    render() {
        return (            
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name="usernmae" 
                    type="text"
                    value={this.state.username}
                    placeholder="User to be searched.."
                    onChange={this.handleChange} />
                    <button className="formButton"
                    type="submit"
                    >Search</button>
                </form>
                <FetchUser data={this.state.data}/>
            </div>
        )
        
    }
}

export default Form
