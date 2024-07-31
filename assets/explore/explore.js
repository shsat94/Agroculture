document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news');

    fetch('https://newsapi.org/v2/everything?q=agriculture&apiKey=206a57b79cce4e05ae48405e54b00fcb')
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                
                const title = document.createElement('h3');
                title.textContent = article.title;
                
                const description = document.createElement('p');
                description.textContent = article.description;
                
                newsItem.appendChild(title);
                newsItem.appendChild(description);
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = '<p>Sorry, we could not load the news at this time.</p>';
        });
});
