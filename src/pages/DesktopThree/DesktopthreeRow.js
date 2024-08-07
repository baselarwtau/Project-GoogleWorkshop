import { Button, Text, Heading, Img } from "../../components"; // Corrected import path
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function DesktopThreeRow() {
    const navigate = useNavigate();
    return (
        <div className="flex h-[858px] items-start justify-center self-stretch bg-[url(/public/images/img_group_31.png)] bg-cover bg-no-repeat py-[78px] md:h-auto md:py-5">
            <div className="container-xs mb-[248px] flex justify-center px-4 md:px-5">
                <div className="relative h-[450px] w-full md:h-auto">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">

                        <div className="flex flex-col">
                            <div className="flex items-start justify-start">
                                <Heading as="h1" className="w-[72%] flex leading-[68px] !text-white-a700 md:w-full">
                                    Find the Perfect Gift with
                                    Intelligent Recommendations
                                </Heading>
                                <Img
                                    src="images/img_streamline_ai_t.svg"
                                    alt="Streamline AI"
                                    className="mr-[0px] mt-2.5 h-[44px] w-[44px] md:mr-0 relative rights"
                                />
                            </div>
                            <div className="relative mt-[-52px] h-[298px] content-center md:h-auto">
                                <Text size="textxl" as="p" className="w-[56%] leading-[29px] !text-white-a700">
                                    Get personalized gift suggestions with our intelligent recommendations. Simply
                                    answer a few questions,
                                    and let our AI-powered tool find the perfect gift tailored to your child's
                                    interests.
                                </Text>

                                <Button
                                    onClick={() => {
                                        navigate('/four');
                                    }}
                                    size="xl"
                                    shape="round"
                                    className="absolute bottom-[0%] left-0 mt-5 m-auto min-w-[210px] font-medium"
                                >
                                    Get Started
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
