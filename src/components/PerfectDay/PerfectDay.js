import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PerfectDay = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const handleShow = (breakpoint) => {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <Button className='' onClick={handleShow}>
                Perfect Day
            </Button>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Perfect Day</Modal.Title>
                </Modal.Header>
                <Modal.Body>My perfect day...</Modal.Body>
            </Modal>
        </>
    );
}

export default PerfectDay;
