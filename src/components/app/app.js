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
        { name: 'Pavel', salary: 8400, increase: true, rise: true, id: 1 },
        { name: 'Alsou', salary: 900, increase: false, rise: false, id: 2 },
        { name: 'John', salary: 500, increase: false, rise: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
  }

  getRandomId = () => {
    return `${Math.random()}`;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id)
    }))
  }

  addItem = (name, salary) => {
    // при отправке формы в компоненте формы выполняется функция onSubmit
    // также она вызывает колбэк c данными формы, который переходит сюда
    // на основе данных создаем новый объект
    // и при помощи setState создаем копию массива и в конец помещаем newEmployee

    const newEmployee = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.getRandomId()
    }
    this.setState(({ data }) => ({
      data: [...data, newEmployee]
    }))
  }

  onToggleProp = (id, prop) => {
    // при клике в listItem, управление переходит в list
    // в list наша функция вызывается с id item и с его атрибутом data-toggle
    // далее управление переходит сюда
    // здесь перебираем массив, если в элементе совпадают id, создаем копию элемента, поменяв свойство, переданное вторым аргументом
    // остальные item вовращаем как есть, map возвращает новый массив
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  onUpdateSearch = (term) => {
    // в компонетне search срабатывает функция на изменение сотояние
    // далее она вызывает колбэк из пропсов, передавая аргументом term, и управление переходит сюда
    this.setState({ term: term })
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'money':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    // из компонента app-filter, передается функция
    // здесть меняем state
    this.setState({ filter });
  }

  onChangeSalary = (id, value) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, salary : value.replace(/[\$a-z]/ig, '')}
        }
        return item
      })
    }))
  }

  render() {
    const { data, term, filter } = this.state
    const employees = data.length;
    const increased = data.filter(el => el.increase).length;
    // компоненту list передается отфильтрованные данные
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className='app'>
        <AppInfo
          employees={employees}
          increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployersList
          onChangeSalary={this.onChangeSalary}
          onDelete={this.deleteItem}
          data={visibleData}
          onToggleProp={this.onToggleProp} />


        <EmployersAddForm
          onAdd={this.addItem} />

      </div>
    )
  }
}

export default App