import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/Table"
import { Add } from "@mui/icons-material";
import Member from "./Member";
import { Archive, MessagesSquare, Trash, X } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import React, { useEffect, useState } from 'react';
import { useSearchContext } from '../../context/SearchContextProvider';


const TableData = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const { searchValue } = useSearchContext();
    const [filteredData, setFilteredData] = useState([]);

    const handleCheckboxChange = (index) => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.includes(index)) {
                return prevSelectedRows.filter((i) => i !== index);
            } else {
                return [...prevSelectedRows, index];
            }
        });
    };


    const data = [
        {
            brand: "Wix",
            chat: "2",
            img: "https://i.imgur.com/9xZsyOp.png",
            description: "Develop a personalized fit...",
            categories: ["Automation"],
            tags: ["#Digital Transformation"],
            nextMeeting: "in 30 minutes",
        },
        {
            brand: "Shopify",
            chat: "",
            img: "https://i.imgur.com/uSzzjF3.png",
            description: "Introduce a cloud-based p...",
            categories: ["E-commerce", "B2B"],
            tags: ["#OnlineShopping", "#Digital"],
            nextMeeting: "Tomorrow",
        },
        {
            brand: "MailChimp",
            chat: "",
            img: "https://i.imgur.com/bTrUijB.png",
            description: "Develop a mobile app aim...",
            categories: ["SaaS", "Mobile"],
            tags: ["#TechInnovation", "#Cloud"],
            nextMeeting: "Tomorrow",
        },
        {
            brand: "PayPal",
            chat: "7",
            img: "https://i.imgur.com/X2KJ8qH.png",
            description: "This program could includ...",
            categories: ["Marketplace"],
            tags: ["#BuySellOnline", "#Online"],
            nextMeeting: "in 6 hours",
        },
        {
            brand: "Disney",
            chat: "",
            img: "https://i.imgur.com/45uzaSE.png",
            description: "Introduce a B2B solution f...",
            categories: ["B2B", "B2C"],
            tags: ["#BusinessPartnerships"],
            nextMeeting: "No contact",
        },
        {
            brand: "Intercom",
            chat: "9",
            img: "https://i.imgur.com/uSzzjF3.png",
            description: "Implement an AI-driven C...",
            categories: ["Technology", "SaaS"],
            tags: ["#SmartFinance", "#SaasSPI"],
            nextMeeting: "in 1 hour",
        },
        {
            brand: "Google",
            chat: "5",
            img: "https://i.imgur.com/zVfkDud.png",
            description: "Offer a comprehensive cy...",
            categories: ["Finance", "Automation"],
            tags: ["#SmartFinance", "#Workfl"],
            nextMeeting: "in 30 minutes",
        },
        {
            brand: "Evernote",
            chat: "",
            img: "https://i.imgur.com/qqEw8zD.png",
            description: "This could include smart li...",
            categories: ["Transportation"],
            tags: ["#LogisticsTech", "#UX"],
            nextMeeting: "Next month",
        },
        {
            brand: "Microsoft",
            chat: "14",
            img: "https://imgur.com/OakiZJf.png",
            description: "Launch an advisory servic...",
            categories: ["Publishing", "B2C"],
            tags: ["#B2CMarketing", "#RetailIT"],
            nextMeeting: "No contact",
        },
        {
            brand: "Invision",
            chat: "",
            img: "https://i.imgur.com/ldDiDJ6.png",
            description: "The tool would analyze tre...",
            categories: ["Web Services"],
            tags: ["#APIIntegration"],
            nextMeeting: "Next month",
        },
    ];


    useEffect(() => {
        if (searchValue) {
            const filtered = data.filter(item =>
                item.brand.toLowerCase().includes(searchValue) ||
                item.description.toLowerCase().includes(searchValue) ||
                item.categories.some(category => category.toLowerCase().includes(searchValue)) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchValue)) ||
                item.nextMeeting.toLowerCase().includes(searchValue)
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [searchValue, data]);

    return (
        <div>
            <Table>
                <TableCaption>
                    <div className="flex space-x-4 justify-center mb-10 mt-10 shadow w-fit p-2 rounded-xl items-center">
                        <span className="flex items-center space-x-2 ">
                            <p className="font-medium bg-[#121212] pl-[6px] pr-[6px] rounded text-white mr-2"> {selectedRows.length}</p>selected
                        </span>

                        <div className="border font-medium text-[14px] p-2 cursor-pointer flex  items-center shadow rounded-lg">
                            <Archive className="mr-2" size={17} />
                            Archive

                        </div>
                        <div className="border font-medium text-[14px] p-2 cursor-pointer flex  items-center shadow rounded-lg text-red-800">
                            <Trash className="mr-2" size={17} />
                            Delete
                        </div>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        More
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink>Link</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <X className="text-gray-300" size={20} />

                    </div>
                </TableCaption>
                <TableHeader className="text-gray-500 ">
                    <TableRow>
                        <TableHead className="text-[14px]">
                            <span className="flex items-center space-x-2 min-w-[13rem]">
                                <p className="flex w-full justify-between">
                                    Brand
                                    <Add style={{ fontSize: "18px" }} />
                                </p>
                            </span>
                        </TableHead>
                        <TableHead className="text-[14px] min-w-[16rem]">Description</TableHead>
                        <TableHead className="text-[14px] min-w-[16rem] lg:min-w-0">Members</TableHead>
                        <TableHead className="text-[14px] min-w-[16rem] lg:min-w-0">Categories</TableHead>
                        <TableHead className="text-[14px] min-w-[16rem] lg:min-w-0">Tags</TableHead>
                        <TableHead className="text-[14px] min-w-[11rem]">Next Meeting</TableHead>
                        <TableHead className="text-[14px]"><Add /></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && filteredData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="text-[14px]">
                                <div className="flex w-full justify-between">
                                    <span className="flex items-center space-x-3">
                                        <input
                                            className="h-4 w-4 accent-[#121212]"
                                            type="checkbox"
                                            checked={selectedRows.includes(index)}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                        <img className="w-6" src={item.img} alt={item.brand} />
                                        <p>{item.brand}</p>
                                    </span>
                                    {item.chat && <span className="flex space-x-1 items-center text-gray-500">
                                        <MessagesSquare size={18} />
                                        <p className="text-sm font-medium">{item.chat}</p>
                                    </span>}
                                </div>
                            </TableCell>

                            <TableCell className="text-[13.5px] font-medium">{item.description}</TableCell>
                            <TableCell className="min-w-[14rem]"><Member /></TableCell>
                            <TableCell className="flex space-x-2 border-t-0 border-b-0 border-r">
                                {item.categories.map((category, i) => (
                                    <span key={i}>
                                        <p className="bg-indigo-200 p-1 text-sm text-indigo-600 font-medium rounded-lg pl-2 border-indigo-300 border">
                                            {category}
                                        </p>
                                    </span>
                                ))}
                            </TableCell>


                            <TableCell><p className="bg-gray-100 p-1 min-w-[11rem] text-sm text-gray-500 font-medium rounded-lg pl-2 border-gray-300 border">{item.tags[0]}</p></TableCell>
                            <TableCell><p className="bg-green-100 p-1 text-sm text-green-700 font-medium rounded-lg pl-2 border-green-300 border">{item.nextMeeting}</p></TableCell>
                            <TableCell className="text-[14px]"></TableCell>
                        </TableRow>
                    ))}

                    <TableRow>

                        <TableCell className="text-[14px] font-medium text-gray-500 flex justify-end">   {
                            <p className="text-black mr-1">{data && data.length}</p>
                        } count</TableCell>
                        <TableCell>
                            <span className="flex justify-end items-center space-x-2 text-gray-500">
                                <Add style={{ fontSize: "18" }} />
                                <p className="text-[14px] font-medium">Add calculation</p>
                            </span>
                        </TableCell>
                        <TableCell>
                            <span className="flex justify-end items-center space-x-2 text-gray-500">
                                <Add style={{ fontSize: "18" }} />
                                <p className="text-[14px] font-medium">Add calculation</p>
                            </span>
                        </TableCell>
                        <TableCell>
                            <span className="flex justify-end items-center space-x-2 text-gray-500">
                                <Add style={{ fontSize: "18" }} />
                                <p className="text-[14px] font-medium">Add calculation</p>
                            </span>
                        </TableCell>
                        <TableCell>
                            <span className="flex justify-end items-center space-x-2 text-gray-500">
                                <Add style={{ fontSize: "18" }} />
                                <p className="text-[14px] font-medium">Add calculation</p>
                            </span>
                        </TableCell>
                        <TableCell className="text-[14px] font-medium text-right"></TableCell>
                        <TableCell className="text-[14px] font-medium text-right"></TableCell>
                    </TableRow>
                </TableBody>


            </Table>
        </div >
    );
};

export default TableData;
