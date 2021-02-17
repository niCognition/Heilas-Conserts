import React from 'react'
import { Container, Row, Col, Image, Button} from 'react-bootstrap'
import styles from '../components/concertinfoboxcomponent.module.css'



const ConcertInfo = (props) => {

    return (
        <Container fluid>
            <Row className={styles.toprow}>
                <Col className={styles.image} xs={10} md={8}>
                        <Image width="500" height="300" className="post-thumb wp-post-image" alt="" loading="lazy" src={props.img} />
                        <h1>{props.name}</h1>
                </Col>
                <Col className={styles.infobox} xs={10} md={3}>
                        <h5><b>Date:</b> {props.date}</h5>
                        <h5><b>Time:</b> {props.date}</h5>
                        <h5><b>Stage:</b> {props.stage}</h5>
                        <h5><b>Age Limit:</b> {props.age}</h5>
                        <h5><b>Price:</b> {props.price}</h5>
                </Col>
            </Row>
           
            <Row >
                <Col className={styles.concertinfo}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur.</p>

                    <Button type="submit" variant="secondary">Buy Tickets</Button>

                </Col>
                <Col>
                <iframe src="https://open.spotify.com/embed/artist/6QrQ7OrISRYIfS5mtacaw2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </Col>
                
            </Row>
            


        </Container>

    )

}

export default ConcertInfo;