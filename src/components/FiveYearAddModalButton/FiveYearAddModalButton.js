import Button from 'react-bootstrap/Button';
import React from 'react';
import FiveYearAddModal from '../FiveYearAddModal/FiveYearAddModal';
import './FiveYearAddModalButton.css';

const FiveYearAddModalButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{height: '50px', width: '50px'}} className='Button' variant='primary' onClick={() => setModalShow(true)}>
                <img alt='heart plus' src="https://img.icons8.com/fluency/48/000000/heart-plus.png"/>
            </Button>

            <FiveYearAddModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default FiveYearAddModalButton;
