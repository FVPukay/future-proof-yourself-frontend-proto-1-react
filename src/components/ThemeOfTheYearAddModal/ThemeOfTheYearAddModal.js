import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form';

const ThemeOfTheYearAddModal = (props) => {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Add your theme of the year
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='happinessFactor'>
                        <Form.Label>Theme of the Year</Form.Label>
                        <Form.Control type='text' placeholder='Enter Theme of the Year'/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ThemeOfTheYearAddModal;
