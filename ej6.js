
const CONTENEDOR = document.getElementById("cityContainer");

const getForecast = ()=>{

    let ciudad = $("#selector").val();
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/forecast?q="+ciudad+"%2Car&lang=sp&units=metric",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "03ae5cf2a6msh33aa8c18c48d33fp1faa4bjsn82bbbdebc923",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        renderForcast(response.list);

    })

};

const renderForcast = (data)=>{
    CONTENEDOR.innerHTML="";
    for(let i=0; i<5; i++){
    let html = createCardHTML(data[i]);
    CONTENEDOR.innerHTML += html;
    }
}


function createCardHTML(data){
    let img="logo";
    return `
    <div class ="card">
        <div class="cardHeader">
            <span>${data.dt_txt}</span>
        </div>
        <div class="cardBody">
            <img src="${img}" alt="${data.weather[0].description}">
            <label for="temp">Temperatura</label>
            <span name="temp">${data.main.temp}</span>
            <label for="sensa">Sens. Térmica</label>
            <span name="sensa">${data.main.feels_like}</span>
        </div>
    </div>`;

}