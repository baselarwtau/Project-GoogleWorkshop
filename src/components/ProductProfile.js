import React from "react";
import { Button, Img, Heading } from "./index";

export default function ProductProfile({
                                           productName = "Green Dinosaur Fluffy Toy - Collectible",
                                           productPrice = "$12.99",
                                           saveButtonText = "Save",
                                            productImage="images/img_rectangle_17.png",

                                           ...props
                                       }) {
    return (
        <div
            {...props}
            className={`flex flex-col items-center w-full bg-white-a700 shadow-xs rounded-[30px] ${props.className}`}
        >
            <Img
                src={productImage}
                alt="Product Image"
                className="h-[236px] w-full rounded-[30px] object-cover"
            />
            <div className="mx-4 mt-4 flex flex-col items-start gap-1.5 self-stretch">
                <Heading size="heading2xl" as="h4" className="w-full leading-7">
                    {productName}
                </Heading>
                <Heading size="heading4xl" as="h3">
                    {productPrice}
                </Heading>
            </div>
         {/*   <Button
                shape="round"
                rightIcon={
                    <Img
                        src="images/img_mdiheart.svg"
                        alt="Mdi:heart"
                        className="h-[24px] w-[24px]"
                    />
                }
                className="mb-4 mr-4 min-w-[104px] gap-2 self-end font-quicksand"
            >
                {saveButtonText}
            </Button>*/}
        </div>
    );
}
