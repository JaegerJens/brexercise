import React from "react";
import {render} from "react-dom";
import NewsFeed from "./newsfeed";

const App = () => <div><NewsFeed></NewsFeed></div>;


render(<App />, document.getElementById("app"));