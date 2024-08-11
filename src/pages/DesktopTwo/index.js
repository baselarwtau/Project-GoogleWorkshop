import React, {Suspense, useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import {Button, Text} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductProfile from "../../components/ProductProfile";
import DesktoptwoRowOne from "./DesktoptwoRowOne";

import productsData from '../../assets/products.json';



export default function DesktopTwoPage() {

    const [productsToShow, setProductsToShow] = useState();
    const [filteredProducts, setCatFilter] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isFiltering, setfiltring] = useState(false);

    useEffect(() => {
        const cats = Array.from(
            new Set(
                productsData?.slice(0, productsToShow)
                    .flatMap(product => product?.category || [])
            )
        ).map(val => ({ label: val, value: val }));
        console.log(cats);
        setCategories([{ label: 'All', value: '' }, ...cats]);
    }, [productsToShow]);

    useEffect(() => {
        setProductsToShow(6);
    }, []);

    const findProductsByCategory = (searchCategory) => {
        const data = (productsData?.slice(0, productsToShow));
        return data.filter(product => product.category.includes(searchCategory));
    };

    const filterProductsByPrice = (priceCategory) => {
        const dataProducts = (productsData?.slice(0, productsToShow));
        const pro = [];
        switch (priceCategory) {
            case '50':
                for (let i = 0; i < dataProducts?.length; i++) {
                    const price = Number(dataProducts[i]?.price);
                    if (typeof price === 'number' && price < 50) {
                        pro.push(dataProducts[i]);
                    }
                }
                return pro;
            case '100':
                for (let i = 0; i < dataProducts?.length; i++) {
                    const price = Number(dataProducts[i]?.price);
                    if (typeof price === 'number' && price > 50 && price < 100) {
                        pro.push(dataProducts[i]);
                    }
                }
                return pro;
            case '150':
                for (let i = 0; i < dataProducts?.length; i++) {
                    const price = Number(dataProducts[i]?.price);
                    if (typeof price === 'number' && price > 100 && price < 150) {
                        pro.push(dataProducts[i]);
                    }
                }
                return pro;
            case '151':
                for (let i = 0; i < dataProducts?.length; i++) {
                    const price = Number(dataProducts[i]?.price);
                    if (typeof price === 'number' && price > 150) {
                        pro.push(dataProducts[i]);
                    }
                }
                return pro;
            default:
                return [];
        }
    };

    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow" />
            <div className="flex w-full flex-col items-center bg-white-a700">

                <div className="mt-10 flex flex-col items-center gap-[46px] self-stretch">
                    <div className="relative h-[534px] self-stretch">
                        <DesktoptwoRowOne
                            cats={categories}
                            onFilterCat={(e) => {
                                setfiltring(true)
                                const cat = e?.value;
                                if (!cat) {
                                    setCatFilter([]);
                                    setfiltring(false)
                                    return;
                                }
                                if (cat?.length < 1) {
                                    setfiltring(false)
                                    setCatFilter([]);
                                    return;
                                }
                                const products = findProductsByCategory(cat);
                                console.log(`---------------OPS-`);
                                console.log(products);
                                setfiltring(true)
                                setCatFilter(products);
                            }}
                            onFilterPrice={(e) => {
                                const price = e?.value;
console.log(e);
                                if (!price) {

                                    setCatFilter([]);
                                    setfiltring(false)
                                    return;
                                }
                                if (price?.length < 1) {
                                    setCatFilter([]);
                                    setfiltring(false)
                                    return;
                                }
                                const products = filterProductsByPrice(price);
                                setfiltring(true)
                                setCatFilter(products);
                            }}
                            onFilterByName={(e) => {
                                const term = e?.target?.value;
                                if (!term) {
                                    setCatFilter([]);
                                    setfiltring(false)
                                    return;
                                }
                                if (term?.length < 1) {
                                    setCatFilter([]);
                                    setfiltring(false)
                                    return;
                                }
                                const filteredProducts = (productsData?.slice(0, productsToShow)).filter(product =>
                                    product.name.toLowerCase().includes(term)
                                );

                                setfiltring(true)
                                setCatFilter(filteredProducts);
                            }}
                        />
                        <Text
                            size="text-xl"
                            as="p"
                            className="absolute bottom-[28%] left-[2%] m-auto w-[48%] leading-[29px] !text-white-a700"
                        >
                            Discover the ideal gift effortlessly! Our curated collection caters to every child’s interests and
                            preferences. Whether it’s educational toys, creative kits, or pure fun, find the perfect match with
                            our easy-to-use search. Start exploring now and make gift-giving a joy.
                        </Text>
                    </div>
                    <div className="container-xs md:px-5">
                        <div className="grid grid-cols-4 justify-center gap-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {
                                    !isFiltering &&
                                    <>
                                        {productsData?.slice(0, productsToShow).map((d, index) => (
                                            <ProductProfile productName={d.name} productPrice={d.price} productImage={d.image} saveButtonText={'save'} {...d} key={"desktoptwo" + index} />
                                        ))}
                                    </>
                                }
                                {
                                    isFiltering &&
                                    <>
                                        {filteredProducts?.map((d, index) => (
                                            <ProductProfile productName={d.name} productPrice={d.price} productImage={d.image} saveButtonText={'save'} {...d} key={"desktoptwo" + index} />
                                        ))}
                                    </>
                                }
                            </Suspense>

                        </div>
                    </div>
                    {!isFiltering && <>
                        {
                            productsToShow < productsData?.length &&
                            <Button size="xl" shape="round" className="min-w-[384px] font-medium"
                                    onPress={() => {
                                        setProductsToShow(productsToShow + 6)
                                    }}
                            >
                                Load more products
                            </Button>
                        }
                    </>}
                </div>

                <Footer className="mt-[30px] self-stretch" />
            </div>
        </>
    );
}
