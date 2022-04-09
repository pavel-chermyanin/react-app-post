import { Component } from "react"


const Header = () => {
  return <h2>Hello world</h2>
}

const Field = () => {
  const holder = 'Enter here'
  const styleField = {width: '300px'}
  return <input style={styleField} type="text" placeholder={holder}/>
}

class FieldClass extends Component {
  render() {
    const holder = 'Enter here'
    const styleField = { width: '300px' }

    
    return <input style={styleField} type="text" placeholder={holder} />
  }
}

function Btn(){
  const text = 'Log in'
  const logged = false

  return <button>{logged ? 'Enter' : text}</button>
}


const Test = () => {
  return (
    <div className="test">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

export default Test