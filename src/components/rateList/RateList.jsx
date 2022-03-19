import RateListItem from '../rateListItem/RateListItem';
import './rateList.scss';

const RateList = ({currencyRateArr}) => {

    return (
        <table className='custom-table'>
            <thead>
                <tr>
                    <th>Char Code</th>
                    <th>Nominal</th>
                    <th>Value</th>
                    <th>Difference</th>
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