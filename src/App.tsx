import './App.css';
// import { Container } from './components/Container';
import { Counter } from './components/state/Counter';
// import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Button } from './components/Button';

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne"
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne"
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent"
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana"
  //   }
  // ]

  return (
    <div className="App">
      {/* <Greet name="Zakiah" messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status='success' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Zakiah" isLoggedIn={false} /> */}
      {/* <Button handleClick={(event, id) => {
        console.log("Button clicked", event, id)
      }} />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}
      <Counter />
    </div>
  );
}

export default App;
