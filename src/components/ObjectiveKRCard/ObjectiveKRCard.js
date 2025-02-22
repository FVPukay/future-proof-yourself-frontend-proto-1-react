import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ObjectiveKRDropdownButton from '../ObjectiveKRDropdownButton/ObjectiveKRDropdownButton';

const ObjectiveKRCard = () => {
    return (
        <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3} className='g-4'>
            {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                    <Card>
                    <Card.Header className='bg-dark'> 
                        <ObjectiveKRDropdownButton/>
                    </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ListGroup>
                                    <Card.Header className='bg-primary text-white'>Objective</Card.Header>
                                    <ListGroupItem>Complete Web Developer Course lorem ipsum lorem lorem lorem lorem ipsum lorem lorem lorem</ListGroupItem>
                                </ListGroup>
                            </Card.Text>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={type} className='mb-3'>
                                        <Form.Group style={{marginTop: '4px'}} className='mb-3' controlId='formKeyResult'>
                                            <Form.Control type='text' placeholder='Enter key result'/>
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formKeyResult'>
                                            <Form.Check type={type} id={`check-api-${type}`}>
                                                <Form.Check.Input type={type} />
                                                <Form.Check.Label>{`Key result 1`}</Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type={type} id={`check-api-${type}`}>
                                                <Form.Check.Input type={type} />
                                                <Form.Check.Label>{`Key result 2`}</Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type={type} id={`check-api-${type}`}>
                                                <Form.Check.Input type={type} />
                                                <Form.Check.Label>{`Key result 2`}</Form.Check.Label>
                                            </Form.Check>
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

export default ObjectiveKRCard;
