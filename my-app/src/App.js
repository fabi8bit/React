import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsChild from './components/MethodAsPropChild';
import MethodsAsPropsParent from './components/MethodAsPropParents';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObject';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequest from './components/HTTPRequest';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mikele" age="48" />
      <StatefulGreeting greeting="I'm a stateful class component" name="Mike" />
      <StatefulGreetingWithCallback greeting="I'm a stateful class component with callback" name="Mike" />
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component with PrevState" name="Mike" /> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      {/* <EventBinding.js /> */}
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true}/> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <UseStateWithObjects /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectCounterContainer /> */}
      {/* <HTTPRequest /> */}
      {/* <HTTPPost /> */}
      <HTTPHooks />
    </div>
  );
}

export default App;
