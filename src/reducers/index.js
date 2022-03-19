const initialState = {
    history: [],
    historyLoadingStatus: 'idle',
    currencyRate: [],
    currencyRateLoadingStatus: 'idle'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('HISTORY_FETCHING'):
            return {
                ...state,
                historyLoadingStatus: 'loading'
            }
        case ('HISTORY_FETCHED'):
            return {
                ...state,
                history: action.payload,
                historyLoadingStatus: 'idle'
            }
        case 'HISTORY_FETCHING_ERROR':
            return {
                ...state,
                historyLoadingStatus: 'error'
            }
        case ('CURRENCY_RATE_FETCHING'):
            return {
                ...state,
                currencyRateLoadingStatus: 'loading'
            }
        case ('CURRENCY_RATE_FETCHED'):
            return {
                ...state,
                currencyRate: action.payload,
                currencyRateLoadingStatus: 'idle'
            }
        case 'CURRENCY_RATE_FETCHING_ERROR':
            return {
                ...state,
                currencyRateLoadingStatus: 'error'
            }
        default:
            return state;
    }
}

export default reducer;