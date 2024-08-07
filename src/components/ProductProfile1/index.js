import React from "react";
import { Button, Img, Heading } from "./..";

export default function ProductProfile({
                                           productImage = "images/img_rectangle_17.png",
                                           productName = "Green Dinosaur Fluffy Toy - Collectible",
                                           productPrice = "$12.99",
                                           saveButtonText = "Saved",
                                           ...props
                                       }) {
    return (
        <div
            {...props}
            className={`flex flex-col w-full gap-4 bg-white-a700 shadow-xs rounded-[30px] ${props.className}`}
        >
            <Img
                src={productImage}
                alt="Product Image"
                className="h-[236px] w-full rounded-[30px] object-cover"
            />
            <div className="mx-4 mb-4 flex flex-col items-start gap-1.5 self-stretch">
                <Heading size="heading2xl" as="h4" className="w-full leading-7">
                    {productName}
                </Heading>
                <Heading size="heading4xl" as="h3">
                    {productPrice}
                </Heading>
            </div>
            <Button
                shape="round"
                rightIcon={
                    <Img
                        src="images/img_mdiheart.svg"
                        alt="Mdi:heart"
                        className="h-[24px] w-[24px]"
                    />
                }
                className="min-w-[116px] gap-2 font-quicksand"
            >
                {saveButtonText}
            </Button>
        </div>
    );
}
