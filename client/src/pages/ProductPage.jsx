import React from 'react';
import ProductCard from "../components/ProductCard";
import {GridList, GridListTile} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useLocation} from "react-router";
import Container from "@material-ui/core/Container";
import {GridOff, Image} from "@material-ui/icons";
import ReviewStars from "../components/ReviewStars";
import products_json from "../products.json";
import makeStyles from "@material-ui/core/styles/makeStyles";

const products = products_json

const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "space-between"
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image: {
        width: 256,
        height: 256,
    },
    img: {
        margin: 'auto',
        display: 'float',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

//Renders product cards using flexbox
function ProductPage(props) {
    let query = useQuery()
    const classes = useStyles()

    const id = query.get("id")
    const product = products[id]
    const name = product.name
    const rating = product.rating
    const description = product.description
    const related_product_ids = product.similars
    const related_products = related_product_ids.map(product_id => products[product_id])

    return (
        <Container maxWidth={"xl"}>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <div style={styles} className={classes.image}>
                        <img className={classes.img} src={"https://placeimg.com/640/480/1"}/>
                    </div>
                </Grid>
            <Grid container sm spacing={2}>
                <Grid item xs={12}>
                    <h2>{name}</h2>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ReviewStars rating={rating}/>
                    <p>{description}</p>
                </Grid>
                <Grid item xs={12}>
                    <h4>Similar Products</h4>
                    <Grid
                        container direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        {related_products.map(product => (
                                <Grid item xs={12} sm={6} md={4}>
                                    <ProductCard id={product.id} name={product.name} rating={product.rating} key={product.id}/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Container>
    )
}


export default ProductPage;
