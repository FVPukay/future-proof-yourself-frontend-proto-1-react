import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ThemeOfTheYear = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>Theme Of The Year</Accordion.Header>
                <Accordion.Body>
                    <InputGroup className='mb-3'>
                        <Form.Control
                            placeholder='Enter your theme of the year'
                            aria-label='Theme Of The Year'
                            aria-describedby='basic-addon2'
                        />
                        <Button variant='outline-primary' id='button-addon2'>
                            Save
                        </Button>
                    </InputGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default ThemeOfTheYear;