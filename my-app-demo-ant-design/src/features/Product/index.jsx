import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import MainPage from "./pages/Main";

Product.propTypes = {};

function Product(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />

            {/* <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:productID`} component={AddEditPage} /> */}
        </Switch>
    );
}

export default Product;
