import React from 'react';
import arrow from '../../sources/icons/arrow-down.svg';
import { NavLink } from 'react-router-dom';

const RateListItem = ({CharCode, Nominal, Name, Value, Previous}) => {

    const differece = +(100 - (Previous * 100 / Value)).toFixed(2);
    return (
        <tr className='tr-info' tabIndex="0">
            <td>
                <NavLink to={'/' + CharCode}>{CharCode}</NavLink>
                <span className='tooltip'>{Name}</span>
            </td>
            <td>{Nominal}</td>
            <td>{Value}</td>
            <td className={ differece > 0 ? 'rase' : 'down'}>
                <img src={arrow} alt="arrow" style={ differece > 0 ? {transform: 'rotate(180deg)'} : null}/>
                {differece}% 
            </td>
        </tr>
    );
};

export default RateListItem;