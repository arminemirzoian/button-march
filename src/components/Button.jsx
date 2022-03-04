import React, {useRef, useState} from 'react';
import {BOX, SIZES, STYLES} from "../helpers/constants";
import PropTypes from "prop-types";
import {iconUsd, iconButterfly} from "../assets/icons";
import {Box} from "@mui/material";
import { SvgIcon } from '@mui/material';
function ButtonReact({children, type, buttonStyle, buttonSize, boxSize, disabled, icon, onClick}) {

    const Icon = useRef();
    const [isLoading, setIsLoading] = useState(false);

    function fetchData(e) {
        e.preventDefault()
        setIsLoading(true);
        Icon.current.style.display = "none";

        //Faking API call here
        setTimeout(() => {
            Icon.current.style.display = "block";
            setIsLoading(false);
        }, 2000);
    }

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkBoxSize = BOX.includes(boxSize) ? boxSize : BOX[0];
    return (
        <Box component="div" className="btn-border">
            <Box component="div" className={`${checkBoxSize}`}>
                <SvgIcon className="icon" ref={Icon} width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg"> {!isLoading && icon}
                </SvgIcon>
                <button
                    onClick={fetchData}
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    type={type}
                    disabled={disabled}>
                    {isLoading && (
                        <i className="fa fa-refresh fa-spin loader" aria-hidden="true"/>
                    )}
                    {isLoading && children}
                    {!isLoading && "BUTTON"}
                </button>
            </Box>
        </Box>

    );
}

ButtonReact.defaultProps = {
    type:"button",
    boxSize:"btn--box--medium",
    buttonStyle:"btn--secondary--solid",
    buttonSize:"btn--medium",
    disabled:false,
    isLoading: false,
    onClick: () => {},
    icon:iconUsd
};


ButtonReact.propTypes = {
    icon: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    buttonStyle: PropTypes.string,
    buttonSize: PropTypes.oneOf(['btn--large', 'btn--medium', 'btn--small']),
    boxSize: PropTypes.oneOf(['btn--box--large', 'btn--box--medium', 'btn--box--small']),
    type: PropTypes.string,
};

export default ButtonReact;