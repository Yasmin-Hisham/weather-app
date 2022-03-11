/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=d8220c10cd986f69a69b8089d276e48b&units=metric';

const zipCode = document.getElementById('zip');

const feelings = document.getElementById('feelings');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1)+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', () => {
    
    getData(baseUrl + zipCode.value + apiKey)
    .then((data) => {
        postData('/myData', {date: newDate,temp: data.main.temp, feelings: feelings.value});
    })
    .then(() => {
        updateUI()
    })

});

/* Function called by event listener */
const getData = async (url) => {

    const res = await fetch(url);
    
    try {
        const data = await res.json();
        
        if (data.cod != 200) {
            alert(data.message);
        }
        return data;

    } catch (error) {
        console.log("error", error);
    }
}

const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
    },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

const updateUI = async () => {
    
    const request = await fetch('/all')
    
    try {

        const allData = await request.json();

        // Animate Result Box Depending On Screen Width
        if (innerWidth <= 768) {
            document.querySelector('.holder').classList.add('flip');
        } else {
            document.querySelector('.entry').classList.add('show');
        }

        // Show Results On The Result Box
        document.querySelector('#date span').textContent = allData.date;
        document.querySelector('#temp span').textContent = allData.temp;
        document.querySelector('#content span').textContent = allData.feelings;
    
    } catch (error) {
        console.log('error', error);
    }
}

// Add & Remove Placeholder On Focus & Blur
let myInput = document.querySelector('input');

myInput.onfocus = () => myInput.setAttribute('placeholder', '');
myInput.onblur = () => myInput.setAttribute('placeholder', 'Enter zip code here');

let myTextarea = document.querySelector('textarea');

myTextarea.onfocus = () => myTextarea.setAttribute('placeholder', '');
myTextarea.onblur = () => myTextarea.setAttribute('placeholder', 'Enter your feelings here');

// Trigger Back To Main Button
let backButton = document.querySelector('.backBtn');

backButton.addEventListener('click', function () {
    document.querySelector('.holder').classList.remove('flip');
});