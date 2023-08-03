import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodAsPropChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            <div>
                <MethodsAsPropsChild
                isLoggedIn={this.state.isLoggedIn}
                handleSignIn={this.handleSignIn} //passing the function to the child to use it there
                handleSignOut={this.handleSignOut} //passing the function to the child to use it there
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent