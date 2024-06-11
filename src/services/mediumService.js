export const fetchMediumArticles = async () => {
    const rssUrl = 'https://medium.com/feed/@orduosmann';
    const response = await fetch(rssUrl);
    const rssText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(rssText, 'application/xml');
    
    const items = xml.querySelectorAll('item');
    let articles = [];
    
    items.forEach(item => {
        const titleElement = item.querySelector('title');
        const linkElement = item.querySelector('link');
        const descriptionElement = item.querySelector('description');
        const pubDateElement = item.querySelector('pubDate');
        
        const title = titleElement ? titleElement.textContent : 'No title';
        const link = linkElement ? linkElement.textContent : '#';
        const description = descriptionElement ? descriptionElement.textContent : 'No description';
        const pubDate = pubDateElement ? pubDateElement.textContent : 'No date';
        
        articles.push({ title, link, description, pubDate });
    });
    
    return articles;
};