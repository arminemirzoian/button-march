import React from 'react';
import PropTypes from "prop-types";
import Icon from "./../assets/icons";
import CircularProgress from '@mui/material/CircularProgress';
import {ButtonStyled} from "./Button.styled";
import clsx from "clsx";

function Button({size, color, className, icon, children, disabled = false, onClick, isLoading}) {
    return (
        <ButtonStyled
            className={clsx(color, size, className, 'cursor-pointer')}
            onClick={!isLoading ? onClick : null}
            disabled={disabled}>
            {icon && <Icon iconName='usdIcon' className={clsx(icon, 'icon')}/>}
            {isLoading && (
                <CircularProgress color="inherit" className="loader" size="20px"/>
            )}
            <span className="button-text">{children}</span>
        </ButtonStyled>
    );
}

Button.defaultProps = {
    size: 'large',
    className: '',
    color: "primary",
    icon: false,
    disabled: false,
    isLoading: false,
    onClick: () => {
    },
};

Button.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'solid', 'grey-1', 'grey-2']),
};

export default Button;