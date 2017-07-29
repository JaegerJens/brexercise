import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typegraphy from 'material-ui/Typography';

const styleSheet = createStyleSheet('SimpleCard', theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
}));

const NewsItem = ({classes, children}) => (
    <div>
        <Card className={classes.card}>
            <CardContent>{children}</CardContent>
        </Card>
    </div>
);

export default withStyles(styleSheet)(NewsItem);