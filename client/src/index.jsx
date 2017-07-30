import React from "react";
import {render} from "react-dom";
import NewsFeed from "./news/newsfeed";
import configureStore from "./configureStore";
import feed from "./content";

const initialState = {
    news: feed
};

const store = configureStore(initialState);

const App = () => <div><NewsFeed /></div>;

render(<App />, document.getElementById("app"));