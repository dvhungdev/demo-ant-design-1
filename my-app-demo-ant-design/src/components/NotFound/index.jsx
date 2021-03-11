import React from "react";
import PropTypes from "prop-types";

NotFound.propTypes = {};

/**
 * Component NotFound khi không được router thì sẽ hiển thị
 * @param {*} props 
 * @returns Component NotFound
 */
function NotFound(props) {
    return (
        <div>
            <h2>Not Found</h2>
        </div>
    );
}

export default NotFound;
