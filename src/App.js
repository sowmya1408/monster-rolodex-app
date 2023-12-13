import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

const App = () => {
  console.log("rendered");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  //const [stringField, setStringField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  /* const onStringChange = (event) => {
    setStringField(event.target.value);
  }; */

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {

    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
    { /*  <SearchBox placeholder="string search" onChangeHandler={onStringChange} /> */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/* class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
   // console.log("Constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
          //  console.log(this.state);
          }
        )
      );
    //console.log("Componentdidmount");
  }

  onSearchChange = (event) => {

            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(
              () => {
                return { searchField };
              },
              () => {
              //  console.log(searchField);
              }
            );
          }
  render() {
    //console.log("render from App.js");
   const {monsters,searchField } = this.state;
   const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
        className="monsters-search-box"
        placeholder = "search monsters"
        onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
} */

export default App;
