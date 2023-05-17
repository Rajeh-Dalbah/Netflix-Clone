import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';



function Movie(){
    const [data, setData] = useState([]);

    const getFavMovies = async () => {
        
        return await axios.get(`http://localhost:3003/trending`)
            .then(result => {
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getFavMovies();
          setData(data);
        })();   
    },[]);


    return (
        <>
        <Container className='div-container'>
        <Row md={3}>
            {
                data.length && data.map((ele) => (
                    <Col key={ele.id} md={4}>
                        <Card className='div-card'>
                            <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} />
                            <Card.Body>
                                <Card.Title className='div-card-title'>{ele.original_title}</Card.Title>
                                <Card.Link className='div-card-link'>
                                    {ele.poster_path}
                                </Card.Link>
                                <div>
                                    <Button className='div-card-button' variant="primary" >Update</Button>
                                    <Button className='div-card-button' variant="danger" >Delete</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>

    {
        !data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }

</>
    )
}

export default Movie;