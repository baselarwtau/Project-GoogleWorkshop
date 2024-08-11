import { Button, Heading, Img, TextArea, Text } from "../../components";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function DesktoponeRowFour() {
    const navigate = useNavigate();
    return (
        <div className="mt-[98px] flex justify-center self-stretch">
            <div className="container-xs flex justify-center px-14 md:px-5">
                <div className="flex w-[94%] flex-col items-center md:w-full">
                    <Heading size="heading7x1" as="h2">
                        What Parents are Saying
                    </Heading>
                    <div className="mr-[26px] mt-24 flex items-center gap-[18px] self-stretch md:mr-0 md:flex-col">
                        <div className="flex w-[14%] flex-col items-center gap-2 md:w-full">
                            <Img
                                src="images/img_ellipse_1.png"
                                alt="Image"
                                className="mx-5 h-[112px] w-[112px] rounded-[56px] object-cover md:mx-0"
                            />
                            <Heading size="heading3xl" as="h3" className="!font-quicksand">
                                Elizabeth R.
                            </Heading>
                        </div>
                        <div className="flex flex-1 rounded-[48px] border border-solid border-black-900 bg-white-a700 p-8 md:self-stretch sm:p-5">
                            <Text size="text2xl" as="p" className="mt-2 w-[96%] leading-[33px]">
                                I was amazed at how easy it was to find the perfect birthday gift for my daughter! The suggestions were spot-on, and she absolutely loved her new art set. This has become my go-to site for all our gift needs!
                            </Text>
                        </div>
                    </div>
                    <div className="ml-[18px] mr-8 mt-10 self-stretch md:mx-0">
                        <div className="flex items-center gap-[34px] md:flex-col">
                            <TextArea
                                size="xs"
                                variant="tarOutlineBlack900"
                                name="groupthirtyeigh"
                                placeholder="As a busy parent, finding time to shop for gifts can be stressful. This website made it so simple and stress-free. The curated options were perfect for my son's interests, and the smile on his face was priceless. Highly recommend!"
                                className="flex-1 rounded-[48px] !border-black-900 font-quicksand leading-[33px] text-black-900 md:self-stretch"
                            />
                            <div className="flex w-[10%] flex-col items-center gap-2 md:w-full">
                                <Img
                                    src="images/img_ellipse_2.png"
                                    alt="Image"
                                    className="h-[112px] w-full rounded-[56px] object-cover md:h-auto"
                                />
                                <Heading size="heading3xl" as="h4" className="!font-quicksand">
                                    David L.
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <Button  onClick={()=>{
                        navigate('/login');
                    }}  color="black_900" size="5xl" shape="round" className="mt-20 min-w-[332px] font-semibold">
                        Try Gift Flow Today
                    </Button>
                </div>
            </div>
        </div>
    );
}
