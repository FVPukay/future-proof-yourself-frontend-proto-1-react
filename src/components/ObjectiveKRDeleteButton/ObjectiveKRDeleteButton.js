import Button from 'react-bootstrap/Button';
import React from 'react';
import ObjectiveKRDeleteModal from '../ObjectiveKRDeleteModal/ObjectiveKRDeleteModal';

const ObjectiveKRDeleteButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{float: 'right', height: '45px', width: '45px'}} className='Button' variant='danger' onClick={() => setModalShow(true)}>
                <img alt='delete' src="https://img.icons8.com/material-sharp/24/000000/filled-trash.png"/>
            </Button>

            <ObjectiveKRDeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ObjectiveKRDeleteButton;
