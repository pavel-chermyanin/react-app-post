import './employers-list-item.scss';


const EmployersListItem = (props) => {
    const {
        name,
        salary,
        onDelete,
        onToggleProp,
        increase,
        onChangeSalary,
        rise } = props;

    let classes = 'list-group-item d-flex justify-content-between align-items-center';
    if (increase) {
        classes += ' increase';
    }
    if (rise) {
        classes += ' like'
    }

    const onChangeSal = (e) => {
        let value = e.currentTarget.value;

        // if (/[a-z]/i.test(value)) {
        //     return
        //     console.log('буквы');
        // }

        if (value.slice(-1) !== '$') {
            const targetSym = value.indexOf('$');
            value = value.slice(0, targetSym + 1);
            e.currentTarget.value = value;
            return
        }
        onChangeSalary(e)
    }

    return (
        <li className={classes}>
            <div className="list-item-name">
                <p
                    data-toggle="rise"
                    onClick={onToggleProp}
                    className="list-group-item-label list-item-supname">
                    {name}
                </p>
                <p className='list-item-subname'>
                    Кликните на имя чтобы повысить  
                </p>

            </div>
            <input
                onChange={onChangeSal}
                type="text"
                className="list-group-item-input"
                value={salary + '$'} />

            <div className="btns d-flex justify-content-center align-items-center">
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