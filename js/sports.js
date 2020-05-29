// All articles about Bitcoin from the last month, sorted by recent first
// "http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-23&sortBy=publishedAt&apiKey=1f933209d0294ed2a502e4c3f39c9340

// Top business headlines in the US right now
// http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f933209d0294ed2a502e4c3f39c9340

// All articles mentioning Apple from yesterday, sorted by popular publishers first
// http://newsapi.org/v2/everything?q=apple&from=2020-05-22&to=2020-05-22&sortBy=popularity&apiKey=1f933209d0294ed2a502e4c3f39c9340

// Top headlines from TechCrunch right now
// http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1f933209d0294ed2a502e4c3f39c9340

// All articles published by the Wall Street Journal in the last 6 months, sorted by recent first
// http://newsapi.org/v2/everything?domains=wsj.com&apiKey=1f933209d0294ed2a502e4c3f39c9340


let sportsUrl ="http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1f933209d0294ed2a502e4c3f39c9340"
let businessUrl =`http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f933209d0294ed2a502e4c3f39c9340`
let healthUrl =`http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1f933209d0294ed2a502e4c3f39c9340`
let entertainmentUrl =`http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1f933209d0294ed2a502e4c3f39c9340`
let scienceUrl=`http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1f933209d0294ed2a502e4c3f39c9340`
let technologyUrl = `http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1f933209d0294ed2a502e4c3f39c9340`


/* sports section */
window
  .fetch(sportsUrl)
  .then((sportsData) => {
    sportsData
      .json()
      .then((sports) => {
        console.log(sports.articles);
        let sportsFeed = sports.articles;
        let firstSportsBlock = sports.articles;

        let sportsnewsBlockOne = firstSportsBlock[0];
        document.getElementById("sportsFirstTemplate").innerHTML = `<ul>
             <img src="${sportsnewsBlockOne.urlToImage}" />
             <a href="${sportsnewsBlockOne.url}" target="_blank">
            
             </a>
          </ul>
          `;

        let output = [];
        for (let sport of sportsFeed) {
          output += `
            <ul class="list-group">
             <a href="${sport.url}" target="_blank">
               <li class="text-dark">
              ${sport.title}</li></a>
            </ul>
          `;
          document.getElementById("sportsAllTemplate").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*==========================Sports Section ends here===========================*/

window
  .fetch(entertainmentUrl)
  .then((entertainmentData) => {
    entertainmentData
      .json()
      .then((entertainment) => {
        console.log(entertainment.articles);
        let entertainmentFeed = entertainment.articles;
        let output = [];
        for (let enter of entertainmentFeed) {
          console.log(enter);
          let date = new Date(enter.publishedAt).toDateString();
          output += `
            <div class="row">
            <div class="col-md-5">
                <img src="${enter.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-7">
            <ul class="list-group">
             <a href="${enter.url}" target="_blank">
               <li class="text-dark">
              ${enter.title}</li></a>
              <span class="text-muted text-right">publishedAt : ${date}</span>
            </ul>
            </div>
            </div>
          `;
          document.getElementById(
            "entertainmentAllTemplate"
          ).innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*==========================entertainment Section ends here===========================*/

    // .then(function(response) {
    //     return response.text();
    //   })
    //   .then(function(text) {
    //     console.log('Request successful', text);
    //   }).catch(function(error) {
    //     log('Request failed', error)
    //   });
    // .catch((err)=>{console.log(err)});