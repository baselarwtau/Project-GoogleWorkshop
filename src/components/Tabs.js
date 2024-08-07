import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Form from './Form';
import 'react-tabs/style/react-tabs.css'; // Import default styles for basic styling
import '../styles/CustomTabs.css';
import ChildrenBanner from "./ChildrenBanner";
import ProductCard from "./ProductCard";
import ProductProfile from "./ProductProfile";
import SearchBar from "./SearchBar";
import {Heading} from "./Heading";
import {Text} from "./Text"; // Import custom styles


const CustomTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Tabs selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
            <TabList className=" border  border-solid border-black-900 flex">
                <Tab className="tab" selectedClassName="selected-tab">About</Tab>
                <Tab className="tab" selectedClassName="selected-tab">Gift List 31</Tab>
                <Tab className="tab" selectedClassName="selected-tab">Suggestions 💡</Tab>
                <Tab className="tab" selectedClassName="selected-tab">Child will like</Tab>
            </TabList>

            <TabPanel>

                <ChildrenBanner />

                <Form />
            </TabPanel>
            <TabPanel>
                <SearchBar  />

                <div className="grid w-full grid-cols-4 gap-[30px] gap-y-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">

                    <div className="p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>

                </div>

            </TabPanel>
            <TabPanel>
                <SearchBar isDeggestion={true} />

                <div className="grid w-full grid-cols-4 gap-[30px] gap-y-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">

                    <div className="p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>
                    <div className=" p-6 rounded "> <ProductCard/></div>

                </div>
            </TabPanel>
            <TabPanel>
                <div className="flex w-[70%] flex-col items-starty gap-3 self-center md:w-full md:self-auto m-auto mt-10">
                    <Text size="textxl" as="p" className="w-full leading-[29px] font-quicksand">
                        Mike is an adventurous 14-year-old who loves outdoor activities and exploring new things. He
                        enjoys playing strategy games, watching action-packed movies, and reading fantasy books. His
                        weekends are filled with biking, building forts, and embarking on imaginative quests.
                    </Text>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default CustomTabs;
