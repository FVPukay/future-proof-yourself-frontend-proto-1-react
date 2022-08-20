import Button from 'react-bootstrap/Button';
import React from 'react';
import ObjectiveKRDeleteModal from '../ObjectiveKRDeleteModal/ObjectiveKRDeleteModal';

const ObjectiveKREditButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{float: 'right', height: '45px', width: '45px'}} className='Button' variant='success' onClick={() => setModalShow(true)}>
                <img alt='edit' src="https://img.icons8.com/material-sharp/48/000000/edit--v1.png"/>
            </Button>

            <ObjectiveKRDeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ObjectiveKREditButton;
