
import { Component } from 'react'
import './employers-add-form.css'

class EmployersAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        // таким способом мы можем записать в state значение input используя его имя
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    // делаем элементы формы управляемыми, то есть при вводе запускается колбэк,
    // далее в колбэке обновляется state
    // input получает в атрибут value значение из state
    // это дает высокую производительность, и много других плюшек
    render() {
        const { name, salary } = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input
                        onChange={this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} />
                    <input
                        onChange={this.onValueChange}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} />

                    <button
                        type="submit"
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm