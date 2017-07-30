import React from 'react';
import {connect} from "react-redux";
import NewsItem from "./newsitem";

const mapStateToProps = (state) => state;

const showContentAction = (newsItem) => ({
        type: "SHOW_CONTENT",
        news: newsItem
    });

const mapDispathToProps = (dispatch) => ({
    switchContent: (item) => () => dispatch(showContentAction(item))
});

const list = (news, action) => news.map((item) => <NewsItem key={item.id}
                                            news={item}
                                            switchContent={action} />);

const NewsFeed = ({news, switchContent}) => (
    <div>
        {list(news, switchContent)}
    </div>
);

export default connect(mapStateToProps, mapDispathToProps)(NewsFeed);