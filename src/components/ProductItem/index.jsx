import React from "react";
import {
    ProductItemWrap,
    ProductImg,
    ProductTitle,
    ProductDescription,
    ProductPrice,
    ProductBuyButton,
    ProductContent,
} from "./ProductItemStyles";
import Product1 from "Assets/algarroba.jpg";
import { Button } from "semantic-ui-react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { addProduct } from "Actions";
export default function ProductItem() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        dispatch(addProduct({ name: "alfajor de algarroba", precio: 1000 }));
        enqueueSnackbar("Producto añadido al carrito");
    };

    return (
        <ProductItemWrap>
            <ProductImg src={Product1}></ProductImg>
            <ProductContent>
                <ProductTitle>Alfajor algarroba</ProductTitle>
                <ProductDescription>
                    {" "}
                    Tapas de algarroba relleno de dulce de leche y mani
                </ProductDescription>
                <ProductPrice>$1000</ProductPrice>
                <ProductBuyButton>
                    <Button primary onClick={() => handleClick()}>
                        Añadir a carrito
                    </Button>
                </ProductBuyButton>
            </ProductContent>
        </ProductItemWrap>
    );
}
