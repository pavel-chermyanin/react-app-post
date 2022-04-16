



import styled from 'styled-components';


import './app-info.scss';


export const Header = styled.h2`
  color: yellow
`;



const AppInfo = ({ employees, increased }) => {
  return (
      <div className="app-info">
        <h1>Учет сотрудников в компаниии N</h1>
        <h2>Общее число сотрудников: {employees}</h2>
        <h2>Премию получат: {increased}</h2>
      </div>
  )
}

export default AppInfo