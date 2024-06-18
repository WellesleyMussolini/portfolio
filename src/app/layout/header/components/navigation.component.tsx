"use client"

import { Twirl as Hamburger } from 'hamburger-react'
import { useNavigation } from '../hooks/navigation.hook';
import Link from 'next/link';

export const Navigation = () => {
    const { navigationOptionsMock } = useNavigation();
    return <>
        <div className="hidden sm:flex gap-10">
            {navigationOptionsMock.map((options, index) => (
                <Link key={index} href={options.route} onClick={options.onClick} className="text-gray-500 hover:text-white duration-300 cursor-pointer">{options.label}</Link>
            ))}
        </div>
        <div className="flex sm:hidden cursor-pointer">
            <Hamburger color='white' size={25} />
        </div>
    </>
};