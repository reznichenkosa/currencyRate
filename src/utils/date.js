
const getFullDate = (date) => {

    const formatedDate = date.slice(0, 10).split('-').reverse().join('-');
    const time = date.slice(11, 19);

    return {formatedDate, time};
}

export default getFullDate;