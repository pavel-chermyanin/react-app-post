
// 88

// const elem = React.createElement('h2', {className: 'green'}, 'Hello world')


// const element = {
//   type: 'h2',
//   props: {
//     className: 'green',
//     children: 'Hello world'
//   }
// }

//const text = 'Hello world'

//const elem = (  // Всегда один корневой родитель

  // любое выражение внутри фигурных скобок {2+2}, кроме объектов

  // htmlFor вместо for


  // Элементы не изменяемы, они должны быть заново отрисованы

  // Имена компонентов с большой буквы

//    <div className='parent'>
//     <h2 className='title'>Текст: {text}</h2>
//     <input type="text" />
//     <label htmlFor="test"></label>
//     <button tabIndex='0'>click</button>
//   </div>
// );
// ==============================================================================


// 89

// import React from 'react';

// Деструктуризация позваляет доставать отдельные компоненты
// import { Component } from 'react';
// import './App.css';

// const Header = () => {
//   return <h2>Hello world</h2>
// }

// // const Field = () => {
// //   const holder = 'Enter here';
// //   const styledField = {
// //     width: '300px'
// //   };
// //   return <input
// //     style={styledField}
// //     type="text"
// //     placeholder={holder} />
// // }

// // class classField extends React.Component {
// class ClassField extends Component {
//   // В классах JSX возвращается при помощи функции render()
//   render() {
//     const holder = 'Enter here';
//     const styledField = {
//       width: '300px'
//     };
//     return <input
//       style={styledField}
//       type="text"
//       placeholder={holder} />
//   }
// }

// function Btn() {
//   const text = 'Log in';


//   const logged = true;
//   return <button>{logged ? 'Enter' : text}</button>

//   // const p = <p>Log in</p>
//   // const res = () => {
//   //   return 'Log in';
//   // }
//   // return <button>{text}</button>
// }


// function App() {// компонент всегда возвращет JSX
//   return (
//     <div className="App">
//       <Header />
//       <ClassField />
//       <Btn />
//     </div>
//   );
// }

// export { Header };
// export default App;
// ==============================================================================



// 91

//function WhoAmI(props) { // компонент всегда принимает пропсы в виде объекта
// можем воспользоваться деструктуризацией
// компонент не должен изменять свои пропсы
// если изменится состание react должен сделать ререндер  компонента
// в качестве пропсов мы можем передавать и функции и любое выражение

// function WhoAmI({ name, surname, link }) {
//   return (
//     <div>
//       <h1>My name is {name.firstName}, surname - {surname}</h1>
//       {/* <h1>My name is {name()}, surname - {surname}</h1> */}
//       <a href={link}>My profile</a>
//     </div>
//   )
// }
// function App() {
//   return (
//     <div className='app'>
//       <WhoAmI name={{ firstName: "John" }} surname="Smith" link="facebook.com" />
//       <WhoAmI name={{ firstName: "Alex" }} surname="Doo" link="instagram.com" />
//       {/* <WhoAmI name={()=> {return 'Pavel'}} surname="Doo" link="instagram.com" /> */}
//     </div>
//   )
// }
// export default App
// ==============================================================================


// 93

// function App() {
//   const data = [
//     { name: 'Pavel', salary: 8400, increase: true },
//     { name: 'Alsou', salary: 900, increase: false },
//     { name: 'John', salary: 500, increase: false }
//   ]
//   return (
//     <div className='app'>
//       <EmployersList data={data} />

//     </div>
//   )
// }
// export default App

// const EmployersList = ({ data }) => {
//   // свойство key требуется для лучшей оптимизации

//   const elements = data.map((item, i) => {
//     // можно использовать спрет оператор
//     // return <EmployersListItem key={id}{...item}/>
//     return <EmployersListItem
//       // name={item.name}
//       // salary={item.salary}
//       // increase={item.increase}
//       key={`${item.name}_${i}`}
//       {...item} />
//   })
//   console.log(elements);
//   return (
//     <ul className="app-list list-group">
//       {elements}
//     </ul>
//   )
// }

// export default EmployersList
//==============================================================================



// 94

// class WhoAmI extends React.Component {
//   constructor(props) {// пропсы только для чтения
//     super(props); // вызываем функцию super для инициализации пропсов
//     this.state = { // специальный объект state хранит состояние
//       // и меняем его только при помощи setState(state)
//       years: 31,
//       text: 'Click'
//     }
//   }

