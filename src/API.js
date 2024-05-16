


//async version
export async function fetchInputData(userInput) {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=b3a7ccb6424c4f468de143611241005&q=' + userInput, {mode: 'cors'});
    const data = await response.json();
    return data
}

























//init function (non serve più)
// const urlCambiago = 'https://api.weatherapi.com/v1/current.json?key=b3a7ccb6424c4f468de143611241005&q=cambiago';

// export async function fetchInitData() {
//     const response = await fetch(urlCambiago, {mode: 'cors'});
//     const data = await response.json();
//     let processedData;
//     //this is the "clearData" function.
//     (function(data) {
//         processedData = {
//             'location' : {
//                 'name' : data.location.name,
//                 'region' : data.location.region,
//                 'country' : data.location.country,
//                 'localtime' : data.location.localtime,
//             },
//             'current' : {
//                 'condition' : {
//                     'text' : data.current.condition.text,
//                     'icon' : data.current.condition.icon,
//                     'code' : data.current.condition.code,
//                 },
//                 'last_updated' : data.current.last_updated,
//                 'temp_c': data.current.temp_c,
//                 'temp_f': data.current.temp_f,
//                 'is_day' : data.current.is_day,
//             }
//         }
//         console.log(processedData);
//         //this is the "evaluateConditionIcon" function.
//             //parse every db object
//     for (let i = 0; i < iconsDB.length; i++) {
//         if (processedData.current.condition.code == iconsDB[i].code) {
//             //check if it's day
//             if (processedData.current.is_day == 1) {
//                 document.querySelector('#conditionIcon').setAttribute('src', './icons/day/' + iconsDB[i].icon + '.png')
//             }
//             //check if it's night
//             else if (processedData.current.is_day == 0){
//                 document.querySelector('#conditionIcon').setAttribute('src', './icons/night/' + iconsDB[i].icon + '.png')
//             }
//         }
//     }
//     }) (data);
// };
