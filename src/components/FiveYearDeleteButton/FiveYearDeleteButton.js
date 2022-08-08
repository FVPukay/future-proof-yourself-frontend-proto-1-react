import Button from 'react-bootstrap/Button';
import React from 'react';
import FiveYearDeleteModal from '../FiveYearDeleteModal/FiveYearDeleteModal';

const FiveYearDeleteButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{width: '80px', height: '40px'}} className='Button' variant='danger' onClick={() => setModalShow(true)}>
                Delete
            </Button>

            <FiveYearDeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default FiveYearDeleteButton;
