// @ts-nocheck
import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";

import useStyles from "./styles";

// const products = [
//     {
//         id: 1,
//         name: "Shoes",
//         description: "Running shoes",
//         price: "₦5000",
//         image: "https://media.cntraveler.com/photos/603e8e5eb3c7f5651f698239/16:9/w_2560%2Cc_limit/BestRunningSneakers-2021-Hoka-Lede.jpg",
//     },
//     {
//         id: 2,
//         name: "MacBook",
//         description: "Apple mackbook",
//         price: "₦300000",
//         image: "https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt.jpg",
//     },
// ];

const Products = ({ products, onAddToCart }) => {
   const classes = useStyles();

   if (!products.length) return <p>Loading...</p>;

   return (
       <main className={classes.content}>
           <div className={classes.toolbar} />
           <Grid container justifyContent="center" spacing={4}>
               {products.map((product) => (
                   <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                       <Product product={product} onAddToCart={onAddToCart} />
                   </Grid>
               ))}
           </Grid>
       </main>
   );
};

export default Products;
