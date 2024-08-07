import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[18px]",
};

const variants = {
    fill: "bg-white-a700 shadow-md text-black-900_7f",
};

const sizes = {
    sm: "h-[66px] px-7",
    xs: "h-[66px] px-7 text-[18px]",
};

const Input = React.forwardRef((
    {
        className = "",
        name = "",
        placeholder = "",
        type = "text",
        label = "",
        prefix,
        suffix,
        onChange,
        shape,
        variant = "fill",
        size = "xs",
        color = "white_A700",
        ...restProps
    },
    ref
) => {
    return (
        <label
            className={`flex items-center justify-center cursor-text ${sizes[size]} ${shapes[shape] || ""} ${variants[variant]} ${className}`}
        >
            {!!label && <span>{label}</span>}
            {!!prefix && <span>{prefix}</span>}
            <input
                ref={ref}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={`bg-transparent ${color} ${sizes[size]}`}
                {...restProps}
            />
            {!!suffix && <span>{suffix}</span>}
        </label>
    );
});

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["sm", "xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white_A700"]),
};

export { Input };
