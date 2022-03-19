export const historyFetching = () => {
    return {
        type: 'HISTORY_FETCHING'
    }
}

export const historyFetched = (data) => {
    return {
        type: 'HISTORY_FETCHED',
        payload: data
    }
}

export const historyFetchingError = () => {
    return {
        type: 'HISTORY_FETCHING_ERROR'
    }
}

export const currencyRateFetching = () => {
    return {
        type: 'CURRENCY_RATE_FETCHING'
    }
}

export const currencyRateFetched = (data) => {
    return {
        type: 'CURRENCY_RATE_FETCHED',
        payload: data
    }
}

export const currencyRateFetchingError = () => {
    return {
        type: 'CURRENCY_RATE_FETCHING_ERROR'
    }
}