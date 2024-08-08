import { Button, Text, Heading, Img } from "../../components";
import React from "react";

export default function DesktoptwentytwoRow() {
    return (
        <div className="flex justify-center self-stretch">
            <div className="container-xs flex justify-center px-2 md:px-5">
                <div className="flex w-full flex-col items-center">
                    <Img
                        src="images/img_ellipse_6_330x330.png"
                        alt="Image"
                        className="relative z-[2] h-[330px] w-[330px] rounded-[164px] object-cover"
                    />
                    <div className="rounded-[66px] sm:gap-[68px] md:gap-[102px] p-[50px] gap-[136px] mt-[-232px] relative flex flex-col items-start self-stretch bg-amber-200 md:p-5">

                        <div className="flex gap-[26px] rounded-[14px] bg-black-900 p-3.5">
                            <Text size="textxl" as="p" className="!font-normal !text-white-a700">
                                Copy Invitation Link
                            </Text>
                            <Img
                                src="images/img_Copy.svg"
                                alt="Tabler copy"
                                className="h-[32px] w-[32px]"
                            />
                        </div>
                        <div className="mx-[118px] mb-2 flex flex-col items-center gap-[50px] self-stretch md:mx-0">
                            <div className="ml-9 mr-[38px] self-stretch md:mx-0">
                                <div className="flex flex-col items-center">
                                    <Text size="text6xl" as="p" className="!font-cheesesauce">
                                        You're invited!
                                    </Text>
                                    <div className="flex flex-col items-center self-stretch">
                                        <Text size="text3xl" as="p" className="relative z-[1] !font-cheesesauce">
                                            to
                                        </Text>
                                        <Text size="text7xl" as="p" className="relative mt-[8px] !font-cheesesauce">
                                            • Mike's Birthday Party
                                        </Text>
                                    </div>
                                    <Heading size="heading10xl" as="h1" className="mt-3.5">
                                        Sunday, 11/08/2024 at 12:30!
                                    </Heading>
                                    <Heading size="heading6xl" as="h2" className="mt-[26px]">
                                        Location: Downtown St.
                                    </Heading>
                                </div>
                            </div>
                            <Text size="text3xl" as="p">
                                Come rejoice, dance, and surprise Mike with gifts he truly loves!
                            </Text>
                            <Button color="white_A700" size="xl" shape="round" className="min-w-[310px] font-quicksand font-bold">
                                Add to Google Calendar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
