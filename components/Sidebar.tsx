"use client"
import { cn } from '@/lib/utils';
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, Video, VideoIcon } from 'lucide-react';
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation"

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        href: "/conversation",
        icon: MessageSquare,
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        href: "/image",
        icon: ImageIcon,
        color: "text-pink-500"
    },
    {
        label: "Video Generation",
        href: "/video",
        icon: VideoIcon,
        color: "text-orange-700"
    },
    {
        label: "Music Generation",
        href: "/music",
        icon: Music,
        color: "text-emerald-500"
    },
    {
        label: "Code Generation",
        href: "/code",
        icon: Code,
        color: "text-green-700"
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

const Sidebar = () => {
    const pathName = usePathname();
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
                            className={cn('group flex text-sm p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                            pathName === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
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