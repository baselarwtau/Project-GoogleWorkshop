import ProductProfile from "../../components/ProductProfile";
import React, { Suspense } from "react";

const data = [
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" }
];

export default function DesktoptenRowOne() {
    return (
        <div className="flex justify-center self-stretch">
            <div className="container-xs flex justify-center md:px-5">
                <div className="grid w-full grid-cols-4 gap-[30px] gap-y-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <ProductProfile {...d} key={"desktopten" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
