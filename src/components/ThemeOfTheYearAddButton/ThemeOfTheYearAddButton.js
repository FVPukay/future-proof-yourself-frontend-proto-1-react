import Button from 'react-bootstrap/Button';
import React from 'react';
import '../ThemeOfTheYearAddModal/ThemeOfTheYearAddModal';
import ThemeOfTheYearAddModal from '../ThemeOfTheYearAddModal/ThemeOfTheYearAddModal';

const ThemeOfTheYearAddButton = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{height: '40px', width: '40px', float: 'right'}} className='Button' variant='primary' onClick={() => setModalShow(true)}>
                <img alt='theme' src="https://img.icons8.com/doodle/48/000000/theme-park.png"/>
            </Button>

            <ThemeOfTheYearAddModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default ThemeOfTheYearAddButton;