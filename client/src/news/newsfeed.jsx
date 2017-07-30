import React from 'react';
import {connect} from "react-redux";
import NewsItem from "./newsitem";

const mapStateToProps = (state) => state;

const showContentAction = (newsItem) => ({
        type: "SHOW_CONTENT",
        news: newsItem
    });

const mapDispathToProps = (dispatch) => ({
    switchContent: (newsItem) => dispatch(showContentAction(newsItem))
});

const list = (news) => news.map((item) => <NewsItem key={item.id} news={item} />);

const NewsFeed = ({news}) => (
    <div>
        {list(news)}
    </div>
);

export default connect(mapStateToProps, mapDispathToProps)(NewsFeed);