import { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';


function Fav(){
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
                data.length && data.map((inx) => (
                    <Movie key={inx} data={data}/>
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

export default Fav;