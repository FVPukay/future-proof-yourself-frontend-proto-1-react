import Button from 'react-bootstrap/Button';
import React from 'react';
import ObjectiveKRDeleteModal from '../ObjectiveKRDeleteModal/ObjectiveKRDeleteModal';

const ObjectiveKRDeleteButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{float: 'right', height: '45px', width: '45px'}} className='Button' variant='danger' onClick={() => setModalShow(true)}>
                <img alt='delete' src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/000000/external-delete-user-interface-anggara-flat-anggara-putra-4.png"/>
            </Button>

            <ObjectiveKRDeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ObjectiveKRDeleteButton;
