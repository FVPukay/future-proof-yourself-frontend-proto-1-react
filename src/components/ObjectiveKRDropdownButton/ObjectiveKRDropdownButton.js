import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import ObjectiveKRDeleteModal from '../ObjectiveKRDeleteModal/ObjectiveKRDeleteModal';

const ObjectiveKRDropdownButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Dropdown style={{float: 'right'}}>
            <Dropdown.Toggle variant='success'>
                Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item onClick={() => setModalShow(true)}>Delete</Dropdown.Item>
            </Dropdown.Menu>
            <ObjectiveKRDeleteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Dropdown>
    );
}

export default ObjectiveKRDropdownButton;
