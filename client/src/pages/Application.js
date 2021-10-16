import React from 'react';
import logo from '../assets/logo9.png'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Optowelt = () => {
    return (
        <Col class=" my-md-2 pt-md-9 border-top" >
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" style={{ width: '100%', height: '100%' }} src={logo} />
                <Card.Body>
                    <Card.Title className="text-center" > <h3>ОПИШИТЕ ИНТЕРЕСУЮЩИЙ ТОВАР</h3>
                        <h4>Мы разошлем вашу заявку по базе производителей товаров</h4></Card.Title>
                    <Card.Text >
                        <h6>Вы хотите приобрести товар оптом?
                            Создайте заявку, и команда OptoWelt уведомит компании по выбранной категории о вашем запросе.
                            Создайте один запрос и получите множество предложений.
                        </h6>
                        <h6>Вы хотите приобрести товар оптом?
                            Создайте заявку, и команда OptoWelt уведомит компании по выбранной категории о вашем запросе.
                            Создайте один запрос и получите множество предложений.fcf
                        </h6>
                    </Card.Text>
                    <div class="col-6 col-md">
                        <li class="list-unstyled text-small"> <a role="button" target="_blank" href="https://translate.google.ru/" class="float-left btn btn-primary">Оставить заявку</a></li>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Optowelt;


