import React, {Suspense, useCallback, useEffect, useMemo, useState} from "react";
import {Helmet} from "react-helmet";
import {Button, Text, Img, Heading, SelectBox,} from "../../components";
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
import '../../styles/font.css';


const data = [
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
    {productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved"},
];

const dropDownOptions = [
    {label: "Select", value: ""},
    {value: "0-50", label: "Less then $50"},
    {value: "51-100", label: "Between $50 and $100"},
    {value: "101-150", label: "Between $100 and $150"},

];



export default function DesktopTwentyTwoPage() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const invite = urlParams.get('invite');
    const [invitation, setInvitation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [summary, setSummary] = useState('The Summary for child will like.');

    const [selectedPriceRange, setSelectedPriceRange] = useState();
    const [filteredList, setFilteredList] = useState([]);

    const handlePriceRangeChange = (event) => {

        setSelectedPriceRange(event.value);
    };


    useEffect(() => {
        if (invitation && invitation?.selectedChildId?.gifts) {
            const filtered = invitation?.selectedChildId?.gifts.filter((item) => {
                const price = parseFloat(item.price.replace("$", ""));

                if (isNaN(price)) {
                    return false; // Skip items with invalid price
                }

                switch (selectedPriceRange) {
                    case "0-50":
                        return price >= 0 && price <= 50;
                    case "51-100":
                        return price > 50 && price <= 100;
                    case "101-200":
                        return price > 100 && price <= 200;
                    case "201-500":
                        return price > 200 && price <= 500;
                    case "500+":
                        return price > 500;
                    default:
                        return true;
                }
            });
            setFilteredList(filtered);
        }
    }, [selectedPriceRange, invitation]);


    const extractAnswers = useCallback((data) => {
        const answers = {};

        if (data) {
            data.questions.forEach((question, index) => {
                const questionKey = `question-${index + 1}`;
                answers[questionKey] = question.answer;
            });
        }

        return answers;
    }, []);


    const axiosOptions = useMemo(() => ({
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    }), []);


    const answers = useMemo(() => extractAnswers(invitation?.selectedChildId), [invitation?.selectedChildId, extractAnswers]);



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


                   const summary = await axios.post(
                       'http://localhost:4001/summary',
                       answers,
                       axiosOptions
                   );


                   setSummary(summary.data.summary);

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
                                    {summary}
                                </Text>
                                {/*  <Heading size="heading6xl" as="h2" className="mx-auto mb-0 mt-16">
                                    Mike's Gift List
                                </Heading>*/}
                                <div className="relative ml-[22px] mr-[62px] content-end md:mx-0 md:h-auto">
                                    <div className="flex h-max flex-1 items-center md:relative md:flex-col">
                                        <SelectBox
                                            shape="round"
                                            indicator={
                                                <Img src="images/img_ouitokenrange.svg" alt="Oui: token-range"
                                                     className="h-[66px] w-[26px]"/>
                                            }
                                            name="price"
                                            placeholder="Price Range"
                                            options={dropDownOptions}
                                            onChange={handlePriceRangeChange}
                                            className="w-[40%] pr-4 sm:w-full rounded-[22px]"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 md:grid-cols-4 gap-[30px] px-1.5">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {filteredList.map((product, index) => (
                                            <ProductProfile
                                                key={"desktop" + index}
                                                productPrice={product.price}
                                                productName={product.name}
                                                productImage={product.image}
                                                productId={product.id}
                                                isInvitation={true}
                                            />
                                        ))}
                                        {/* Adding empty divs to fill in the remaining grid spots if there are less than 4 products */}
                                        {Array.from({length: 4 - (invitation?.selectedChildId?.gifts.length % 4)}).map((_, index) => (
                                            <div key={"placeholder" + index} className="invisible"></div>
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
