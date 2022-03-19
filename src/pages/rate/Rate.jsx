import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Service from '../../API/Service';
import RateList from '../../components/rateList/RateList';
import { useFetching } from '../../hooks/useFetching';
import getFullDate from '../../utils/date';
import './rate.scss';
import Spinner from '../../components/UI/spinner/Spinner';

import {currencyRateFetched} from '../../actions/index';

const Rate = () => {
    const currencyRate = useSelector(state => state.currencyRate);
    const dispatch = useDispatch();
    const [currencyRateFetch, isCurrencyRateLoading, currencyRateError] = useFetching(async () => {
        const response = await Service.getRateAll();
        dispatch(currencyRateFetched(response.data));
    })

    const fDate = currencyRate.Date && getFullDate(currencyRate.Date).formatedDate;
    const fTimeStamp = currencyRate.Date && (`${getFullDate(currencyRate.Timestamp).formatedDate} ${getFullDate(currencyRate.Timestamp).time}`);
    const currencyRateArr = currencyRate.Valute &&  Object.values(currencyRate.Valute);

    useEffect(() => {
        currencyRateFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loading = isCurrencyRateLoading && <div className="message"><Spinner/></div>;
    const error = currencyRateError && <div className="message"><h3>Что-то пошло не так! <br/> Перезагрузите страницу!</h3></div>;
    const content = !currencyRateError && 
                    !isCurrencyRateLoading && 
                    <>
                        <h1 className='rate__title'>Курсы валют на {fDate}</h1>
                        <p className='rate__timestamp'>Последнее обновление базы данных: {fTimeStamp}</p>
                        <RateList currencyRateArr={currencyRateArr}/>
                    </>;
    return (
        <section className="rate">
            <div className="container">
                <div className="rate__wrapper">
                    {loading}
                    {error}
                    {content}
                </div>
            </div>
        </section>
    );
};

export default Rate;