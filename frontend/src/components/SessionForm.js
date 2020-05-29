import React, { Component } from 'react'




export default class SessionForm extends Component {
    
    handleSubmit(e) {
        alert('Submitted:' + this.state.value);
        e.preventDefault()
    }

    handleChange(e) {
        this.setState({
            datetime: e.target.datetime,
            board: e.target.board,
            description: e.target.description
        })
    }
    
    render(props) {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date:
                        <input type="datetime-local" value={this.props.datetime} onChange={this.handleChange} />
                    </label> <br/>

                    <label>
                        Board:
                        <input type="text" value={this.props.board} onChange={this.handleChange} />
                    </label><br/>

                    <label>
                        Description:
                        <input type="text" value={this.props.description} onChange={this.handleChange} />
                    </label><br/>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>  
            </div>
        )
    }
}
