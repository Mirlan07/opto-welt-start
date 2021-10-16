import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
    ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE,
    OPTOWELT_ROUTE, APPLICATION_ROUTE, CUSTOMERS_ROUTE
} from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'
const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark" >
                <NavLink className="d-inline-block aling-top" style={{ textDecoration: 'none', color: 'white' }} to={OPTOWELT_ROUTE} >OptoWelt</NavLink>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>

                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(SHOP_ROUTE)}
                            className="ml-2"
                        >
                            Товары
                        </Button>

                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(CUSTOMERS_ROUTE)}
                            className="ml-2"
                        >
                            Заказчики
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(APPLICATION_ROUTE)}
                            className="ml-2"
                        >
                            Оставить заявку
                        </Button>

                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                            className="ml-2"

                        >
                            Добавить товар
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
        </Navbar>

    );
});

export default NavBar;
