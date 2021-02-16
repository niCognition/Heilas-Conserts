import React from 'react';
import axios from 'axios';
import { Form, Button, Col, Row } from 'react-bootstrap';
import styles from './inputcomponent.module.css';


const InputForm = () => {

    const registerConcert = async (event) => {

        event.preventDefault()

        await axios.post('http://localhost:8080/concerts', {
            'bandName': event.target.bandName.value,
            'dateTime': event.target.date.value + 'T' + event.target.time.value,
            'stage': event.target.stage.value,
            'ageLimit': event.target.ageLimit.value,
            'bandInfo': event.target.bandInfo.value,
            'bandImageUrl': event.target.imageUrl.value,
            'spotifyId': event.target.spotifyId.value
        })
            .then(function (response) {
                {/* console.log(response) can be used to se response message from API */ }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    return (

        <Form onSubmit={registerConcert} className={styles.Form}>
            <Form.Group controlId="bandName">
                <Form.Label>Band Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Band Name" />
            </Form.Group>
            <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter Date" />
            </Form.Group>
            <Form.Group controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="Enter Time" />
            </Form.Group>
            <Form.Group controlId="stage">
                <Form.Label>Stage</Form.Label>
                <Form.Control as="select">
                    <option>Silver Stage</option>
                    <option>Goldrush Gate</option>
                    <option>Spaceroom</option>
                    <option>Chill Grill</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="ageLimit">
                <Form.Label>Age Limit</Form.Label>
                <Form.Control as="select">
                    <option>No Limit</option>
                    <option>18+</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="bandInfo">
                <Form.Label>Band Info</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Form.Group controlId="imageUrl">
                <Form.Label>Band Image</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="spotifyId">
                <Form.Label>SpotifyID</Form.Label>
                <Form.Control type="text" placeholder="Enter SpotifyID" />
            </Form.Group>
            <Button type="submit" variant="secondary">Register Concert</Button>
        </Form>
    )
}

export default InputForm;