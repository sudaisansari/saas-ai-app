"use client"
import React from 'react'
import { useAuth } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const font = Montserrat({
    subsets: ['latin'],
    weight: "600"
})

const LandingNavbar = () => {
    const { isSignedIn } = useAuth()
    return (
        <nav className='bg-transparent flex items-center justify-between p-4'>
            <Link href="/" className='flex items-center'>
                <div className='h-8 w-8 mr-4 relative'>
                    <Image
                        src={"/logo.png"}
                        alt='Logo'
                        fill
                    />
                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                    GeniusAI
                </h1>
            </Link>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant={'outline'} className='rounded-full'>
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav >)
}

export default LandingNavbar