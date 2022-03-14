import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Box} from "@mui/material";
import Icon from "./../assets/icons";
import {ButtonStyled} from "./Button.styled";

const STYLES = [
    "btn--primary",
    "btn--primary--solid",
    "btn--secondary",
    "btn--secondary--solid",
    "btn--darkGrey--solid",
    "btn--green--solid",
    "btn--blue--solid",
    "btn--red--solid",
    "btn--yellow--solid",
    "btn--grey--solid",
    "btn--transparentGrey--solid",
    "btn--darkGrey--outlined",
    "btn--green--outlined",
    "btn--blue--outlined",
    "btn--red--outlined",
    "btn--yellow--outlined",
    "btn--grey--outlined",
    "btn--transparentGrey--outlined"
]
const SIZES = ["large", "medium", "small"];
const BOX = ["large", "medium", "small"];

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
        <ButtonStyled>
            <Box component="div" className="btn-border">
                <Box className={checkBoxSize}>
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
        </ButtonStyled>
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