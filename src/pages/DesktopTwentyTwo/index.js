import React, {Suspense, useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {Button, Text, Img, Heading} from "../../components";
import DesktoptwentytwoRow from "./DesktopTwentyTwoRow";
import ProductProfile2 from "../../components/ProductProfile2";
import Header from "../../components/Header";
import {useParams} from "react-router-dom";
import {doc, getFirestore, getDoc} from "firebase/firestore";
import InlineSpinner from "../../components/InlineSpinner";
import {useChild} from "../../context/ChildContext";
import axios from "axios";
import productsData from "../../assets/products.json";
import ProductProfile from "../../components/ProductProfile";


const data = [
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
];

export default function DesktopTwentyTwoPage() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const invite = urlParams.get('invite');
    const [invitation, setInvitation] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchInvite = async () => {
           try {
               setLoading(true);
               const db = getFirestore();
               const inviteRef = doc(db, 'invitations', invite);
               const inviteSnapshot = await getDoc(inviteRef);

               if (inviteSnapshot.exists()) {
                   const data = inviteSnapshot.data();
                   console.log(data?.selectedChildId?.gifts);
                   setInvitation(data);
               } else {
                   setInvitation(null);
                   console.log('No such document!');
               }
           } catch (e) {
                console.log(e);
           } finally {
               setLoading(false);
           }
        };

        fetchInvite();
    }, [invite]);

    if (invite) {
        return (
            <>
                <Helmet>
                    <title>GiftFlow's Application</title>
                </Helmet>
                <Header className="bg-white-a700 shadow-lg"/>
                <div
                    className="flex w-full flex-col items-center gap-[90px] bg-white-a700 py-[38px] md: gap-[67px] sm: gap-[45px] sm:py-5">
                    <div className="container-xs md:px-5">
                        <div
                            className="mb-1 flex flex-col items-center gap-[76px] self-stretch md:gap-[57px] sm:gap-[38px]">
                            {
                                loading ?
                                    <InlineSpinner /> :
                                    <DesktoptwentytwoRow
                                        invitation={invitation}
                                    />
                            }

                            <div className="container-xs flex flex-col gap-14 md:px-5 sm:gap-7">
                                <Text
                                    size="text3xl"
                                    as="p"
                                    className="relative px-[6.5%] flex-1 text-center leading-[43px] md:ml-0 md:self-stretch"
                                >
                                    {invitation?.description}
                                </Text>
                                {/*  <Heading size="heading6xl" as="h2" className="mx-auto mb-0 mt-16">
                                    Mike's Gift List
                                </Heading>*/}
                                <div className="relative ml-[22px] mr-[62px] content-end md:mx-0 md:h-auto">
                                    <div className="flex h-max flex-1 items-center md:relative md:flex-col">
                                        <Button
                                            color="white_A700"
                                            size="3xl"
                                            rightIcon={
                                                <Img
                                                    src="images/img_ouitokenrange.svg"
                                                    alt="Oui: token range"
                                                    className="h-[66px] w-[26px]"
                                                />
                                            }
                                            className="min-w-[222px] gap-[34px] self-end rounded-[18px] !text-black-900_7f shadow-md md:self-auto"
                                        >
                                            Price Range
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex gap-[30px] px-1.5 md:flex-col">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {invitation?.selectedChildId?.gifts.map((product, index) => (

                                            <ProductProfile
                                                key={"desktop" + index}
                                            productPrice={product.price}
                                        productName={product.name}
                                        productImage={product.image}
                                        productId={product.id}

                                    />
                                        ))}
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}
