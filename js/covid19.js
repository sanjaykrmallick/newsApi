window.fetch("https://api.covid19api.com/summary")
.then((data)=>{
    data.json()
    .then(covid19=>{
        let Global = covid19.Global;
        console.log(covid19.Global)
        document.querySelector("#covidBlock").innerHTML=`
        <section>
            <div>
                <h4 class="badge badge-danger">NewConfirmed</h4>
                <span>${Global.NewConfirmed}</span>
            </div>
            <div>
                <h4 class="badge badge-danger">NewDeaths</h4>
                <span>${Global.NewDeaths}</span>
            </div>
            <div>
                <h4 class="badge badge-success">NewRecovered</h4>
                <span>${Global.NewRecovered}</span>
            </div>

            <div>
                <h4 class="badge badge-danger">TotalConfirmed</h4>
                <span>${Global.TotalConfirmed}</span>
            </div>

            <div>
                <h4 class="badge badge-danger">TotalDeaths</h4>
                <span>${Global.TotalDeaths}</span>
            </div>
            <div>
                <h4 class="badge badge-success">TotalRecovered</h4>
                <span>${Global.TotalRecovered}</span>
            </div>
        </section>

        `
    })
    .catch((err)=>{console.log(err)})
})
.catch((err)=>{console.log(err)})