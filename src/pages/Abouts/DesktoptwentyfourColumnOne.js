import { Text, Heading } from "../../components";
import TeamMemberProfile from "../../components/TeamMemberProfile";
import React, { Suspense } from "react";

const data = [
    { teamMemberName: "Basel Erw", teamMemberEmail: "BaselArw@gmail.com" , img: "images/Basel.jpg"},
    { teamMemberName: "Ohad Elkayam", teamMemberEmail: "ohadelkayam@mail.tau.ac.il", img: "images/OhadElkayam.png"},
    { teamMemberName: "Bayan Hijazi", teamMemberEmail: "bayanhijazi@mail.tau.ac.il", img:"images/BayanHijazi.png" },
    { teamMemberName: "Ghaidaa Haj", teamMemberEmail: "gaidaahaj@mail.tau.ac.il", img: 'images/Gaidaa.jpg '}
];

export default function DesktoptwentyfourColumnOne() {
    return (
        <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col gap-[54px] px-[50px] md:px-5 sm:gap-[27px]">
                <div className="mx-16 flex flex-col items-center gap-[42px] md:mx-0">
                    <Heading as="h1" className="font-quicksand">About</Heading>
                    <Text size="text4xl" as="p" className="w-full leading-[37px]">
                        We are a team of four dedicated individuals who created this website to solve a problem many of us face
                        during children&#39;s birthdays. Guests often don&#39;t know what to buy, and sometimes the gifts are not
                        suitable or meaningful. Our goal is to ease the burden on guests and ensure that every child receives a gift
                        they truly love and appreciate.
                    </Text>
                </div>
                <div className="flex gap-8 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index ,img) => (
                            <TeamMemberProfile {...d} key={"listteammember" + index} myurl = {d.img} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
