import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    },
  ]
  return (
    <div className="App">
      <Greet name="Toba" messageCount={45} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status status="loading" count={20} />
    </div>
  );
}

export default App;
