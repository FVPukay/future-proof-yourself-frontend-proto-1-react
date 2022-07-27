import Accordion from 'react-bootstrap/Accordion';

const ThemeOfTheYear = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>Theme Of The Year</Accordion.Header>
                <Accordion.Body>
                    My theme of the year
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default ThemeOfTheYear;