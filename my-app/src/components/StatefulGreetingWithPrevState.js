import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);    // super() ensure that the constructor
                    //for the parent class (React.Component)
                    //is also called
                    //*** important: props needs to be passed also
                    // to the parent ( super(props) )***
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            counter: 0
        };
    }


    //WRONG METHOD

    // handleClick() {
    //     // console.log('button clicked')
    //     this.setState({
    //         introduction: this.state.introduction === "Hello" ? "Goodbye" : "Hello",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit"
    //     }, //This piece of code will run after setState is complete
    //         () => {
    //         console.log('new state', this.state.introduction)
    //         console.log('new state', this.state.buttonText)
    //     });
        
    // }

    
    // incrementByOne() {
    //     // console.log('button clicked')
    //     this.setState({
    //         counter: this.state.counter + 1,
    //     }, //This piece of code will run after setState is complete
    //         () => {
    //         console.log('new state', this.state.introduction)
    //         console.log('new state', this.state.buttonText)
    //     });
        
    // }


    // CORRECT METHOD 
    
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('previous State:', prevState)
            console.log('previous Props:', prevProps)
            return  {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        });
        
    }


    incrementByOne() {
        this.setState((prevState, prevProps) => {
            console.log('previous State:', prevState)
            console.log('previous Props:', prevProps)
            return  {
                counter: prevState.counter +1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}with a value of {this.state.counter}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementByOne()}>Add 1</button>
            </div>
        )
    }

}

export default StatefulGreetingWithPrevState;