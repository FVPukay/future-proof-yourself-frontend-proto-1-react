import Accordion from 'react-bootstrap/Accordion';
import FiveYearHappinessGroup from '../FiveYearHappinesGroup/FiveYearHappinessGroup';
import FiveYearAddModalButton from '../FiveYearAddModalButton/FiveYearAddModalButton';

const FiveYearFuture = () => {
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>5YR Future</Accordion.Header>
                <Accordion.Body>
                    <div>
                        <FiveYearAddModalButton/>
                        <FiveYearHappinessGroup/>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FiveYearFuture;
