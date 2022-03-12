import React, { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Pavel', salary: 8400, increase: true, id: 1 },
        { name: 'Alsou', salary: 900, increase: false, id: 2 },
        { name: 'John', salary: 500, increase: false, id: 3 }
      ]
    }
  }

  getRandomId = () => {
    return `${Math.random()}`;
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter((item) =>item.id != id)
    }))
  }

  addItem = (name, salary) => {
    this.setState(({data}) => ({
      data: [...data, {
        name,
        salary,
        id: this.getRandomId()
      }]
    }))
    console.log(this.state.data);

  }


  render() {
    return (
      <div className='app'>
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployersList
          onDelete={this.deleteItem}
          data={this.state.data} />


        <EmployersAddForm
          onAdd={this.addItem} />

      </div>
    )
  }
}

export default App