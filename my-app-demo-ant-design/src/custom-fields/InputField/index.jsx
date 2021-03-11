import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    disabled: false,
};

/**
 * Component input field (INPUT + LABEL)
 * @param {*} props
 * @author DVHUNG1 (11/03/2021)
 */
function InputField(props) {
    const { field, form, type, label, placeholder, disabled } = props;
    const { errors, touched } = form;
    const { name } = field;

    const showError = errors[name] && touched[name];
    return <div></div>;
}

export default InputField;
