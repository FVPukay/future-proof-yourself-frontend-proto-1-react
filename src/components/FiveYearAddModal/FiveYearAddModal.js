import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form';

const FiveYearAddModal = (props) => {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Add Happiness Factor and Five Year Objectives
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='happinessFactor'>
                        <Form.Label>Happiness Factor</Form.Label>
                        <Form.Control type='text' placeholder='Enter Happiness Factor'/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='objective1'>
                        <Form.Label>Objective 1</Form.Label>
                        <Form.Control type='text' placeholder='Enter Objective 1'/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='objective2'>
                        <Form.Label>Objective 2</Form.Label>
                        <Form.Control type='text' placeholder='Enter Objective 2 - Optional'/>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='objective3'>
                        <Form.Label>Objective 3</Form.Label>
                        <Form.Control type='text' placeholder='Enter Objective 3 - Optional'/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FiveYearAddModal;
