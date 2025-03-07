import Accordion from 'react-bootstrap/Accordion';
import HappinessFactorObjAdd from '../HappinessFactorObjAdd/HappinessFactorObjAdd';
import ObjectiveList from '../ObjectiveList/ObjectiveList';

const HappinessFactor = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>
                    <img alt='heart' src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-heart-casino-leisure-those-icons-lineal-color-those-icons.png"/>
                    &nbsp;&nbsp;Happiness Factor
                </Accordion.Header>
                <Accordion.Body>
                    <HappinessFactorObjAdd/>
                    <ObjectiveList/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default HappinessFactor;