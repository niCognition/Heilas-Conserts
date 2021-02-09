import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './inputcomponent.module.css';


const InputForm = () => {


    return (

        <Form className={styles.Form}>
            <Form.Group>
                <Form.Label>Band Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Band Name"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type="text" placeholder="Enter Date"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Time</Form.Label>
                <Form.Control type="text" placeholder="Enter Time"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Stage</Form.Label>
                <Form.Control as="select">
                    <option>Silver Stage</option>
                    <option>Goldrush Gate</option>
                    <option>Spaceroom</option>
                    <option>Chill Grill</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Age Limit</Form.Label>
                <Form.Control as="select">
                    <option>No Limit</option>
                    <option>18+</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Band Info</Form.Label>
                <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Band Image</Form.Label>
                <Form.File 
                    name="file"
                    label="File"
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>SpotifyID</Form.Label>
                <Form.Control type="text" placeholder="Enter SpotifyID"/>
            </Form.Group>
            <Button type="submit" variant="secondary">Register Concert</Button>
        </Form>

    )


}

export default InputForm;