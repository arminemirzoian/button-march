import React from 'react';
import PropTypes from "prop-types";
import Icon from "./../assets/icons";
import {ButtonStyled} from "./Button.styled";
import clsx from "clsx";

function Button ({size, color, className, icon, iconSize, children, disabled = false, onClick, isLoading, id, name})  {
    const attributes = {};

    if (name) {
        attributes.name = name;
    }

    if (id) {
        attributes.id = id;
    }
    return (
        <ButtonStyled
            className={clsx(color, size, className, 'cursor-pointer')}
            onClick={!isLoading ? onClick : null}
            {...attributes}
            disabled={disabled}>
            {icon && <Icon size={iconSize} iconName='usdIcon' className={clsx(icon, 'icon')}/>}
            {isLoading && (
                <i className="fa fa-refresh fa-spin loader" aria-hidden="true"/>
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
    iconSize: 14,
    disabled: false,
    isLoading: false,
    onClick: () => {},
};

Button.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    iconSize: PropTypes.number,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'solid', 'grey-1', 'grey-2']),
    id: PropTypes.string,
    name: PropTypes.string,

};

export default Button;