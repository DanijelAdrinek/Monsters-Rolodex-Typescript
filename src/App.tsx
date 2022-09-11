// Typescript
import { ChangeEvent } from 'react';

// importing the useState hook so we can use state in functions
import { useState, useEffect } from 'react';
import Search from './components/search-box/search-box.component';
import './App.css';
import CardList from './components/card-list/card-list.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

// in functional components, the whole function will get run every time we change the state of the component, but in class components, only the changes necessary are made and the render method gets re-run with the changes
const App = () => {

  const [searchField, setSearchField] = useState(''); // we put the default value of 'searchField' in useState's parenthesis

  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(monsters);
    }

    fetchUsers();
  }, []);
  // will re-run if the values inside the array change, if passed no parameters to array, it will only run the first time that this function is called

  useEffect(() => {
    const newFilteredMonsters = () => monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  }

  return (
    <div className='App'>
      <h1 className="app-title">Monsters Rolodex</h1>
      <Search className="monsters-search-box" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   async componentDidMount() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const cleanData = await data.json();
//     this.setState(() => {
//       return {monsters: cleanData}
//     },
//     () => {
//       console.log(this.state);
//     }
//     );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   }



//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
    
//     const filteredMonsters =monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return(
//     <div className='App'>
//       <h1 className="app-title">Monsters Rolodex</h1>
//       <Search className="monsters-search-box" onChangeHandler={onSearchChange} />
//       <CardList monsters={filteredMonsters} />
//     </div>
//     );
//   }
// }

export default App;