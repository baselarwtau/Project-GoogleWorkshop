import { Button, Img, Heading } from "../../components";
import UserProfile from "../../components/UserProfile1";
import React, { Suspense } from "react";
import {useChild} from "../../context/ChildContext";

/*const data = [
    { userName: "Mike • 14", userBirthday: "04/10 $" },
    { userName: "Patricia • 11", userBirthday: "19/08 *" },
    { userName: "Bobby • 6", userBirthday: "22/09" },

];*/

export default function DesktopSeventeenRowOne({navigate}) {
    const { childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId } = useChild();


    return (
        <div className="flex justify-center self-stretch">
            <div className="container-xs flex justify-center px-4 md:px-5">
                <div className="flex w-[96%] flex-col gap-8 md:w-full">
                    <div className="flex items-start justify-between gap-5">
                        <Heading as="h1" className="self-center font-casaygon">
                            My Children
                        </Heading>
                            <Button style={{height: 66}} size="2xl" shape="round" className="min-w-[290px] font-quicksand font-bold">
                                Invite Friends
                            </Button>

                    </div>

                    <div className="ml-[50px] mr-[46px] md:mx-0">
                        <div className="flex flex-col items-end">
                            <div className="flex gap-[22px] self-stretch md:flex-col">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {childrenData.map((d, index) => (
                                        <UserProfile onClick={()=>{selectChild(d)}} {...d} obj={d} key={"desktop" + index}
                                                     className="w-[24%] bg-black-900 md:w-full"/>
                                    ))}

                                    <div className="flex w-[24%] flex-col gap-6 md:w-full">

                                        <div  style={{    height: '100%'}}
                                            className="flex flex-col items-center place-items-center justify-center gap-[22px] rounded-[26px]
                                             bg-white-a700 py-[22px] pl-14 pr-14 shadow-sm md:px-5 sm:p-5">
                                            <img className="mt-2 h-[122px] w-[122px]"
                                                 src="images/img_fluent_person-b.svg"
                                                 alt="Fluent person" loading="lazy"/>

                                            <Button
                                                onClick={()=>{
                                                    navigate('/addChild');
                                                }}
                                                size="2xl" shape="round" className="min-w-[228px] h-[66px] font-semibold">
                                                Add Child
                                            </Button>
                                        </div>


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
