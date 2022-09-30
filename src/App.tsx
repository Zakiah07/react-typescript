import './App.css';
import { List } from './components/generics/List';
// import { Private } from './components/auth/Private';
// import { Profile } from "./components/auth/Profile"
// import { Counter } from './components/class/Counter';
// import { Container } from './components/Container';
// import { Counter } from './components/state/Counter';
// import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { Button } from './components/Button';
// import { ThemeContextProvider } from "./components/context/ThemeContext"
// import { Box } from "./components/context/Box"
// import { UserContextProvider } from './components/context/UserContext';
// import { User } from './components/context/User';

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
      {/* <List items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List items={[
        {
          id: 1,
          first: 'Bruce',
          last: 'Wayne',
        },
        {
          id: 2,
          first: 'Clark',
          last: 'Kent',
        },
        {
          id: 3,
          first: 'Princess',
          last: 'Diana',
        },
      ]}
        onClick={(item) => console.log(item)} />
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <Counter message='The count value is' /> */}
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
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
    </div>
  );
}

export default App;
