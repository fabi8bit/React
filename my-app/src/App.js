import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mikele" age="48" />
      <StatefulGreeting greeting="I'm a stateful class component" name="Mike" />
      <StatefulGreetingWithCallback greeting="I'm a stateful class component with callback" name="Mike" />
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component with PrevState" name="Mike" /> */}
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
