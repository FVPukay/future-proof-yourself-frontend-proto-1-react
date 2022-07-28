import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const FiveYearHappinessGroup = () => {
    return (
        <div>
            <Tab.Container id='list-group-tabs-example' defaultActiveKey='#link1'>
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href='#link1'>
                            Happiness 1
                        </ListGroup.Item>
                        <ListGroup.Item action href='#link2'>
                            Happiness 2
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey='#link1'>
                            <ol style={{float: 'left'}}>
                                <li>
                                    Objective 1
                                </li>
                                <li>
                                    Objective 2
                                </li>
                                <li>
                                    Objective 3
                                </li>
                            </ol>
                        </Tab.Pane>
                        <Tab.Pane eventKey='#link2'>
                            <ol style={{float: 'left'}}>
                                <li>
                                    Objective 1
                                </li>
                                <li>
                                    Objective 2
                                </li>
                                <li>
                                    Objective 3
                                </li>
                            </ol>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </div>
    );
};

export default FiveYearHappinessGroup;
