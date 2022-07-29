import Card from '../card/card.component.jsx';

import './card-list.styles.css';


// this function is called an implicit return, that means the whole function is just a big return statement
const CardList = ({ monsters }) => (

    // const { monsters } = props; // WE DONT NEED THAT BECAUSE WE CAN SIMPLY USE { monsters } AS A PARAMETER OF THE FUNCTION

        <div className='card-list'>
        {monsters.map((monster) => {
            return <Card monster={monster}/>
        })}
        </div>
);

export default CardList;