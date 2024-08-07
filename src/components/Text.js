import React from "react";

const sizes = {
    textxs: "text-[14px] font-normal not-italic", // Fixed `text-[14pxl` to `text-[14px]`
    texts: "text-[17px] font-light",
    textmd: "text-[18px] font-normal not-italic",
    textlg: "text-[21px] font-normal", // Fixed `text-[21pxl` to `text-[21px]`
    textxl: "text-[22px] font-light",
    text2xl:
        "text-[27px] font-normal not-italic md:text-[25px] sm:text-[23px]", // Fixed `sm:text-[23pxl` to `sm:text-[23px]`
    text3xl:
        "text-[30px] font-normal not-italic md:text-[28px] sm:text-[26px]", // Removed extra space after `sm:`
    text4xl:
        "text-[31px] font-normal not-italic md:text-[29px] sm:text-[27px]", // Removed extra space after `md:` and `sm:`
    text5xl:
        "text-[37px] font-normal not-italic md:text-[35px] sm:text-[33px]", // Removed extra space after `sm:`
    text6xl: "text-[57px] font-normal not-italic md:text-[49px] sm:text-[43px]",
    text7xl: "text-[75px] font-normal not-italic md:text-[48px]", // Removed extra space after `md:`
    text8xl: "text-[80px] font-normal not-italic md:text-[48px]",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
    const Component = as || "p";
    return (
        <Component
            className={`text-black-900 font-quicksand ${className} ${
                sizes[size]
            }`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Text };
