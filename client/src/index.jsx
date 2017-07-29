import React from "react";
import {render} from "react-dom";
import NewsItem from "./NewsItem/newsitem";

const App = () => <div><NewsItem>Hello World</NewsItem></div>;


render(<App />, document.getElementById("app"));