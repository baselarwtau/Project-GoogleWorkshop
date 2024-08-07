import React from "react";

const sizes = {
    headingxs: "text-[17px] font-semibold",
    headings: "text-[18px] font-bold",  // Fixed `text-[18pxl` to `text-[18px]`
    headingmd: "text-[21px] font-bold",
    headinglg: "text-[22px] font-semibold",
    headingxl: "text-[23px] font-bold md:text-[21px]",
    heading2xl: "text-[24px] font-semibold md:text-[22px]",
    heading3xl: "text-[27px] font-bold md:text-[25px] sm:text-[23px]",  // Fixed `text-[25pxl` to `text-[25px]`
    heading4xl: "text-[28px] font-bold md:text-[26px] sm:text-[24px]",
    heading5xl: "text-[30px] font-semibold md:text-[28px] sm:text-[26px]",  // Removed extra space after `sm:`
    heading6xl: "text-[33px] font-bold md:text-[31px] sm:text-[29px]",  // Fixed `text-133px]` to `text-[33px]`
    heading7xl: "text-[40px] font-semibold md:text-[38px] sm:text-[36px]",  // Fixed key `heading7x1` to `heading7xl`
    heading8xl: "text-[50px] font-semibold md:text-[46px] sm:text-[40px]",
    heading9xl: "text-[57px] font-semibold md:text-[49px] sm:text-[43px]",
    heading10xl: "text-[60px] font-bold md:text-[52px] sm:text-[46px]",
};

const Heading = ({
                     children,
                     className = "",
                     size = "heading9xl",
                     as,
                     ...restProps
                 }) => {
    const Component = as || "h6";
    return (
        <Component
            className={`text-black-900 font-casaygontext ${className} ${
                sizes[size]
            }`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };
