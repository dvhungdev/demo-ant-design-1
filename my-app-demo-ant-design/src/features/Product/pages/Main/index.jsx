import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card } from "antd";
import { addProduct, removeProduct } from "../../productSlice";
import Meta from "antd/lib/card/Meta";

import "./main.scss";

Main.propTypes = {};

function Main(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const products = useSelector((state) => state.products);

    console.log("products", products);

    function handleOnClickAddItem() {
        const dataAdd = {
            id: products.length + 1,
            categoryId: 5,
            photo: "https://picsum.photos/id/532/300/300",
            title:
                "Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.",
        };
        const action = addProduct(dataAdd);
        dispatch(action);
    }

    function handleOnClickRemoveItem() {
        if (products.length < 1) return;
        const firstProduct = products[0];
        const removeId = firstProduct.id;
        const action = removeProduct(removeId);
        dispatch(action);
    }

    return (
        <div className='product-main'>
            <h1>Main Product</h1>
            <Button type='primary' onClick={handleOnClickAddItem} style={{ marginRight: 16 }}>
                Thêm 1
            </Button>
            <Button type='ghost' onClick={handleOnClickRemoveItem}>
                Xóa 1
            </Button>

            <h1>Length data: {products?.length}</h1>
            <div className='product-main__table'>
                {products.map((product, key) => (
                    <Card
                        key={key}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />}
                    >
                        <Meta title='Europe Street beat' description='www.instagram.com' />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Main;
