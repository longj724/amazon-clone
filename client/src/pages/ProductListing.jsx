import React from 'react';
import ProductCard from "../components/ProductCard";
import {GridList, GridListTile} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "space-between"
}

//Renders product cards using flexbox
function ProductListing(props) {
    // const products = props.products;
    let products = []
    for (let i = 0; i < 15; ++i) {
        let name = String.fromCharCode(i + "a".charCodeAt(0))
        products.push({
            id: i,
            name: name,
            details: Array(50).join(name + " ")
        })
    }
    return (
        <div>
            {/*<GridList cellHeight={350} cols={Math.floor(window.screen.width / 300)}>*/}
            {/*    {products.map(product => (*/}
            {/*        <GridListTile>*/}
            {/*            <ProductCard id={product.id} name={product.name} key={product.id}/>*/}
            {/*        </GridListTile>*/}
            {/*    ))}*/}
            {/*</GridList>*/}

            <Grid container direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  spacing={2}
            >
                    {products.map(product => (
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            <ProductCard id={product.id} name={product.name} key={product.id}/>
                        </Grid>
                    ))}
            </Grid>
        </div>

    )
}


export default ProductListing;