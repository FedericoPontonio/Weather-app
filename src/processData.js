import { fetchInputData } from "./API";
import {renderLocationData, evaluateConditionIcon} from "./rendering.js";


export let processedData;
export function clearData(data) {
    processedData = {
        'location' : {
            'name' : data.location.name,
            'region' : data.location.region,
            'country' : data.location.country,
            'localtime' : data.location.localtime,
        },
        'current' : {
            'condition' : {
                'text' : data.current.condition.text,
                'icon' : data.current.condition.icon,
                'code' : data.current.condition.code,
            },
            'last_updated' : data.current.last_updated,
            'temp_c': data.current.temp_c,
            'temp_f': data.current.temp_f,
            'is_day' : data.current.is_day,
        }
    }
};


(function() {
    document.querySelector('#search').addEventListener('click', search)
})();

export async function search() {
    let input = document.querySelector('input').value;
    //set default
    if (input == '') {
        input = 'cambiago'
    };
    const data = await fetchInputData(input);
    await clearData(data);
    evaluateConditionIcon(processedData);
    //rendering
    renderLocationData(processedData);
};


//log
(function logData() {
    setTimeout(() => {console.log(processedData)}, 500);
}) ();