## Updating state

- Add the onClick attribute to the button
- Write an event handler to listen for the click event
- use setState() in the event handler to update the state

### ATTENTION:
- setState() is asynchronous. To run something only after the State is complete we need to place the code in a callback function as the second parameter of the setState
```
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
```





### Increment by 1

This method is wrong:
```
 incrementByOne() {
        // console.log('button clicked')
        this.setState({
            counter: this.state.counter + 1,
        }, //This piece of code will run after setState is complete
            () => {
            console.log('new state', this.state.introduction)
            console.log('new state', this.state.buttonText)
        });
        
    }
```
#### because:
if you try to run this function more times in a row, React group multiple calls for setState() in one single call for the sake of performance.


### Rule for updating State


1. Never update the state directly but use always setState()
2. Put any code in setState() callback that needs to run after the state update
3. Use a callback function in setState() with prevState if you need to update state based on previous state values