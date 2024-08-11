import React from "react";
import { Button, Img, Heading } from "./index";

export default function ProductCard({
                                        productImage = "images/giftmatch.png",
                                        productName = "Green Dinosaur Fluffy Toy - Collectible",
                                        productPrice = "$12.99",
                                        saveButton = "Saved",
                                        isChildGifts= false,
                                        ToggleLIke,
                                        isLiked,
                                        isSuggestion= false,



                                        ...props
                                    }) {






    return (
        <div {...props} className={`flex flex-col w-full gap-4 bg-white-a700 shadow-xs rounded-[30px] ${props.className}`}>
            <Img
                src={productImage? productImage : "images/giftmatch.png"}
                alt="Product Image"
                className="h-[236px] w-full rounded-[30px] object-cover"
            />
            <div className="mx-4 mb-4 flex flex-col items-start gap-1 self-stretch">
                <Heading size="heading2xl" as="h4" className="w-full leading-7">
                    {productName}
                </Heading>
                <Heading size="heading4xl" as="h3">
                    {productPrice}
                </Heading>
                <Button
                    onClick={()=>{
                        ToggleLIke();
                    }}
                    shape="round"
                    rightIcon={
                      isChildGifts? <Img
                          src={isLiked? "images/red-heart-icon.svg" :  "images/ph_heart-bold.svg"}
                          alt="Mdi:heart"
                          className="h-[24px] w-[24px]"
                      /> :  <Img
                            src="images/delete.svg"
                            alt="Mdi:heart"
                            className="h-[24px] w-[24px]"
                        />
                    }
                    className="min-w-[116px] gap-2 self-end font-quicksand"
                >
                    {saveButton}
                </Button>
            </div>
        </div>
    );
}
