import React, {useState} from 'react';
import {BOX, SIZES, STYLES} from "../helpers/constants";
import PropTypes from "prop-types";
import {Box} from "@mui/material";
import Icon from "./../assets/icons"


function ButtonReact({children, type, buttonStyle, size, disabled, onClick}) {

    const [isLoading, setIsLoading] = useState(false);

    function fetchData(e) {
        e.preventDefault()
        setIsLoading(true);

        //Faking API call here
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(size) ? size : SIZES[0];
    const checkBoxSize = BOX.includes(size) ? size : BOX[0];

    return (
        <Box component="div" className="btn-border">
            <Box className={checkBoxSize} >
                {!isLoading && <Icon iconName='usdIcon'/>}
                <button
                    onClick={fetchData}
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    type={type}
                    disabled={disabled}>
                    {isLoading && (
                        <i className="fa fa-refresh fa-spin loader" aria-hidden="true"/>
                    )}
                    {isLoading ? children : "BUTTON"}
                </button>
            </Box>
        </Box>

    );
}

ButtonReact.defaultProps = {
    type: "button",
    size: 'small',
    buttonStyle: "btn--secondary--solid",
    disabled: false,
    isLoading: false,
    onClick: () => {
    },
};


ButtonReact.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    buttonStyle: PropTypes.string,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    type: PropTypes.string,
};

export default ButtonReact;