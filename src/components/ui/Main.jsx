import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ArrowDown01, Command, Import, SlidersHorizontal, SquarePlus } from "lucide-react";
import TableData from "./TableData";


const Main = () => {
    return (
        <>
            <div className="p-4 lg:flex md:flex w-full justify-between">
                <div className="flex z-10">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>

                                    <span className="flex items-center">
                                        <Command className="mr-2" size={17} />
                                        <p className="text-[14px] font-medium"> All brands</p>
                                    </span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <p className="text-[14px] font-medium">Desk</p>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Tags
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="items-center space-x-5 hidden lg:flex md:flex">
                        <div className="flex font-medium border border-dotted bg-[#FBFBFB] p-2 rounded-lg text-gray-500">
                            <ArrowDown01 size={18} className="mr-2 mt-[2px]" />
                            Sort
                        </div>
                        <div className="flex font-medium border border-dotted bg-[#FBFBFB] p-2 rounded-lg text-gray-500">
                            <SlidersHorizontal size={18} className="mr-2 mt-[2px]" />
                            Filter
                        </div>
                    </div>

                </div>

                <div className="flex lg:space-x-4 flex-wrap space-y-4 lg:space-y-0 md:space-y-0 ">

                    <div className="items-center lg:space-x-4 space-x-2 lg:hidden md:hidden flex lg:space-y-0 md:space-y-0 space-y-4">
                        <div className="flex font-medium border mt-4 lg:mt-0 border-dotted bg-[#FBFBFB] p-2 rounded-lg text-gray-500">
                            <ArrowDown01 size={18} className="mr-2 mt-[2px]" />
                            Sort
                        </div>
                        <div className="flex font-medium border border-dotted bg-[#FBFBFB] p-2 rounded-lg text-gray-500">
                            <SlidersHorizontal size={18} className="mr-2 mt-[2px]" />
                            Filter
                        </div>
                    </div>

                    <div className="border font-medium lg:ml-0 ml-2 text-[14px] p-2 cursor-pointer flex  items-center shadow rounded-lg">
                        <SquarePlus className="mr-2" size={17} />
                        Meeting

                    </div>
                    <div className="border ml-2 font-medium text-[14px] p-2 cursor-pointer flex  items-center shadow rounded-lg">
                        <Import className="mr-2" size={17} />
                        Import/Export

                    </div>
                </div>
            </div>
            <div className="border border-l-0 border-r-0">
                <TableData />
            </div >
        </>
    );
}

export default Main;