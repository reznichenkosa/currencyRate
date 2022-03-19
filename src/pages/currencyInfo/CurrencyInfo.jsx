import React, { useEffect } from 'react';
import './currencyInfo.scss';
import { useNavigate, useParams } from 'react-router';
import Service from '../../API/Service';
import { useFetching } from '../../hooks/useFetching';
import CurrencyInfoList from '../../components/currencyInfoList/CurrencyInfoList';
import { useDispatch, useSelector } from 'react-redux';
import { historyFetched } from '../../actions';
import getFullDate from '../../utils/date';
import Spinner from '../../components/UI/spinner/Spinner';
import AnimationPage from '../../components/UI/animationPage/AnimationPage';

const CurrensyInfo = () => {
    const {char} = useParams();
    const countLastDays = 10;
    const navigation = useNavigate();

    const history = useSelector(state => state.history);
    const dispatch = useDispatch();
    const [fetchHistory, isHistoryLoading, historyError] = useFetching(async (countLastDays) => {
        const response = await Service.getRateOldDate(countLastDays);
        dispatch(historyFetched(response));
    });

    useEffect(() => {
        fetchHistory(countLastDays);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const historyItem = history.map(item => ({...item.Valute[char], Date: getFullDate(item.Date).formatedDate}))

    const loading = isHistoryLoading && <div className="message"><Spinner/></div>;
    const error = historyError && <div className="message">Что то пошло не так! Перезагрузите страницу!</div>;
    const content = historyItem.length > 0 && !isHistoryLoading && 
                    !historyError && 
                    <>
                        <h1 className='currency-info__title'>Динамика курса {historyItem[0].Nominal} {historyItem[0].Name} к рублю</h1>
                        <p className='currency-info__timestamp'>За последние {countLastDays} дней</p>
                        <CurrencyInfoList historyItem={historyItem} />
                        <button onClick={() => navigation(-1)} className="currency-info__link">Назад</button>
                    </>;

    return (
        <AnimationPage>
            <div className="currency-info">
                <div className="container">
                    <div className="currency-info__wrapper">
                        {loading}
                        {error}
                        {content}
                    </div>
                </div> 
            </div>
        </AnimationPage>
    );
};

export default CurrensyInfo;