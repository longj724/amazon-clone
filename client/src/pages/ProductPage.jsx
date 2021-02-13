import React from 'react';
import ProductCard from "../components/ProductCard";
import {GridList, GridListTile} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useLocation} from "react-router";
import Container from "@material-ui/core/Container";
import {Image} from "@material-ui/icons";
import ReviewStars from "../components/ReviewStars";
import products_json from "../products.json";

const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "space-between"
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

//Renders product cards using flexbox
function ProductPage(props) {
    let query = useQuery()

    const id = query.get("id")
    const product = products_json[id]
    const name = product.name
    const rating = product.rating
    const description = product.description
    const related_product_ids = product.similars
    const related_products = related_product_ids.map(product_id => products_json[product_id])

    return (
        <Container maxWidth={"md"}>
            
            <h2>{name}</h2>
            <ReviewStars rating={rating}/>
            <p>{description}</p>
            <img src={"https://placeimg.com/640/480/"}/>
            <h4>Similar Products</h4>
            <div>
                <Grid
                    container direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    {related_products.map(product => (
                            <Grid item xs={6} sm={4} md={3}>
                                <ProductCard id={product.id} name={product.name} rating={product.rating} key={product.id}/>
                            </Grid>
                        )
                    )}
                </Grid>
            </div>
        </Container>
    )
}


export default ProductPage;