import { Monster } from '../../App.js';

import Card from '../card/card.component';

import './card-list.styles.css';

type CardListProps = {
    monsters: Monster[]
};

// this function is called an implicit return, that means the whole function is just a big return statement
const CardList = ({ monsters }: CardListProps) => (

    // const { monsters } = props; // WE DONT NEED THAT BECAUSE WE CAN SIMPLY USE { monsters } AS A PARAMETER OF THE FUNCTION

        <div className='card-list'>
        {monsters.map((monster: Monster) => {
            return <Card monster={monster}/>
        })}
        </div>
);

export default CardList;