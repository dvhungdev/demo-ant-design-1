import "antd/dist/antd.css";
import "./assets/styles/styles.scss";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import NotFound from "./components/NotFound";

// Lazy load - Code splitting
const Product = React.lazy(() => import("./features/Product"));

/**
 * Component App
 */
function App() {
    return (
        <div className='app'>
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <Header />
                    <div className='app__container'>
                        <MenuBar />
                        <div className='app__content'>
                            <Switch>
                                <Redirect exact from='/' to='/products' />

                                <Route path='/products' component={Product} />
                                <Route path='/not-founds' component={NotFound} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
