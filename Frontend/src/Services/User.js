import axios from 'axios';
import * as Config from "../Utils/config";

export async function GetPastPerformance(token) {
    try {
        const res = await axios.get(`http://192.168.0.11:5001/api/list/past-performance/66d2c3bebf7e6dc53ed07626`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        return res?.data;
    } catch (err) {
        console.error('Error fetching past performance:', err);
        throw err;
    }
}


export async function GetPrivacyPolicy(token) {
    try {
        const res = await axios.get(`http://192.168.0.11:5001/api/list/content/66dbec0a9f7a0365f1f4527d`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        return res?.data;
    } catch (err) {
        console.error('Error fetching privacy policy data:', err);
        throw err;
    }
}