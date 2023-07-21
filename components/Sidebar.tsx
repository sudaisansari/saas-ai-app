import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500"
    },
];

const Sidebar = () => {
    return (
        <div className='flex flex-col h-full space-y-4 py-4 text-white bg-[#111827]'>
            <div className='px-3 py-2 flex-1'>
                <Link href={"/dashboard"} className='flex items-center pl-3 mb-14'>
                    <div className='relative w-8 h-8 mr-4'>
                        <Image
                            fill
                            alt='Logo'
                            src={"/logo.png"}
                        />
                    </div>
                    <h1 className={cn('text-2xl font-bold', montserrat.className)}>
                        GeniusAI
                    </h1>
                </Link>
                <div className='space-y-1'>
                    {routes.map((route) =>
                        <Link 
                        key={route.href}
                         href={route.href}
                         className='group flex text-sm p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition'
                         >
                            <div className='flex items-center flex-1'>
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar