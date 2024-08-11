import {Button, SelectBox, Img, Input, Heading} from "../../components";
import React from "react";

const dropDownOptions = [
    {label: "Select", value: ""},
    {value: "50", label: "Less then $50"},
    {value: "100", label: "Between $50 and $100"},
    {value: "150", label: "Between $100 and $150"},
    {value: "151", label: "$150+"},
];

export default function DesktoptwoRowOne(params) {

    return (
        <div
            className="absolute left-0 right-0 top-0 m-auto flex h-[496px] flex-1 items-start justify-center bg-[url(/public/images/img_group_280.png)] bg-cover bg-no-repeat py-[78px] md:h-auto md:py-5">
            <div className="container py-3.5 mb-[90px] flex justify-center px-4 md:px-5">
                <div className="flex w-full items-start justify-between gap-5 md:flex-col">
                    <Heading as="h1" className="w-[44%] leading-[68px] !text-white-a700 md:w-full">
                        Browse Our Curated Collection of Gifts
                    </Heading>
                    <div className="mt-[22px] flex w-[42%] flex-col items-start gap-4 self-end md:w-full md:self-auto">
                        <Input
                            shape="round"
                            name="search"
                            onChange={params?.onFilterByName}
                            placeholder="Search for a product..."
                            className="w-[100%]"
                        />
                        <div className="flex  self-stretch sm:flex-col">
                            <SelectBox
                                shape="round"
                                indicator={
                                    <Img src="images/img_ouitokenrange.svg" alt="Oui: token-range"
                                         className="h-[66px] w-[26px]"/>
                                }
                                name="price"
                                placeholder="Price Range"
                                options={dropDownOptions}
                                onChange={params?.onFilterPrice}
                                className="w-[40%] pr-4 sm:w-full rounded-[22px]"
                            />
                            <SelectBox
                                shape="round"
                                onChange={params?.onFilterCat}
                                indicator={
                                    <Img src="images/oui_token-range.svg" alt="Checkmark"
                                         className="h-[66px] w-[34px]"/>
                                }
                                name="checkmark"
                                placeholder="Category"
                                options={params?.cats}
                                className="w-[40%] pl-0 sm:w-full rounded-[22px]"
                            />
                        </div>
                        <Button size="xl" shape="round" className="min-w-[384px] font-medium">
                            Find the Perfect Gift
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
