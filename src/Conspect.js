
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