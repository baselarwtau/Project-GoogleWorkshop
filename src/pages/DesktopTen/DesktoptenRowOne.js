import ProductProfile from "../../components/ProductProfile";
import React, {Suspense, useEffect, useMemo, useState} from "react";
import axios from "axios";
import productsData from '../../assets/products.json';
import ProductCard from "../../components/ProductCard";

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

export default function DesktoptenRowOne({ansers = {}}) {


    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);


    const axiosOptions = useMemo(() => ({
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    }), []);
    const answers = ansers;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:4001/suggest-products',
                    answers,
                    axiosOptions
                );

                // Extract and clean the suggested product IDs
                const suggestedProductIds = response.data.suggestedProductIds
                    .split(',')
                    .map((id) => id.trim());

                // Filter products based on the suggested IDs
                const filteredProducts = productsData.filter((product) =>
                    suggestedProductIds.includes(product.id.toString())
                );

                setProducts(filteredProducts); // Update state with filtered products
            } catch (error) {
                console.error('Error:', error);
                setSnackbarMessage(
                    'An error occurred while fetching product suggestions.'
                );
                setSnackbarOpen(true); // Open snackbar with error message
            } finally {
                setIsLoading(false); // Set loading state to false
            }
        };

        fetchProducts();
    }, []); // Empty dependency array ensures this effect runs only once on mount



    console.log(products);

    return (
        <div className="flex justify-center self-stretch">
            <div className="container-xs flex justify-center md:px-5">
                <div className="grid w-full grid-cols-4 gap-[30px] gap-y-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {products.map((product, index) => (
                            <ProductCard
                                productPrice={product.price}
                                productName={product.name}
                                productImage={product.image}
                                productId={product.id}

                                ToggleLIke = {async ()=>{
                                    console.log(product)
                                 //   await updateChildData(product, selectedChildId.id);
                                }}

                            />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
