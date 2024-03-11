import React, { useEffect, useRef, useState } from 'react';
import { useSearchContext } from '../../context/SearchContextProvider';
import { MessagesSquare, Search, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Add, Campaign, ChevronLeft, ChevronRight, Close, Menu } from "@mui/icons-material";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CircleHelp, Command, Folder, PenTool, UserPlus } from "lucide-react";

const Header = () => {
    const { searchValue, setSearchValue } = useSearchContext();
    const menuRef = useRef(null);
    const [menu, setMenu] = useState(false);
    const location = useLocation();

    const handleInputChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };



    const getLinkClass = (path) => {
        const isActive = location.pathname === path || location.pathname.startsWith(path + "/");
        return `${isActive ? "bg-[#F4F5F6] " : ""} p-2 rounded-lg`;
    };

    const getbg = (path) => {
        const isActive = location.pathname === path || location.pathname.startsWith(path + "/");
        return `${isActive ? "bg-white" : "bg-gray-100"} text-gray-500`;
    };


    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenu(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menu]);

    return (
        <div className="lg:flex justify-between lg:p-4 p-2  border-b ">
            <p className="font-medium text-lg hidden lg:flex">Products</p>
            <div className="flex justify-between w-full lg:hidden md:hidden mb-4 ">
                <div className='flex space-x-2 '>
                    <img className="w-12 h-11" src="https://i.imgur.com/6GVQI9T.png" alt="icon" />
                    <span>
                        <p className="text-gray-500">INC</p>
                        <p className='font-medium'>InnovateHub</p>
                    </span>
                </div>

                <span onClick={() => setMenu(true)}>
                    {menu ? <Close sx={{ fontSize: 27 }} /> : <Menu sx={{ fontSize: 27 }} />}
                </span>

            </div>

            <div className="flex items-center lg:space-x-4 space-x-3">
                <Search className="absolute ml-6" size={20} />
                <input value={searchValue} onChange={handleInputChange} type="text" className="border pl-9 p-2 rounded-lg text-sm outline-none shadow text-gray-500" placeholder="Search for..." />
                <MessagesSquare className="border cursor-pointer shadow rounded-lg p-1" size={31} />
                <Settings className="border cursor-pointer shadow rounded-lg p-1" size={31} />
            </div>

            <div
                ref={menuRef}
                className={`fixed text-lg left-0 top-0 w-10/12 z-20 h-full bg-white duration-200 transform shadow ${menu ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col justify-between p-2 b">
                    <div>
                        <div className="flex justify-between w-11/12 items-center">
                            <div className="flex space-x-2 ">
                                <img className="w-12 h-11" src="https://i.imgur.com/6GVQI9T.png" alt="icon" />
                                <span>
                                    <p className="text-gray-500">INC</p>
                                    <p className='font-medium'>InnovateHub</p>
                                </span>
                            </div>
                            <div>
                                <img className="w-8" src="https://i.imgur.com/nAll32z.png" alt="Profile" />
                            </div>


                        </div>
                        <div className='border rounded-t-lg p-3 mt-3 bg-green'>
                            <div className="flex flex-col space-y-2 ">

                                <Link className={`${getLinkClass("/Design")} flex justify-between`} onClick={() => setMenu(false)} to="/Design">
                                    <span className="flex font-medium items-center">
                                        <PenTool className="ml-[1px] mr-3" size={19} />
                                        Design team
                                    </span>

                                    <span className={`flex items-center rounded-lg pl-2  pr-2 border ${getbg("/Design")}`}>
                                        <Command size={14} />
                                        +1
                                    </span>
                                </Link>

                                <Link
                                    className={`${getLinkClass("/Marketing")} flex justify-between`}
                                    onClick={() => setMenu(false)}
                                    to="/Marketing"
                                >
                                    <span className="font-medium">
                                        <Campaign className="mr-1" style={{ fontSize: 28 }} />
                                        Marketing Team
                                    </span>
                                    <span className={`flex items-center rounded-lg pl-2 pr-2 border ${getbg("/Marketing")}`}>
                                        <Command size={14} />
                                        +2
                                    </span>
                                </Link>

                                <Link
                                    className={`${getLinkClass("/Developement")} flex justify-between`}
                                    onClick={() => setMenu(false)}
                                    to="/Developement"
                                >
                                    <span className="font-medium">
                                        <ChevronLeft className="-ml-1 -mr-3" />
                                        <ChevronRight />
                                        Developement Team
                                    </span>
                                    <span className={`flex items-center rounded-lg pl-2 pr-2 border ${getbg("/Developement")}`}>
                                        <Command size={14} />
                                        +3
                                    </span>
                                </Link>



                            </div>
                        </div>
                        <button className="border border-t-0 rounded-b-xl text-left p-4 pl-5 text-gray-500 w-full font-medium">
                            <Add className="ml-2 mr-2 border-2 rounded bg-gray-100" style={{ fontSize: "18" }} />
                            Create a Team
                        </button>
                        <div className="p-5">
                            <span className="flex justify-between items-center">
                                <p className="text-sm text-gray-500">FOLDERS</p>
                                <p><Add style={{ fontSize: "18" }} /></p>
                            </span>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <span className="flex mt-2 font-medium"> <Folder className="mr-2" size={19} />
                                            Products</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="border-l rounded-b-lg p-3 ml-1 pt-4 space-y-4">
                                            <li className="cursor-pointer font-medium">Roadmap</li>
                                            <li className="cursor-pointer font-medium">Feedback</li>
                                            <li className="cursor-pointer font-medium">Performance</li>
                                            <li className="cursor-pointer font-medium">Team</li>
                                            <li className="cursor-pointer font-medium">Analytics</li>
                                            <li className="cursor-pointer text-gray-500 font-medium">
                                                <Add className="mr-2 border-2 rounded bg-gray-100" style={{ fontSize: "18" }} />
                                                Add new sub
                                            </li>

                                        </ul>

                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <span className="flex mt-2 font-medium"> <Folder className="mr-2" size={19} />
                                            Sales</span>
                                    </AccordionTrigger>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <span className="flex mt-2 font-medium"> <Folder className="mr-2" size={19} />
                                            Design</span>
                                    </AccordionTrigger>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <span className="flex mt-2 font-medium"> <Folder className="mr-2" size={19} />
                                            Office</span>
                                    </AccordionTrigger>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <span className="flex mt-2 font-medium"> <Folder className="mr-2" size={19} />
                                            Legal</span>
                                    </AccordionTrigger>
                                </AccordionItem>
                            </Accordion>


                        </div>
                    </div>
                    <div className='p-3 mt-3'>
                        <div className="flex flex-col space-y-2">

                            <Link className={`${getLinkClass("/Invite")} flex items-center font-medium `} onClick={() => setMenu(false)} to="/Invite">
                                <UserPlus className="ml-1 mr-2" size={19} />
                                Invite teammates
                            </Link>

                            <Link
                                className={`${getLinkClass("/Help")} flex justify-between items-center`}
                                onClick={() => setMenu(false)}
                                to="/Help"
                            >
                                <span className="font-medium flex items-center">
                                    <CircleHelp className="ml-1 mr-2" size={19} />
                                    Help and first steps

                                </span>
                                <span className={`flex items-center rounded-lg text-sm pl-2 pr-2 border ${getbg("/Marketing")}`}>
                                    0/6
                                </span>
                            </Link>

                            <Link
                                className={`${getLinkClass("/Developement")} flex justify-between items-center`}
                                onClick={() => setMenu(false)}
                                to="/Developement"
                            >
                                <span className="font-medium">
                                    <span className="bg-white pl-1 pr-1 rounded text-sm font-medium">7</span> days left on trial
                                </span>
                                <span className="flex text-sm p-1 items-center rounded-lg pl-2 pr-2 border bg-[#232529] text-white">
                                    Add billing
                                </span>
                            </Link>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};






export default Header;
