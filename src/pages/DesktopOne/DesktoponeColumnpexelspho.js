import { Button, Text, Heading, Img } from "../../components";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function DesktoponeColumnpexelspho() {
    const navigate = useNavigate();
    return (
        <div className="mt-[120px] self-stretch">
         {/*
            <div className="flex items-center bg-amber-200_01 md:flex-col">
                <Img
                    src="images/img_pexels_photo_by.png"
                    alt="Pexelsphotoby"
                    className="h-[522px] w-[46%] object-contain md:w-full"
                />
                <div className="mb-3.5 flex-1 self-end px-14 md:self-stretch md:px-5 sm:self-auto">
                    <div className="flex flex-col">
                        <Heading as="h2" className="w-[80%] leading-[68px] md:w-full">
                            Personalized Gift Suggestions
                        </Heading>
                        <Text
                            size="textxl"
                            as="p"
                            className="w-[82%] leading-[29px] md:w-full relative"
                        >
                            When you sign up, we'll ask a few questions about your child's interests and personality.
                            Our advanced A.I. analyzes this information to recommend gifts that your child will love,
                            ensuring every present is a perfect match.
                        </Text>
                        <div className="relative h-[298px] content-end md:h-auto">
                            <div className="mx-auto mb-[104px] flex flex-1 gap-[21px]">
                                <Button
                                    onClick={() => {
                                        navigate('/login');
                                    }}
                                    color="black_900" shape="round" className="min-w-[184px] font-quicksand">
                                    Add your child
                                </Button>
                                <Button
                                    onClick={() => {
                                        navigate('/assest');
                                    }}
                                    color="black_900" shape="round" className="min-w-[162px] font-quicksand">
                                    Try AI Assist
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
*/}
            <div className="flex items-center justify-between gap-5 bg-amber-200_01 md:flex-col">
                <Img
                    src="images/img_pexels_photo_by.png"
                    alt="Pexelsphotoby"
                    className="h-[520px] w-[46%] object-contain md:w-full"
                />
                <div className="flex w-[48%] flex-col items-start md:w-full md:px-5">
                    <Heading as="h4" className="w-[86%] leading-[68px] md:w-full">
                        Personalized Gift Suggestions
                    </Heading>
                    <Text size="textxl" as="p" className="w-[82%] leading-[29px] md:w-full">
                        When you sign up, we'll ask a few questions about your child's interests and personality.
                        Our advanced A.I. analyzes this information to recommend gifts that your child will love,
                        ensuring every present is a perfect match.
                    </Text>
                    <div className="relative h-[100px] content-end md:h-auto">
                        <div className="mx-auto mb-[0px] flex flex-1 gap-[21px]">
                            <Button
                                onClick={() => {
                                    navigate('/login');
                                }}
                                color="black_900" shape="round" className="min-w-[184px] font-quicksand">
                                Add your child
                            </Button>
                            <Button
                                onClick={() => {
                                    navigate('/assest');
                                }}
                                color="black_900" shape="round" className="min-w-[162px] font-quicksand">
                                Try AI Assist
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-[1] flex items-start justify-center bg-white-a700 md:flex-col">
                <div className="mt-14 flex w-[42%] flex-col items-start md:w-full md:px-5">
                    <Heading as="h3" className="w-[88%] leading-[68px] md:w-full">
                        Easy Gift List Management
                    </Heading>
                    <Text size="textxl" as="p" className="w-[88%] leading-[29px] md:w-full">
                        Create and manage gift lists for each of your children. Edit, add, or remove items as you see
                        fit, keeping the list updated and relevant to your child's evolving interests.
                    </Text>
                    <Button
                        onClick={() => {
                            navigate('/login');
                        }}
                        color="black_900" shape="round" className="mt-[38px] min-w-[184px] font-quicksand">
                        + New Gift List
                    </Button>
                </div>
                <Img
                    src="images/img_pexels_photo_by_522x770.png"
                    alt="Pexelsphotoby"
                    className="h-[522px] w-[52%] self-center object-contain md:w-full"
                />
            </div>
            <div className="flex items-center justify-between gap-5 bg-amber-200_01 md:flex-col">
                <Img
                    src="images/img_pexels_photo_by_520x670.png"
                    alt="Pexelsphotoby"
                    className="h-[520px] w-[46%] object-contain md:w-full"
                />
                <div className="flex w-[48%] flex-col items-start md:w-full md:px-5">
                    <Heading as="h4" className="w-[86%] leading-[68px] md:w-full">
                        Share with Friends and Family
                    </Heading>
                    <Text size="textxl" as="p" className="w-[82%] leading-[29px] md:w-full">
                        Once your list is complete, share it effortlessly with friends, family, and even your child's
                        classmates through a unique link. This makes it easy for others to see what gifts your child
                        would love.
                    </Text>
                    <Button
                        onClick={() => {
                            navigate('/login');
                        }}
                        color="black_900" shape="round" className="mt-[38px] min-w-[126px] font-quicksand">
                        Try now
                    </Button>
                </div>
            </div>
        </div>
    );
}
