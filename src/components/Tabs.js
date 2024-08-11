import React, {useEffect, useRef, useState, useCallback, useMemo} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Form from './Form';
import 'react-tabs/style/react-tabs.css'; // Import default styles for basic styling
import '../styles/CustomTabs.css';
import ChildrenBanner from './ChildrenBanner';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import {Text} from './Text';
import {Button} from "./Button";
import {useChild} from '../context/ChildContext'; // Import custom styles
import productsData from '../assets/products.json';
import axios from 'axios';
import _ from 'lodash';
import {useNavigate, useParams} from "react-router-dom";

const CustomTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [childCroducts, setChildProducts] = useState([]);
    const [categoryFilter, setCatFilter] = useState([]);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [summary, setSummary] = useState('The Summary for child will like.');
    const [filtring, setfiltring] = useState(false);
    const navigate = useNavigate();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const added = urlParams.get('giftadded');

    console.log('gift', added);

    useEffect(() => {
        setSelectedIndex(1);
    }, [added]);


    const {childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId} = useChild();

    const [children, setChildren] = useState(
        childrenData.map((child) => ({
            ...child,
            gifts: child.gifts || [],
            friends: child.friends || [],
            invitations: child.invitations || [],
            events: child.events || [],
        }))
    );

    const updateChildData = async (product, childId) => {


        // Find the child data by ID
        const child = children.find(item => item.id === childId);


        if (child) {

            // Check if productId exists in the gifts array
            const index = child?.gifts?.indexOf(product);
            console.log('exist or not', index);

            if (index === -1) {
                product.isLiked = true;
                // If productId does not exist, add it
                child.gifts.push(product);

            } else {
                // product.isLiked = false;
                // If productId exists, remove it
                child.gifts.splice(index, 1);
            }

            await updateChild(childId, child);
            selectChild(child);

            // Log the updated data
           // console.log(child);
        } else {
            console.log(`Child with ID ${childId} not found.`);
        }
    };




    //  console.log('children', children);
    // Memoize the extractAnswers function
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

    console.log(selectedChildId);

    // Memoize answers calculation
    const answers = useMemo(() => extractAnswers(selectedChildId), [selectedChildId, extractAnswers]);
    // console.log('Answer', answers);
    // Debounced handleFinish function
    const debouncedHandleFinish = useRef(
        _.debounce(async (answers) => {
            setIsLoading(true); // Set loading state to true
            setIsFinished(true);

            console.log('Answers are here for Questions', answers);

            try {
                const response = await axios.post(
                    'http://localhost:4001/suggest-products',
                    answers,
                    axiosOptions
                );

                const summary = await axios.post(
                    'http://localhost:4001/summary',
                    answers,
                    axiosOptions
                );

             //   console.log( summary.data.summary);


                setSummary(summary.data.summary);

                // Extract and clean the suggested product IDs
                const suggestedProductIds = response.data.suggestedProductIds
                    .split(',')
                    .map((id) => id.trim());

                // Filter products based on the suggested IDs
                const filteredProducts = productsData.filter((product) =>
                    suggestedProductIds.includes(product.id.toString())
                );

              //  console.log('A.I Products', filteredProducts);

                const cats = [];
                for (let i = 0; i < filteredProducts?.length; i++) {
                    for (let z = 0; z < filteredProducts[i]?.category?.length; i++) {
                        cats.push(filteredProducts[i]?.category[z]);
                    }
                }
                setCategories(cats);

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
        }, 500) // Debounce delay in milliseconds
    ).current;

    // useEffect to call handleFinish when answers changes
    useEffect(() => {
        if (answers && Object.keys(answers).length > 0) {
            debouncedHandleFinish(answers);
        }
        getChildProduct();
        // Cleanup to cancel debounce on component unmount or before rerunning
        return () => {
            debouncedHandleFinish.cancel();
        };
    }, [answers, selectedChildId]); // Dependency array includes 'answers'

    console.log('products', products);

    const getChildProduct = () => {

        const childgifts = selectedChildId?.gifts || [];

        // Filter products based on the suggested IDs
        //  console.log('childGifts', childgifts);
        /*   const childProducts = productsData.filter((product) =>
               childgifts.includes(product.id)
           );*/

        const cats = [];
        for (let i = 0; i < childgifts?.length; i++) {
            for (let z = 0; z < childgifts[i]?.category?.length; i++) {
                cats.push(childgifts[i]?.category[z]);
            }
        }
        setCategories(cats);

        setChildProducts(childgifts);

        console.log('childPproduct gotted', childgifts);
    }

    // Memoize onSelect handler
    const handleTabSelect = useCallback((index) => {
        setfiltring(false);
        setSelectedIndex(index);
        if (index === 1) {
            const cats = [];
            for (let i = 0; i < childCroducts?.length; i++) {
                for (let z = 0; z < childCroducts[i]?.category?.length; i++) {
                    cats.push(childCroducts[i]?.category[z]);
                }
            }
            setCategories(cats);
            return;
        }
        if (index === 2) {
            const cats = [];
            for (let i = 0; i < products?.length; i++) {
                for (let z = 0; z < products[i]?.category?.length; i++) {
                    cats.push(products[i]?.category[z]);
                }
            }
            console.log('catoooooooo')
            setCategories(cats);
        }
        console.log('selected index', index);
    }, []);

    const findProductsByCategory = (searchCategory, data) => {
        return data.filter(product => product.category.includes(searchCategory));
    };

    const filterProductsByPrice = (priceCategory, dataProducts) => {
        console.log(priceCategory);
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
                console.log('Reacehd the case');
                for (let i = 0; i < dataProducts?.length; i++) {
                    const price = Number(dataProducts[i]?.price);
                    console.log({
                        price,
                        isValid: price > 50 && price < 100
                    })
                    if (typeof price === 'number' && price > 50 && price < 100) {
                        pro.push(dataProducts[i]);
                    }
                }
                console.log(pro)
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



    /* const filterProductsByPrice = (priceCategory, dataProducts) => {
         switch (priceCategory) {
             case '50':
                 return dataProducts
                     .filter(product => parseFloat(product.price) < 50)
                     .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
             case '100':
                 return dataProducts.filter(product => parseFloat(product.price) >= 50 && parseFloat(product.price) <= 100);
             case '150':
                 return dataProducts.filter(product => parseFloat(product.price) >= 100 && parseFloat(product.price) <= 150);
             case '151':
                 return dataProducts.filter(product => parseFloat(product.price) >= 150);
             default:
                 return dataProducts;
         }
     };*/


    return (
        <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
            <TabList className=" border  border-solid border-black-900 flex">
                <Tab className="tab" selectedClassName="selected-tab">About</Tab>
                <Tab className="tab"  selectedClassName="selected-tab">Gift List {childCroducts?.length} </Tab>
                <Tab className="tab" selectedClassName="selected-tab">Suggestions 💡</Tab>
                <Tab className="tab" selectedClassName="selected-tab">Child will like</Tab>
            </TabList>

            <TabPanel>
                <ChildrenBanner/>
                <Form/>
            </TabPanel>
            <TabPanel>
                <SearchBar
                    categories={categories}
                    onFilterCategory={(e) => {
                        setfiltring(true)
                        const cat = e?.target?.value;
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
                        const products = findProductsByCategory(cat, childCroducts);
                        setfiltring(true)
                        setCatFilter(products);
                    }}
                    onFilterPrice={(e) => {

                        const price = e?.target?.value;

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
                        const products = filterProductsByPrice(price, childCroducts);
                        setfiltring(true)
                        console.log('filteredProducts length is', products.length);
                        setCatFilter(products);
                    }}
                    onFilter={(e) => {
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
                        const filteredProducts = childCroducts.filter(product =>
                            product.name.toLowerCase().includes(term)
                        );

                        setfiltring(true)
                        setCatFilter(filteredProducts);
                    }}
                    child={selectedChildId}
                />

                {childCroducts.length > 0 ? < div
                        className="grid w-full grid-cols-4 gap-[30px] gap-y-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">


                        {filtring?  (categoryFilter).map((product) => (
                            <div key={product.id} className="p-6 rounded container">
                                <ProductCard
                                    productPrice={product.price}
                                    productName={product.name}
                                    productImage={product.image}
                                    productId={product.id}

                                    saveButton={'delete'}



                                    ToggleLIke={async () => {
                                        console.log(product)
                                        await updateChildData(product, selectedChildId.id);
                                    }}

                                />
                            </div>
                        )) :  null}

                        {!filtring?  (childCroducts).map((product) => (
                            <div key={product.id} className="p-6 rounded container">
                                <ProductCard
                                    productPrice={product.price}
                                    productName={product.name}
                                    productImage={product.image}
                                    productId={product.id}

                                    saveButton={'delete'}

                                    ToggleLIke={async () => {
                                        console.log(product)
                                        await updateChildData(product, selectedChildId.id);
                                    }}

                                />
                            </div>
                        )) :  null}

                    </div> :
                    <div className="mt-16 mb-16">
                        <div
                            className="ml-[300px] mr-[298px] flex flex-col gap-[82px] md:mx-0 md:gap-[61px] sm:gap-[41px]">
                            <Text size="text5xl" as="p" className="text-center leading-[44px]">
                                <>
                                    Your child's gift list is empty.
                                    <br/>
                                    <br/>
                                    Start by browsing gift suggestions or add a gift manually.
                                </>
                            </Text>
                            <div className="mx-12 flex justify-center gap-[34px] md:mx-0">

                                <Button onClick={()=>{
                                            navigate('/addGifts');
                                }} size="2xl" shape="round" className="min-w-[228px] h-[66px] font-semibold">
                                    + Add Gift
                                </Button>


                                <Button onClick={()=>{
                                   setSelectedIndex(2);
                                }} size="2xl" shape="round" className="min-w-[352px] h-[66px] font-semibold">
                                    Browse Suggestions
                                </Button>

                            </div>
                        </div>


                    </div>


                }


            </TabPanel>
            <TabPanel>

                <SearchBar isDeggestion={true}
                           categories={categories}
                           onFilterCategory={(e) => {
                               const cat = e?.target?.value;
                               if (!cat) {
                                   setCatFilter([]);
                                   return;
                               }
                               if (cat?.length < 1) {
                                   setCatFilter([]);
                                   return;
                               }
                               const prodcts = findProductsByCategory(cat, products);
                               setCatFilter(prodcts);
                           }}
                           onFilterPrice={(e) => {
                               const price = e?.target?.value;
                               if (!price) {
                                   setCatFilter([]);
                                   return;
                               }
                               if (price?.length < 1) {
                                   setCatFilter([]);
                                   return;
                               }
                               const prodcts = filterProductsByPrice(price, products);
                               setCatFilter(prodcts);
                           }}
                />

                <div className="grid w-full grid-cols-4 gap-[30px] gap-y-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">
                    {(categoryFilter?.length > 0 ? categoryFilter : products).map((product) => {
                        const findProfuct = selectedChildId?.gifts?.indexOf(product);
                        if (findProfuct >= 0) {
                            product.isLiked = true;
                        }
                        return (
                            <div key={product.id} className="p-6 rounded">
                                <ProductCard
                                    productPrice={product.price}
                                    productName={product.name}
                                    productImage={product.image}
                                    productId={product.id}
                                    isChildGifts={true}
                                    isLiked={product.isLiked}
                                    isSuggestion={true}
                                    ToggleLIke={async () => {
                                        console.log(product.id)
                                        await updateChildData(product, selectedChildId.id);
                                    }}

                                />
                            </div>
                        )
                    })}
                </div>


            </TabPanel>
            <TabPanel>
                <div
                    className="flex w-[70%] flex-col items-starty gap-3 self-center md:w-full md:self-auto m-auto mt-10">
                    <Text size="textxl" as="p" className="w-full leading-[29px] font-quicksand">
                        {summary}
                    </Text>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default CustomTabs;
