import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Pane,Popover,Text} from 'evergreen-ui'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Pane
        margin={10}
        elevation={1}
    >
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={props.source}
            title={props.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography component="p">
                {props.detail}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Popover
                content={
                    <Pane
                    width={240}
                    height={240}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    >
                        <Text>PopoverContent</Text>
                    </Pane>
                }
            >
                <Button  size="small" color="primary">Share</Button>
            </Popover>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    </Pane>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
