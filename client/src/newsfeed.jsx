import React from 'react';
import NewsItem from "./newsitem";
import feed from "./content";

const list = feed.map((message) => <NewsItem key={message.id} title={message.title}>{message.content}</NewsItem>);

const NewsFeed = () => (
    <div>
        {list}
    </div>
);

export default NewsFeed;