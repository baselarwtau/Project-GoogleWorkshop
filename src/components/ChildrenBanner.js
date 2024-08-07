import React from 'react';
import {Img} from "./Img";
import {Heading} from "./Heading";
import {Text} from "./Text";


const ChildrenBanner = props => {
    return (
        <div className="rounded-[30px] border border-solid border-black-900 bg-white-a700 p-6 sm:p-5">
            <div className="flex items-center md:flex-col">
                <div className="mb-2.5 flex-1 md:self-stretch">
                    <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-5">
                            <Img
                                src="images/img_ellipse_4_138x138.png"
                                alt="Image"
                                className="h-[90px] w-[90px] rounded-[44px] object-cover"
                            />
                            <Heading as="h3" className="self-end">
                                Mike
                            </Heading>
                        </div>
                        <div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center md:flex-col">
                                    <div className="flex items-start justify-center gap-[22px] md:w-full">
                                        <Img
                                            src="images/ion_calendar.svg"
                                            alt="Ion"
                                            className="h-[48px] w-[48px]"
                                        />
                                        <Heading size="heading2xl" as="h4" className="self-center leading-7">
                                            14 years old
                                            <br/>
                                            <span className="text-[17px]">Born 04/10/2010</span>
                                        </Heading>
                                    </div>
                                    <div
                                        className="flex flex-1 items-start justify-center gap-[17px] px-7 md:self-stretch sm:flex-col sm:px-5">
                                        <Img
                                            src="images/img_ic_round-interests.svg"
                                            alt="Icround"
                                            className="h-[54px] w-[54px] sm:w-full"
                                        />
                                        <Text
                                            size="textxs"
                                            as="p"
                                            className="w-[74%] self-end leading-[22px] sm:w-full sm:self-auto"
                                        >
                                            Outdoor activities, Strategy games, Action movies, Fantasy books
                                        </Text>
                                    </div>
                                </div>
                                <div className="flex items-start justify-center sm:flex-col">
                                    <div className="flex items-center gap-[21px]">
                                        <Img
                                            src="images/img_icons8_gender.svg"
                                            alt="Icons & gender"
                                            className="h-[52px] w-[52px]"
                                        />
                                        <Heading size="heading2xl" as="h5">
                                            Male
                                        </Heading>
                                    </div>
                                    <div
                                        className="flex flex-1 items-start gap-[19px] self-center pl-[72px] pr-14 md:px-5 sm:self-stretch">
                                        <Img
                                            src="images/img_icon-park-solid_sport.svg"
                                            alt="Icon parks solid"
                                            className="h-[48px] w-[48px]"
                                        />
                                        <Text
                                            size="textxs"
                                            as="p"
                                            className="mt-1 w-[54%] self-end leading-[22px]"
                                        >
                                            Biking, Building forts, Imaginative quests
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[40%] flex-col items-start gap-3 self-end md:w-full md:self-auto">
                    <Heading size="heading2xl" as="h6">
                        About
                    </Heading>
                    <Text size="textxl" as="p" className="w-full leading-[29px]">
                        Mike is an adventurous 14-year-old who loves outdoor activities and exploring new things. He
                        enjoys playing strategy games, watching action-packed movies, and reading fantasy books. His
                        weekends are filled with biking, building forts, and embarking on imaginative quests.
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default ChildrenBanner;