//   nextYear = () => {
//     console.log('change');
//     // setState вызывает перерисовку компонента, делает это асинхронно
//     // если состояние не зависит от предыдущего используем такую конструкцию

//     // this.setState({
//     //     years: this.state.years + 1
//     // })

//     // иначе, если мы хотим точно получать пердыдущее состояние, используем функцию, которая принимает предыдущий state

//     // в функции setState() мы можем менять только необходимые свойства, остальные останутся нетронутыми
//     this.setState(state => ({
//       years: state.years + 1
//     }))
//   }

//   render() {
//     const { name, surname, link } = this.props;
//     return (
//       <div>
//         <button onClick={this.nextYear}>{this.state.text}</button>
//         <h1>My name is {name.firstName}, surname - {surname}, age - {this.state.years}</h1>
//         <a href={link}>My profile</a>
//       </div>
//     )
//   }
// }
//==============================================================================


// 96

// class WhoAmI extends React.Component {
//   constructor(props) {// пропсы только для чтения
//     super(props);
//     this.state = { // специальный объект state хранит состояние
//       // и меняем его только при помощи setState(state)
//       years: 31,
//       position: '',
//       text: 'Click'
//     }
//     // биндим метод, чтобы не терять контекст
//     // this.nextYear = this.nextYear.bind(this);
//   }

//   nextYear = () => {

//     console.log('change');
//     this.setState(state => ({
//       years: state.years + 1
//     }))
//   }
//   // мы используем стрелочные функции, чтобы брать контекст экземпляра нашего класса
//   commitInputChanges = (e, someArg) => {
//     console.log(someArg);
//     // нас не интересует предыдущий state, поэтому передаем просто объектвместо колбэка
//     this.setState({
//       position: e.target.value
//     })
//   }

//   render() {
//     // распаковываем переменные переданные через props, и переменные из state
//     const { name, surname, link } = this.props;
//     const { position, years } = this.state

//     // еще один вариант не потерять контекст, вызвать метод класса в анонимной функции
//     return (
//       <div>
//         {/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
//         <button onClick={this.nextYear}>{this.state.text}</button>
//         <h1>My name is {name.firstName}, surname - {surname}, age - {years}, position -     {position}</h1>
//         <a href={link}>My profile</a>
//         <form >
//           <span>Введите должность</span>
//           {/* если мне нужно передать в функцию аргументы, я оборачиваю ее анониной функцией */}
//           <input type="text" onChange={(e) => this.commitInputChanges(e, 'some arg')} />
//         </form>
//       </div>
//     )
//   }
// }
// function App() {
//   return (
//     <div className='app'>
//       <WhoAmI name={{ firstName: "John" }} surname="Smith" link="facebook.com" />
//       <WhoAmI name={{ firstName: "Alex" }} surname="Doo" link="instagram.com" />
//     </div>
//   )
// }
//==============================================================================



//100

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         { name: 'Pavel', salary: 8400, increase: true, rise: true, id: 1 },
//         { name: 'Alsou', salary: 900, increase: false, rise: false, id: 2 },
//         { name: 'John', salary: 500, increase: false, rise: false, id: 3 }
//       ],
//       term: ''
//     }
//   }

//   getRandomId = () => {
//     return `${Math.random()}`;
//   }

//   deleteItem = (id) => {
//     this.setState(({ data }) => ({
//       data: data.filter((item) => item.id !== id)
//     }))
//   }

//   addItem = (name, salary) => {
//     const newEmployee = {
//       name,
//       salary,
//       increase: false,
//       rise: false,
//       id: this.getRandomId()
//     }
//     this.setState(({ data }) => ({
//       data: [...data, newEmployee]
//     }))
//   }

//   onToggleProp = (id, prop) => {
//     this.setState(({ data }) => ({
//       data: data.map(item => {
//         if (item.id === id) {
//           return { ...item, [prop]: !item[prop] }
//         }
//         return item;
//       })
//     }))
//     // this.setState(({data}) => {
//     //   const index = data.findIndex(elem => elem.id === id);

//     //   const old = data[index];
//     //   const newItem = {...old, increase: !old.increase};
//     //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

//     //   return {
//     //     data: newArr
//     //   }
//     // })
//   }