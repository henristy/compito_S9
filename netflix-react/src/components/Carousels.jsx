import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap';

export default function Carousels({movies}) {
    return (
        <>
            <Carousel fade className="d-none d-xl-grid" id="carouselxl">
                <Carousel.Item>
                    <Row className="row-cols-xl-5">
                        {movies.map((movieImg, i) => i < 5 && <Col className='p-0' key={i}><img className='w-100' height={500} src={movieImg.Poster} alt="movie img" /></Col>)}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="row-cols-xl-5">
                        {movies.map((movieImg, i) => i > 4 && <Col className='p-0' key={i}><img className='w-100' height={500} src={movieImg.Poster} alt="movie img" /></Col>)}
                    </Row>
                </Carousel.Item>
            </Carousel>
            <Carousel  fade className="d-none d-md-grid d-xl-none" id="carouselmd">
                <Carousel.Item>
                    <Row className="row-cols-xl-3">
                        {movies.map((movieImg, i) => i < 3 && <Col className='p-0' key={i}><img className='w-100' height={500} src={movieImg.Poster} alt="movie img" /></Col>)}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="row-cols-md-3">
                        {movies.map((movieImg, i) => i > 2 && i < 6 && <Col className='p-0' key={i}><img className='w-100' height={500} src={movieImg.Poster} alt="movie img" /></Col>)}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="row-cols-md-3">
                        {movies.map((movieImg, i) => i > 5 && i < 9 && <Col className='p-0' key={i}><img className='w-100' height={500} src={movieImg.Poster} alt="movie img" /></Col>)}
                    </Row>
                </Carousel.Item>
            </Carousel>
            <Carousel fade className="d-md-none" id="carouselsm">
                {movies.map((movieImg, i) =>
                    <Carousel.Item key={i}>
                        <Row className="row-cols-1">
                            <Col className='p-0'> <img className='w-100' height={500} src={movieImg.Poster} alt="movie img" /></Col>
                        </Row>
                    </Carousel.Item>
                    )
                }
            </Carousel>
        </>
    )
}
