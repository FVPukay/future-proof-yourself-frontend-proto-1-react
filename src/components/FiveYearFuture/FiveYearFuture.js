import Accordion from 'react-bootstrap/Accordion';

const FiveYearFuture = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>5YR Future</Accordion.Header>
                <Accordion.Body>
                    My 5YR Future
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FiveYearFuture;
