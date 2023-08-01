import React from "react";

class StatefulGreetingWithCallback extends React.Component {

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
        }, //This piece of code will run after setState is complete
            () => {
            console.log('new state', this.state.introduction)
            console.log('new state', this.state.buttonText)
        });
        console.log(this.state.introduction)
        console.log(this.state.buttonText)
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

export default StatefulGreetingWithCallback;