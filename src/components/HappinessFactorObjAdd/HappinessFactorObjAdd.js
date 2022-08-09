import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const HappinessFactorObjAdd = () => {
    return (
        <InputGroup className='mb-3'>
            <Form.Control
                placeholder='Enter your objective'
                aria-label='objective'
                aria-describedby='basic-addon2'
            />
            <Button variant='outline-primary' id='button-addon2'>
                Add
            </Button>
        </InputGroup>
    );
};

export default HappinessFactorObjAdd;
