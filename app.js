const addressEl = document.querySelector("p[data-testid='place-postal-address']"); //get the address by using its unique id
const APIKey = ''; //An API Key from a Weather API account https://www.weatherapi.com/ 
const weatherShow = Math.random() > 0.5;

document.querySelector("a[data-testid='join-link']").addEventListener('click', () => { //place a listener on the join link call to action
    alert(`join button clicked, weather shown: ${weatherShow}`); //log out when the call to action is clicked and whether the weather was shown
});

if (addressEl && addressEl?.innerHTML && weatherShow) { // only run logic if an address is found
    const address = addressEl.innerHTML; //get the innerHTML or content of the div
    const postcode = address.split(',').pop().trim(); //grab the postcode from the full address
    const numberOfDays = 7;
    
    const weatherRequest = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${postcode}&days=${numberOfDays}`); //call the weather api with the postcode
    const weather = await weatherRequest.json(); //get the json of the response
    
    const weatherElement = document.createElement('p'); //create an empty p element on the page
    
    let forecastHTML = '';

    for (const [key, forecastDay] of weather.forecast.forecastday.entries()) {
        let dayName = 'Today';
        if (key !== 0) { //if the weather isnt for today then get the 3 character day name e.g Tue Wed etc
            dayName = new Date(forecastDay.date_epoch * 1000).toString();
            dayName = dayName.split(' ')[0];
        }
        forecastHTML += `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                column-gap: 1rem;
            ">
                <p style="
                    margin: 0;
                    font-size: 0.9rem
                ">
                    ${dayName}
                </p>
                <p style="
                    margin: 0;
                    font-size: 0.8rem
                ">
                    ${forecastDay.day.avgtemp_c}°C
                </p>
                <img src="${forecastDay.day.condition.icon}">
            </div>
        `;
    }
    
    weatherElement.innerHTML = 
        `<div
            style="
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin-top: -1rem;
            "
        >
            ${forecastHTML}
        </div>`;

    const addressParent = addressEl.parentElement; //get the parent div where the address was grabbed from
    addressParent.appendChild(weatherElement); //append the created HTML above into the parent div
}
