import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const ObjectiveList = () => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className='g-4'>
            {Array.from({ length: 24 }).map((_, idx) => (
                <Col>
                    <Card>
                    <Card.Header>Objective</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Complete Web Developer Course
                            </Card.Text>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={type} className='mb-3'>
                                        <Form.Group className='mb-3' controlId='formKeyResult'>
                                            <Form.Check type={type} id={`check-api-${type}`}>
                                                <Form.Check.Input type={type} isValid />
                                                <Form.Check.Label>{`Key result 1`}</Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type={type} id={`check-api-${type}`}>
                                                <Form.Check.Input type={type} isInvalid />
                                                <Form.Check.Label>{`Key result 2`}</Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type={type} id={`check-api-${type}`}>
                                                <Form.Check.Input type={type} isValid />
                                                <Form.Check.Label>{`Key result 2`}</Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formKeyResult'>
                                            <Form.Control type='text' placeholder='Enter key result'/>
                                        </Form.Group>
                                    </div>
                                ))}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ObjectiveList;
