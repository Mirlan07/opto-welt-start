import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/logo4.png';
import dforestImg from '../assets/logo7.png';
import kforestImg from '../assets/logo1.png';
import gforestImg from '../assets/logo0.png';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel collapseOnSelect expand="sm">
                <Carousel.Item collapseOnSelect expand="sm">
                    <img
                        className="d-block w-100%"
                        width="100%"
                        height="570"
                        src={forestImg}
                        alt="optowelt"
                    />
                    <Carousel.Caption collapseOnSelect expand="sm">
                        <h1>OptoWelt</h1>
                        <h4 className="center" style={{ color: 'with' }}>Оптовые производители товаров и заказчики.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100%"
                        width="1400"
                        height="570"
                        src={dforestImg}
                        alt="optowelt"
                    />
                    <Carousel.Caption>
                        <h3>Более 100 стран</h3>
                        <p>Отправляйте грузы по всему миру</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100%"
                        width="1400"
                        height="570"
                        src={kforestImg}
                        alt="optowelt"
                    />
                    <Carousel.Caption style={{ color: 'red' }}>
                        <h1 >Более 5 000000 производителей товаров</h1>
                        <h5 >Оставьте заявку и покупатели сами напишут вам</h5>
                        <h2 ></h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100%"
                        width="100%"
                        height="570"
                        src={gforestImg}
                        alt="optowelt"

                    />
                    <Carousel.Caption>
                        <h2 style={{ color: 'grei' }}>Большая база производителей и заказчиков</h2>
                        <p>Ежедневно тысячи поставщиков и покупателей заключают выгодные сделки</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );

    }

};


