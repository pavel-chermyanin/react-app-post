import './employers-list-item.css';
import { Component } from 'react';


class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            isLiked: false
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }
    likeEmployer = () => {
        this.setState(({ isLiked }) => ({
            isLiked: !isLiked
        }))
    }

    render() {
        const { name, salary, onDelete } = this.props;
        const { increase, isLiked } = this.state;
        let classes = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classes += ' increase';
        }
        if (isLiked) {
            classes += ' like'
        }

        return (
            <li className={classes}>
                <span
                    onClick={this.likeEmployer}
                    className="list-group-item-label">
                    {name}
                </span>
                <input type="text"
                    className="list-group-item-input"
                    defaultValue={salary + '$'} />

                <div className="d-flex justify-content-center align-items-center">
                    <button
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm"
                        style={{ backgroundColor: 'teal' }}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button
                        onClick={onDelete}
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployersListItem