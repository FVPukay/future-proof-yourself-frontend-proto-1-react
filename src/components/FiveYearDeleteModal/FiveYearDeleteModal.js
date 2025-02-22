import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

const FiveYearDeleteModal = (props) => {
    return (
        <Modal
            {...props}
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Delete? Are you sure?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This will delete your happiness factor and of it's objectives
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={props.onHide}>Cancel</Button>
                <Button variant='danger' onClick={props.onHide}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FiveYearDeleteModal;
