import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'


const EmployersList = ({ data, onDelete }) => {
    // свойство key требуется для лучшей оптимизации

    const elements = data.map(item => {
        const {id, ...restProps} = item;

        return <EmployersListItem
            key={id}
            {...restProps}
            onDelete={() => onDelete(id)} />
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList