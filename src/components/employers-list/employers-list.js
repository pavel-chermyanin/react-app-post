import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css'


const EmployersList = ({ 
    data,
    onDelete,
    onToggleProp,
    onChangeSalary }) => {
    //свойство key требуется для лучшей оптимизации

    const elements = data.map(item => {
        const { id, ...restProps } = item;

        return <EmployersListItem
            key={id}
            {...restProps}
            onDelete={() => onDelete(id)}
            onChangeSalary={(e) => onChangeSalary(id, e.currentTarget.value)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList