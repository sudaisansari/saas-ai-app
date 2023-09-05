import React from 'react'

const LandingLayout = ({ children }: {
    children: React
    .ReactNode
}) => {
    return (
        <main className='h-full overflow-auto bg-[#111827]'>
            <div className='h-full w-full max-w-screen-xl mx-auto'>
            {children}
            </div>
        </main>
    )
}

export default LandingLayout