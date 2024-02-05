import React from 'react'
import { Blocks, GanttChartSquare, Gem, SettingsIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'App Design',
        description: 'crafting user-friendly design interfaces, functionality optimization and evaluating experiences for seamless, impactful app interaction and navigation'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: 'Building cutting-edge applications that are tailored to client specificaitoins and needs ensuring scalability, security and optimal user experience'
    },
    {
        icon: <SettingsIcon size={72} strokeWidth={0.8} />,
        title: 'App Maintainance',
        description: 'Providing an active support, updates bug fixations and also enhancements for a smooth operation and a quality user satisfaction'
    }
]

const Services = () => {
    return (
        <section className='mb-12 xl:mb-36'>
            <div className="container">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {
                        serviceData.map((item, index) => {
                            return (
                                <Card key={index} className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative shadow-lg backdrop-blur-md'>
                                    <CardHeader className='text-primary absolute -top-[60px]'>
                                        <div className='w-[140px] h-[80px] bg-secondary dark:bg-background flex justify-center items-center'>{item.icon}</div>
                                    </CardHeader>
                                    <CardContent className='text-center'>
                                        <CardTitle className='mb-4'>{item.title}</CardTitle>
                                        <CardDescription className='text-lg'>{ item.description }</CardDescription>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services