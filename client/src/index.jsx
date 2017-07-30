import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import NewsFeed from "./news/newsfeed";
import configureStore from "./configureStore";
import feed from "./content";

const initialState = {
    news: feed
};

const store = configureStore(initialState);

const App = () => <Provider store={store}><NewsFeed /></Provider>;

render(<App />, document.getElementById("app"));