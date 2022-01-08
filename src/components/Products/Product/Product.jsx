// @ts-nocheck
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={product.image?.url}
                title={product.name}
            />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" color="initial" gutterBottom>
                        {" "}
                        {product.name}
                    </Typography>
                    <Typography variant="h5" color="initial">
                        {" "}
                        ₦ {product.price.formatted}
                    </Typography>
                </div>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                    aria-label="Add to Cart"
                    onClick={() => onAddToCart(product.id, 1)}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
