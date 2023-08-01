import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);    // super() ensure that the constructor
                    //for the parent class (React.Component)
                    //is also called
                    //*** important: props needs to be passed also
                    // to the parent ( super(props) )***
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick() {
        // console.log('button clicked')
        this.setState({
            introduction: "Goodbye",
            buttonText: "Enter"
        });
        console.log(this.state.introduction)
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefulGreeting;