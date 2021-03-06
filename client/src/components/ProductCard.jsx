import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import ReviewStars from "./ReviewStars";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
});

function ProductCard(props) {
    const classes = useStyles()
    const name = props.name
    const id = props.id
    const param_url = `?id=${props.id}`
    const details = props.details
    const image_url = props.image_id
    const base_url = "https://placeimg.com/640/480/"
    const rating = props.rating

    return (
        <Card className={classes.root}>
                {/*This part adds the link to the component without changing the internal styling*/}
                <CardActionArea component={Link} to={{
                    pathname: "/product",
                    search: param_url
                }}>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt={name}
                            image={base_url + id}
                            title={name}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <ReviewStars rating={rating}/>
                    </CardContent>
                </CardActionArea>

        </Card>
    );
}

export default ProductCard;
