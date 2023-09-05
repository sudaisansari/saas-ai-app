import Image from 'next/image'
import React from 'react'

interface EmptyProps {
    label: string
}
export const Empty = ({ label }: EmptyProps) => {
    return (
        <div className='flex flex-col h-full p-20 items-center justify-center'>
            <div className='h-72 w-72 relative'>
                <Image
                    src={"/empty.png"}
                    fill
                    alt='empty'
                />
            </div>
            <p className='text-muted-foreground text-sm text-center'>
                {label}
            </p>
        </div>
    )
}

