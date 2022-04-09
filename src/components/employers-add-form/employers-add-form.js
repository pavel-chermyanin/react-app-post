
import { Component } from 'react';
import styled from 'styled-components';
import { Header } from '../app-info/app-info';

// import './employers-add-form.css'
import './employers-add-form.scss';

// здесь импортируем styledComponent, который мы создали в app-info
// и теперь мы можем его расширить
const NewHeader = styled(Header)`
    margin-bottom: 30px;
    color: #c4c4c4;
`;

class EmployersAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            validationName: false,
            validationSalary: false,
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

        if (this.state.name.length <= 4) {
            this.setState({ validationName: true})
            return false
        } else {
            this.setState({ validationName: false })
        }

        if (+this.state.salary < 100) {
            this.setState({ validationSalary: true })
            return false
        } else {
            this.setState({ validationSalary: false })
        }

        if (this.state.name && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    // делаем элементы формы управляемыми, то есть при вводе запускается колбэк,
    // далее в колбэке обновляется state
    // input получает в атрибут value значение из state
    // это дает высокую производительность, и много других плюшек
    render() {
        const { name, salary, validationName, validationSalary } = this.state

        return (
            <div className="app-add-form">
                {/* если мы хотим изменить тип элемента, используем атрибут as */}
                <NewHeader as="h3">Добавьте нового сотрудника</NewHeader>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex align-items-start">
                    <label>
                        <input
                            onChange={this.onValueChange}
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Как его зовут?"
                            name="name"
                            value={name} />
                        <p style={{
                            'color': 'red',
                            'marginTop': '10px',
                            'marginBottom': '0',
                            'fontSize': '20px'
                            }}>
                            {validationName ? 'Имя должно быть более 4 букв' : null}
                        </p>
                    </label>
                    <label>
                        <input
                            onChange={this.onValueChange}
                            type="number"
                            className="form-control new-post-label"
                            placeholder="З/П в $?"
                            name="salary"
                            value={salary} />
                        <p style={{
                            'color': 'red',
                            'marginTop': '10px',
                            'marginBottom': '0',
                            'fontSize': '20px'
                        }}>
                            {validationSalary ? 'З/П Должно быть более 100$' : null}
                        </p>
                    </label>
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