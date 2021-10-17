import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CarouselBox from '../components/CarouselBox';
import log from './img/log.png';
import zakup from './img/zakup.png';
import people from './img/people.png';
import Footer from '../components/Footer';

const Optowelt = () => {
    return (
        <>
            <CarouselBox />

            <Container style={{ paddingTop: '2rem', paddingButton: '2rem' }}>
                <Row >
                    <Col xs={12} sm={6} md={4} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '287px', height: '123px' }} src={log} />
                            <Card.Body>
                                <Card.Title>OptoWelt</Card.Title>
                                <Card.Text >
                                    OptoWelt — торговая площадка заказчиков и производителей товаров.
                                    Помогаем налаживать контакты с потенциальными партнерами и заказчиками по всему миру и находить новых клиентов.
                                    Вы можете найти поставщиков и купить товары оптом от производителей,
                                    а также следить за актуальными новостями. Оставьте заявку и клиенты сами свяжутся с вами.

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '287px', height: '123px' }} src={people} />
                            <Card.Body>
                                <Card.Title>Более 5 000000 заказчиков и производителей товаров</Card.Title>
                                <Card.Text>
                                    Ежедневно тысячи поставщиков и покупателей заключают выгодные сделки.
                                    Покупатель может быстро создать заявку и получить множество предложений от разных поставщиков по своей отрасли и выбрать наилучший вариант.
                                    Торгуйте оптом по выгодным ценам.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ width: '287px', height: '123px' }} src={zakup} />
                            <Card.Body>
                                <Card.Title>Частые отправки</Card.Title>
                                <Card.Text >
                                    Россия, Китай, Беларусь, Турция, Кыргызстан, Казахстан, Украина, Узбекистан,
                                    Южная Корея, Польша, Франция, Варшава,  Москва, США,Санкт-Петербург, Актау, Новосибирск, Екатеринбург,
                                    Краснодар, Иваново, Ростов-на-Дону, Бишкек, Нижний Новгород, Казань,
                                    Владивосток, Челябинск, Астана, Барнаул, Самара, Киев, Тараз, Магадан
                                    Уфа, Минск...
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <footer class="text-center xs={12} sm={6} md={4} pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">
                    <div class="col-6 col-md">
                        <h5>O нас</h5>
                        <ul class="list-unstyled text-small">
                            <p class="text-center">«OptoWelt»-торговая площадка для оптовиков, поставщиков и производителей.</p>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Связаться с нами</h5>
                        <ul class="list-unstyled text-small">
                            <li> <a href="" calss="link-secondary">email</a></li>
                            <li> <a href="" calss="link-secondary">telegram</a></li>
                            <li> <a href="" calss="link-secondary">instagram</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Оставить отзыв</h5>
                        <ul class="list-unstyled text-small">
                            <li> <a href="" calss="link-secondary">OptoWelt</a></li>

                        </ul>
                    </div>

                </div>
            </footer>
            <Footer />

        </>

    )
};

export default Optowelt;
