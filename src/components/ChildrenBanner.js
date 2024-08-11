import React from 'react';
import {Img} from "./Img";
import {Heading} from "./Heading";
import {Text} from "./Text";
import {Button} from "./Button";
import {useChild} from "../context/ChildContext";

const calculateAge = (birthDateString) => {
    // Convert the input string to a Date object
    const birthDate = new Date(birthDateString);
    const today = new Date(); // Current date

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
};
const ChildrenBanner = props => {
    const {childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId} = useChild();
    console.log('children about', selectedChildId);

    let picture = 'images/img_ellipse_4_138x138.png' ;
    let gender = 'male';
    let name = 'Mike';
    let dob = '04/10/2010';
    if(selectedChildId){
        gender = selectedChildId?.gender;
        name = selectedChildId?.name;
        dob = selectedChildId?.dob;
    }

    if(selectedChildId?.picture  ){
        picture = selectedChildId?.picture;

    }else if(selectedChildId?.gender === 'male' ){
        picture = 'images/img_ellipse_4_138x138.png';
    }else {
        picture = 'images/img_image_1.png';
    }

 async function confirmDelete (  ) {
        const confirm = window.confirm("Are you sure you want to delete?");

        if (confirm) {
            // User clicked "OK"
            await deleteChild (selectedChildId?.id);
            console.log("Deleting...");
            // Your delete logic here
        } else {
            // User clicked "Cancel"
            console.log("Deletion canceled.");
        }
    };

    const deleteSelectedChild = () => {
       if(selectedChildId){
           return(
               <Button
                   onClick={ async ()=>{
                       await confirmDelete();
                   }}
                   color="black_900"
                   size="lg"
                   shape="round"
                   className=" min-w-[231px] h-[66px]"
                   type="submit"  // Submit button
               >
                   Delet Child
               </Button>
           );
       }
    }

    return (
        <div className="rounded-[30px] border border-solid border-black-900 bg-white-a700 p-6 sm:p-5">
            <div className="flex items-center md:flex-col">
                <div className="mb-2.5 flex-1 md:self-stretch">
                    <div className="flex md:flex-col justify-start items-center gap-7">
                        <div className="flex items-baseline  gap-5">
                            <Img
                                src={picture}
                                alt="Image"
                                className="h-[90px] w-[90px] rounded-[44px] object-cover"
                            />
                            <Heading as="h3" className="self-end">
                                {name}
                            </Heading>
                        </div>
                        <div className="flex items-baseline   ml-10 gap-[22px] md:w-full">
                            <Img
                                src="images/ion_calendar.svg"
                                alt="Ion"
                                className="w-[48px]"
                            />
                            <Heading size="heading2xl" as="h4" className="self-center leading-7">
                                {calculateAge(dob)} years old
                                <br/>
                                <span className="text-[17px]">Born {dob}</span>
                            </Heading>
                        </div>

                        <div className="flex items-baseline  ml-10 gap-[21px]  md:w-full">
                            <Img
                                src="images/img_icons8_gender.svg"
                                alt="Icons & gender"
                                className="h-[52px] w-[52px]"
                            />
                            <Heading size="heading2xl" as="h5">
                                {gender}
                            </Heading>
                        </div>

                    </div>
                </div>
                <div className="flex w-[25%] ml-auto flex-col justify-end items-end gap-3 md:w-full md:self-auto">
                 {  deleteSelectedChild() }
                </div>
            </div>
        </div>
    );
}

export default ChildrenBanner;