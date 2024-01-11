import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export default class MessageError extends Component {

    state = {
        msgerr: this.props.errormsg,
    }
    componentWillUnmount() {
        this.setState({msgerr: ''})
    }

    render() {
        return (
           
            <Alert variant = 'warning' className='w-50 text-center'>
                {this.state.msgerr}
            </Alert>
        )
    }
}
