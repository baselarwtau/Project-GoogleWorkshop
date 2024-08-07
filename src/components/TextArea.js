import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[18px]",
};

const variants = {
    tarOutlineBlack900: "border-black-900 border border-solid bg-white-a700",
    tarFillWhiteA700: "bg-white-a700",
    tarOutlineBlack900_1: "!border-black-900 border border-solid bg-white-a700",
    tarOutlineBlack9003f: "bg-white-a700 shadow-md",
};

const sizes = {
    xs: "h-[196px] p-3 text-[27px]",
    md: "h-[228px] p-7 text-[18px]",
    sm: "h-[228px] p-7",
    lg: "h-[274px] p-[30px] text-[18px]",
};

const TextArea = React.forwardRef(
    (
        {
            className = '',
            name = '',
            placeholder = '',
            shape,
            size = "lg",
            variant = "tarOutlineBlack900_1",
            onChange,
            ...restProps
        },
        ref
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };

        return (
            <textarea
                ref={ref}
                className={`${className} ${shape && shapes[shape] || ''} ${sizes[size] || ''} ${variants[variant] || ''}`}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                {...restProps}
            />
        );
    }
);

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs", "md", "sm", "lg"]),
    variant: PropTypes.oneOf(["tarOutlineBlack900", "tarFillWhiteA700", "tarOutlineBlack900_1", "tarOutlineBlack9003f"]),
    onChange: PropTypes.func,
};

export { TextArea };
