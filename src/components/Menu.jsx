import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = ()=>{
    return (
        <nav className="site-header sticky-top py-3 px-0">
            <div className="container d-flex flex-column flex-md-row justify-content-between ">
                <NavLink className="py-2" to="/home" aria-label="Product">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                         stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img"
                         viewBox="0 0 24 24" focusable="false">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                    </svg>
                </NavLink>
                <NavLink className="py-2 d-none d-md-inline-block" to="home">Главная</NavLink>
                <NavLink className="py-2 d-none d-md-inline-block" to="planets">Планеты</NavLink>
                <NavLink className="nav-link dropdown-toggle" to="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Солнечная система</NavLink>
                <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/mercury">Меркурий</NavLink>
                    <NavLink className="dropdown-item" to="/venus">Венера</NavLink>
                    <NavLink className="dropdown-item" to="/earth">Земля</NavLink>
                    <NavLink className="dropdown-item" to="/mars">Марс</NavLink>
                    <NavLink className="dropdown-item" to="/jupiter">Юпитер</NavLink>
                    <NavLink className="dropdown-item" to="/saturn">Сатурн</NavLink>
                    <NavLink className="dropdown-item" to="/uranus">Уран</NavLink>
                    <NavLink className="dropdown-item" to="/neptune">Нептун</NavLink>
                </div>
                <NavLink className="py-2 d-none d-md-inline-block" to="sun">Солнце</NavLink>
                <NavLink className="py-2 d-none d-md-inline-block" to="moon">Луна</NavLink>
            </div>
        </nav>
    );
}

export default Menu;