import axios from "axios";

export default class Service {
    static async getRateAll() {
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        return response;
    }

    static async getRateOldDate (countLastDays) {

        const allDate = [];
        const data = [];

        const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`);
        allDate.push(response.data.Date.slice(0,10).split('-').join('/'));
        allDate.push(response.data.PreviousDate.slice(0,10).split('-').join('/'));
        data.push(response.data);

        for (let i = 1; i < countLastDays; i++) {
            const response = await axios.get(`https://www.cbr-xml-daily.ru/archive/${allDate[i]}/daily_json.js`);
            allDate.push(response.data.PreviousDate.slice(0,10).split('-').join('/'));
            data.push(response.data);
        }

        return data;
    } 
}

