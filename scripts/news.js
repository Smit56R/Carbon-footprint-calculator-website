const contentEl = document.getElementById('content')
const pageSize = 10
const API_KEY = '15fe54a258a243f28e56aeaa1f421be9'
let query = encodeURI('environment AND (carbon OR footprint OR carbonfootprint OR emissions OR greenhouse)')

let uri = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=${API_KEY}`

fetch(uri)
    .then(data => data.json())
        .then(res => {
            let articles = res.articles
            for(let i = 0; i < articles.length; i++) {
                console.log(i, articles[i].description)
                console.log(articles[i].content)
                contentEl.innerHTML += `
                <div class="news-card">
                    <img
                        class="news-card--img"
                        src="${articles[i].urlToImage}"
                        alt="news-card-img"
                    />
                    <div class="news-card--text">
                        <h2 class="news-card--title">
                            <a
                            href="${articles[i].url}"
                            target="blank"
                            >
                                ${articles[i].title}
                            </a
                            >
                        </h2>
                        <p class="news-card--desc">
                            ${articles[i].description}
                        </p>
                    </div>
                </div>
                `
            }
        })
            .catch(error => console.log(error))