import React from 'react';
import {connect} from "react-redux";
import NewsItem from "./newsitem";

const mapStateToProps = (state) => state;

const mapDispathToProps = (dispatch) => ({});

const list = (news) => news.map((message) =>
        <NewsItem key={message.id}
                  author={message.author}
                  title={message.title}>
            {message.content}
        </NewsItem>);

const NewsFeed = ({news}) => (
    <div>
        {list(news)}
    </div>
);

export default connect(mapStateToProps, mapDispathToProps)(NewsFeed);