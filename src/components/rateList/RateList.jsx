import RateListItem from '../rateListItem/RateListItem';
import './rateList.scss';

const RateList = ({currencyRateArr}) => {

    return (
        <table className='custom-table'>
            <thead>
                <tr>
                    <th>Код валюты</th>
                    <th>Название</th>
                    <th>Номинал</th>
                    <th>Значение</th>
                    <th>Изменение</th>
                </tr>
            </thead>
            <tbody>
                {currencyRateArr && currencyRateArr.map(item => 
                    <RateListItem key={item.NumCode} {...item}/>)}
            </tbody>
        </table>
    );
};

export default RateList;