import Button from 'react-bootstrap/Button';
import React from 'react';
import FiveYearAddModal from '../FiveYearAddModal/FiveYearAddModal';

const FiveYearEditButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{width: '80px', height: '40px', marginRight: '10px'}} className='Button' variant='success' onClick={() => setModalShow(true)}>
                Edit
            </Button>

            <FiveYearAddModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default FiveYearEditButton;