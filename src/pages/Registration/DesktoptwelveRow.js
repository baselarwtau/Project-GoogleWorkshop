import { Button, Img, Text, Input, Heading } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function DesktoptwelveRow() {
    return (
        <div className="mt-2 flex justify-center">
            <div className="container-xs flex justify-center px-14 md:px-5">
                <Tabs
                    className="flex w-[66%] flex-col gap-[50px] rounded-[30px] bg-white-a700 md:w-full"
                    selectedTabClassName="!text-white-a700 border-black-900 border border-solid bg-black-900 rounded-bl-[0px] rounded-br-[0px] rounded-tl-[0px] rounded-tr-[30px]"
                    selectedTabPanelClassName="mb-5 mx-[98px] md:mx-0 !relative tab-panel--selected"
                >
                    <TabList className="flex flex-wrap justify-center gap-8">
                        <Tab className="px-[138px] py-[26px] font-casaygon text-[21px] font-normal text-black-900 md:px-5 sm:p-5">
                            Sign in
                        </Tab>
                        <Tab className="px-[138px] py-[26px] font-casaygon text-[21px] font-normal text-black-900 md:px-5 sm:p-5">
                            New account
                        </Tab>
                    </TabList>
                    {[0, 1].map((_, index) => (
                        <TabPanel key={`tab-panel-${index}`} className="absolute mx-[98px] mb-5 items-center md:mx-0">
                            <div className="w-full">
                                <div className="flex flex-col items-center gap-[70px] md:gap-[52px] sm:gap-[35px]">
                                    <Heading size="heading7xl" as="h1">
                                        {index === 0 ? "Sign in" : "Create a new account"}
                                    </Heading>
                                    <div className="flex flex-col items-center self-stretch">
                                        <div className="flex flex-col items-start gap-1.5 self-stretch">
                                            <Text size="textxl" as="p">
                                                Email
                                            </Text>
                                            <Input
                                                size="sm"
                                                name="email"
                                                className="self-stretch rounded-[14px] border border-solid border-black-900"
                                            />
                                        </div>
                                        <div className="mt-4 flex flex-col items-start gap-1.5 self-stretch">
                                            <Text size="textxl" as="p">
                                                Password
                                            </Text>
                                            <Input
                                                size="sm"
                                                name="password"
                                                className="self-stretch rounded-[14px] border border-solid border-black-900"
                                            />
                                        </div>
                                        <Button color="black_900" size="lg" shape="round" className="mt-[60px] min-w-[224px]">
                                            {index === 0 ? "Sign in" : "Sign up"}
                                        </Button>
                                        <Text size="textxl" as="p" className="mt-[22px] underline">
                                            {index === 0 ? "Create a new account" : "I already have an account"}
                                        </Text>
                                    </div>
                                    {index === 1 && (
                                        <div className="flex w-[44%] items-center justify-between gap-5 md:w-full">
                                            <Text size="textxs" as="p" className="!font-generalsans !text-gray-900">
                                                Or continue with:
                                            </Text>
                                            <div className="flex gap-4">
                                                <Button color="gray_400" size="xs" variant="outline" className="w-[36px] rounded">
                                                    <Img src="images/img_ic_baseline_apple.svg" />
                                                </Button>
                                                <Button color="gray_400" size="xs" variant="outline" className="w-[36px] rounded">
                                                    <Img src="images/img_gg_google.svg" />
                                                </Button>
                                                <Button color="gray_400" size="xs" variant="outline" className="w-[36px] rounded">
                                                    <Img src="images/img_ic_baseline_facebook.svg" />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
