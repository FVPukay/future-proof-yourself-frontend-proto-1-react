import Accordion from 'react-bootstrap/Accordion';
import ObjectiveList from '../ObjectiveList/ObjectiveList';

const HappinessFactor = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>Happiness Factor</Accordion.Header>
                <Accordion.Body>
                    <ObjectiveList/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default HappinessFactor;