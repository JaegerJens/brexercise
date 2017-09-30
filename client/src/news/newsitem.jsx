import React from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typegraphy from "material-ui/Typography";

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

const NewsItem = ({classes, news, switchContent}) => {
    const {title, author, showFull, content, lastModified} = news;
    const onButtonClick = switchContent(news);
    return <div>
        <Card className={classes.card}>
            <CardContent>
                <Typegraphy type="headline" component="h2">
                    {title}
                </Typegraphy>
                {showFull &&
                <Typegraphy type="body1" className={classes.pos}>
                    Author: {author} ({lastModified})
                </Typegraphy>
                }
                {showFull &&
                    <Typegraphy component="p">
                        {content}
                    </Typegraphy>
                }
                <Button color="primary" className={classes.Button}
                    onClick={onButtonClick}>{showFull ? "Hide" : "Show"}</Button>
            </CardContent>
        </Card>
    </div>;
};

export default withStyles(styles)(NewsItem);