import React from "react";
import { push as Menu } from "react-burger-menu";
import './Sidebar.css';

export default props => {
  return (
    <Menu {...props}>
    <ul className='berger-menu__list'>
      <li className='berger-menu__item'>  
        <a className="menu-item" href="/">
          Головна
        </a>     
      </li>

      <li className='berger-menu__item'>  
        <a className="menu-item" href="/company">
          Охоронна компанія
        </a>
      </li>

      <li className='berger-menu__item'>      
        <a className="menu-item" href="/preparation">
        Тактико-спеціальна підготовка
        </a>
      </li>

      <li className='berger-menu__item berger-menu__item-sport'> 
        <a className="menu-item menu-item-sport" href="/sportclub">
          Спортивний клуб
        </a>
        <ul className='sportClub__list'>
          <li className='sportClub__item'>
            <a className='sportClub__link' href="http://">Бокс</a>
          </li>
          <li className='sportClub__item'>
            <a className='sportClub__link' href="http://">Карате кіокушин</a>
          </li>
          <li className='sportClub__item'>
            <a className='sportClub__link' href="http://">Муей Тай</a>
          </li>
        </ul>
      </li>
      
      <li className='berger-menu__item'>      
        <a className="menu-item" href="/contacts">
          Контакти
        </a>
      </li>
    </ul>

    </Menu>
  );
};
