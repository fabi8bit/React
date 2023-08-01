import React from "react";


const FunctionalGreetingWithProps = (props) => {

return <h1>Hello {props.name}, I see you are {props.age}! <br/>{props.greeting}</h1>

};

export default FunctionalGreetingWithProps;