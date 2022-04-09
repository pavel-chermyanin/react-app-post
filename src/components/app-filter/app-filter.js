import './app-filter.css'


const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'money', label: 'З/П больше 1000$' },
    ];

    const buttons = buttonsData.map(({ name, label,colored }) => {
        // здесть мы получаем filter из глобального state
        // так же отправляем колбэк наверх с аргументом активного button
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                onClick={() => props.onFilterSelect(name)}
                key={name}
                className={`btn ${clazz}`}
                type="button">
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter