import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.personsRef = {};
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {
      loading: true,
      people: [],
      search: null,
      cursor: null
    };
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword }, () => this.filterPeople())
  }

  filterPeople = () => {

    let filteredPeople = this.state.people.filter((person) => {         //function to Filter data by name
      if (this.state.search == null)
        return person
      else if (person.id.toLowerCase().includes(this.state.search.toLowerCase()) || person.name.toLowerCase().includes(this.state.search.toLowerCase()) || person.items.filter(it => it.toLowerCase().includes(this.state.search.toLowerCase())).length || person.address.toLowerCase().includes(this.state.search.toLowerCase()) || person.pincode.toLowerCase().includes(this.state.search.toLowerCase())) {
        return person
      }
    })

    this.setState({ filteredPeople });

  }

  handleKeyDown(e) {
    const { cursor, filteredPeople } = this.state
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => {
        let newCursor = prevState.cursor;
        this.intoView(newCursor);
        return {
          cursor: newCursor - 1
        }
      })
    } else if (e.keyCode === 40 && (cursor < filteredPeople.length - 1 || cursor === null)) {
      this.setState(prevState => {
        let newCursor = prevState.cursor;
        if (newCursor === null) newCursor = 0
        this.intoView(newCursor);
        return {
          cursor: newCursor + 1
        }
      })
    }
  }

  intoView = (person_i) => {
    const elem = this.personsRef[person_i];
    console.log(this.personsRef, person_i);
    if (!person_i || !elem) return;
    elem.scrollIntoView({ block: "center" });

  }

  setCursor = (cursor = null) => (e) => this.setState({ cursor });

  async componentDidMount() {
    const url = "https://www.mocky.io/v2/5ba8efb23100007200c2750c"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data, loading: false }, () => this.filterPeople())
    console.log(data[0]);
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
        <input type="text" placeholder="Enter item to be searched" onChange={(e) => this.searchSpace(e)} />
        <div className="list_info--wrap">
          {

            this.state.filteredPeople && this.state.filteredPeople.map((person, person_i) => (
              <div onMouseOver={this.setCursor(person_i)} onMouseOut={this.setCursor()} className={`list_info${person_i === this.state.cursor ? " highlight" : ""}`} id={`person_info_${person_i}`} ref={e => this.personsRef[person_i] = e} key={person.id}>
                <div>{person.id}</div>
                <div className="pName">{person.name}</div>
                <div>{person.items.map(dataItem => (
                  <span className="listItems">{dataItem}</span>
                ))}</div>
                <div>{person.address}</div>
                <div>{person.pincode}</div>
              </div>
            ))

          }
        </div>
        {
          this.state.filteredPeople && !this.state.filteredPeople.length && <div>Didn't find any person</div>
        }
      </div>
    );
  }
}

export default App;