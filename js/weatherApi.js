let weatherInput = document.querySelector("#weatherInput");

weatherInput.addEventListener("keyup",(e)=>{
    e.preventDefault();
    let searchText = e.target.value;
    weatherInfo(searchText)
})

function weatherInfo(searchText){
    weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${searchText},in&appid=cadc70e6247c33c3d840b35b783197c8`;
    window.fetch(weatherApi)
    .then((data)=>{
        console.log(data);
        data.json().then((data)=>{
            console.log(data)
            let tempDetail= data.main;
            let currTemp = ((tempDetail.temp - 273).toFixed(2));
            let maxTemp = ((tempDetail.temp_max - 273).toFixed(2));
            let minTemp = ((tempDetail.temp_min - 273).toFixed(2));
            
            document.querySelector("#WeatherTemplate").innerHTML=`
            <section>
                <ul class="list-group">
                    <div class="list-group-item active">City : ${data.name}</div>
                    <li class="list-group-item">Current Temp : ${currTemp} °C</li>
                    <li class="list-group-item">Max. Temp : ${maxTemp} °C</li>
                    <li class="list-group-item">Min. Temp : ${minTemp} °C</li>
                </ul>
            </section>
            `
        }).catch(err=>console.log(err))
    })
    .catch((err)=>{console.log(err)})

}






// weatherApi="https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,in&appid=cadc70e6247c33c3d840b35b783197c8"
// window.fetch(weatherApi)
// .then((data)=>{
//     console.log(data);
//     data.json().then((data)=>{
//         console.log(data.main)
//     }).catch(err=>console.log(err))
// })
// .catch((err)=>{console.log(err)})

