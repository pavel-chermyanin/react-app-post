import './employers-list-item.css';


const EmployersListItem = (props) => {
    const {
        name,
        salary,
        onDelete,
        onToggleProp,
        increase,
        rise } = props;

    let classes = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classes += ' increase';
    }
    if (rise) {
        classes += ' like'
    }

    return (
        <li className={classes}>
            <span
                data-toggle="rise"
                onClick={onToggleProp}
                className="list-group-item-label">
                {name}
            </span>
            <input type="text"
                className="list-group-item-input"
                defaultValue={salary + '$'} />

            <div className="d-flex justify-content-center align-items-center">
                <button
                    data-toggle="increase"
                    onClick={onToggleProp}
                    className="btn-cookie btn-sm">
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

export default EmployersListItem