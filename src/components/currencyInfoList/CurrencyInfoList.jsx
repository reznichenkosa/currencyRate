import React from 'react';
import arrow from '../../sources/icons/arrow-down.svg';

const CurrencyInfoList = ({historyItem}) => {
    
    return (
        <table className='custom-table'>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Курс</th>
                    <th>Изменение</th>
                </tr>
            </thead>
            <tbody>
                {historyItem.map(item =>{   
                    const differece = +(100 - (item.Previous * 100 / item.Value)).toFixed(2);
                    return (
                        <tr key={item.Date}>
                            <td>{item.Date}</td>
                            <td>{item.Value}</td>
                            <td className={ differece > 0 ? 'rase' : 'down'}>
                                <img src={arrow} alt="arrow" style={ differece > 0 ? {transform: 'rotate(180deg)'} : null}/>
                                {differece}% 
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default CurrencyInfoList;