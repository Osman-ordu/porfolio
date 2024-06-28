export const fetchMediumArticles = async () => {
    const rssUrl = 'https://medium.com/feed/@orduosmann';
    try {
        const response = await fetch(rssUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
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
            const contentElement = item.getElementsByTagNameNS('*', 'encoded').item(0);

            const title = titleElement ? titleElement.textContent : 'No title';
            const link = linkElement ? linkElement.textContent : '#';
            const description = descriptionElement ? descriptionElement.textContent : '';
            const pubDate = pubDateElement ? pubDateElement.textContent : 'No date';
            const content = contentElement ? contentElement.innerHTML : '';
            
            articles.push({ title, link, description, pubDate, content });
        });
        return articles;
    } catch (error) {
        console.error('Error fetching or parsing Medium articles:', error);
        return [];
    }
};
