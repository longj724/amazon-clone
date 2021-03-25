import React, {useState} from 'react';
import ProductCard from "../components/ProductCard";
import {GridList, GridListTile} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Pagination from '@material-ui/lab/Pagination';
import products_json from "../products.json";

const products = products_json

const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "space-between"
}

//Renders product cards using flexbox
function ProductListing(props) {
    const [current_page, set_current_page] = useState(0)
    //we 0-index internally and then just show a one-index
    const page_size = props.page_size ?? 25
    const num_pages = Math.ceil(products.length/page_size)

    const displayed_products = products.slice(current_page*page_size, (current_page+1)*(page_size))

    return (
        <div>
            <div style={{margin: "4px"}}>
                {/*Grid here has a problematic -8px margin and width*/}
                <Grid container direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                      spacing={2}
                >
                    {displayed_products.map(product => (
                        <Grid item xs={6} sm={4} md={3} lg={2}>
                            {/*key is a required parameter of things in a grid*/}
                            <ProductCard id={product.id} name={product.name} rating={product.rating} key={product.id}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div style={{display: "flex",
                justifyContent: "center"}}>
                <Pagination
                variant={"outlined"}
                count={num_pages}
                defaultPage={current_page + 1}
                siblingCount={2}
                onChange={(event, value) => set_current_page(value - 1)}
                />
            </div>
        </div>

    )
}


export default ProductListing;
