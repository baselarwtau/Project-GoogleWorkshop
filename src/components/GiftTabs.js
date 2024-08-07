import { Text, Button, Img } from "./index";
import {Heading } from './Heading';
import React from "react";

const GiftTabs = ({ title1 = 'About', title2 = 'Gift List 31', title3 = 'Suggestions', title4 = 'Child will like'}) => {
    return (

        <div className="flex flex-col items-center self-stretch">
            <div style={{}} className="w-full mt-[92px] ">
                <div className="flex justify-center ">
                        <Button
                            color="white_A700"
                            size="6xl"
                            shape="square"
                            className="min-w-[360px] border border-solid border-black-900 font-bold"
                        >
                            {title1}
                        </Button>

                    <div className="relative ml-[-2px] flex flex-1 md:ml-0 md:flex-col md:self-stretch md:px-5">
                        <Button
                            color="white_A700"
                            size="6xl"
                            shape="square"
                            className="w-full border border-solid border-black-900 font-bold"
                        >
                            {title2}
                        </Button>

                    </div>
                    <div
                        className="relative ml-[-2px] flex flex-1 w-full items-center justify-center gap-[11px] border border-solid border-black-900 bg-white-a700 p-[22px] md:ml-0 sm:p-5">
                        <Heading size="headingmd" as="h2" className="self-end">
                            {title3}
                        </Heading>
                        <Img
                            src="images/streamline_ai-technology-spark-solid.svg"
                            alt="Streamlineait"
                            className="h-[22px] w-[22px]"
                        />
                    </div>
                    <div className="relative  flex flex-1 md:ml-0 md:flex-col md:self-stretch md:px-5">
                        <Button
                            color="black_900"
                            size="6xl"
                            shape="square"
                            className="relative  w-full mx-[0px] border border-solid border-black-900 font-bold md:ml-0"
                            style={{marginRight: 0}}
                        >
                            {title4}
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GiftTabs;