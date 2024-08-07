import { Button, Img, Heading } from "../../components";
import UserProfile from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
    { userName: "Mike • 14", userBirthday: "04/10 $" },
    { userName: "Patricia • 11", userBirthday: "19/08 *" },
    { userName: "Bobby • 6", userBirthday: "22/09" },

];

export default function DesktopSeventeenRowOne() {
    return (
        <div className="flex justify-center self-stretch">
            <div className="container-xs flex justify-center px-4 md:px-5">
                <div className="flex w-[96%] flex-col gap-8 md:w-full">
                    <div className="flex items-start justify-between gap-5">
                        <Heading as="h1" className="self-center font-casaygon">
                            My Children
                        </Heading>
                        <a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank" rel="noopener noreferrer">
                            <Button style={{height: 66}} size="2xl" shape="round" className="min-w-[290px] font-quicksand font-bold">
                                Invite Friends
                            </Button>
                        </a>
                    </div>

                    <div className="ml-[50px] mr-[46px] md:mx-0">
                        <div className="flex flex-col items-end">
                            <div className="flex gap-[22px] self-stretch md:flex-col">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {data.map((d, index) => (
                                        <UserProfile {...d} key={"desktop" + index}
                                                     className="w-[24%] bg-black-900 md:w-full"/>
                                    ))}

                                    <div className="flex w-[24%] flex-col gap-6 md:w-full">
                                        <a style={{    height: '100%'}}
                                        href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank"
                                        rel="noopener noreferrer">
                                        <div  style={{    height: '100%'}}
                                            className="flex flex-col items-center place-items-center justify-center gap-[22px] rounded-[26px]
                                             bg-white-a700 py-[22px] pl-14 pr-14 shadow-sm md:px-5 sm:p-5">
                                            <img className="mt-2 h-[122px] w-[122px]"
                                                 src="images/img_fluent_person-b.svg"
                                                 alt="Fluent person" loading="lazy"/><h2
                                            className="text-black-900 font-casaygontext  text-[22px] font-semibold">Add
                                            Child</h2>
                                        </div>
                                    </a>

                                    </div>
                                </Suspense>

                            </div>


                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}
