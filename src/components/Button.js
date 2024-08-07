import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",  // Corrected zero instead of "Opx"
    round: "rounded-[14px]",
};

const variants = {
    fill: {
        black_900: "bg-black-900 text-white-a700",
        white_A700: "bg-white-a700 text-black-900",
        amber_200: "bg-amber-200 text-black-900",
    },
    outline: {
        gray_400: "border-gray-400 border border-solid",
    },
};

const sizes = {
    "5x1": "h-[78px] px-[34px] text-[26px]",
    lg: "h-[56px] px-[34px] text-[25px]",
    "3x1": "h-[66px] pl-[30px] pr-3 text-[18px]",
    xs: "h-[36px] px-2",
    md: "h-[52px] px-8 text-[18px]",
    "2x1": "h-[66px] px-[34px] text-[24px]",  // Fixed parentheses
    "4x1": "h-[76px] px-[34px] text-[20px]",
    xl: "h-[60px] px-[34px] text-[21px]",
    "6x1": "h-[80px] px-[34px] text-[21px]",
    sm: "h-[44px] px-8 text-[18px]",  // Fixed height
};

const Button = ({
                    children,
                    className = "",
                    leftIcon,
                    rightIcon,
                    shape,
                    variant = "fill",
                    size = "sm",
                    color = "amber_200",
                    ...restProps
                }) => {
    return (
        <button
            className={`flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${className} ${
                (shape && shapes[shape]) || ""
            } ${(size && sizes[size]) || ""} ${
                (variant && variants[variant]?.[color]) || ""
            }`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf([
        "5x1",
        "lg",
        "3x1",
        "xs",
        "md",
        "2x1",
        "4x1",
        "xl",
        "6x1",
        "sm",
    ]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["black_900", "white_A700", "amber_200", "gray_400"]),
};

export { Button };
