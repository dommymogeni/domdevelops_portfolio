'use client'

import React from 'react'
import Image from 'next/image'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const ReviewData = [
    {
        avatar: '/images/IMG_4463-bgwhite.png',
        name: 'Richards Thompson',
        job: 'chief chef',
        testimonials: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorum at laboriosam vero, assumenda possimus cum aliquam amet consequatur dolor.'
    },
    {
        avatar: '/images/IMG_4463-bgwhite.png',
        name: 'Richards Thompson',
        job: 'chief chef',
        testimonials: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorum at laboriosam vero, assumenda possimus cum aliquam amet consequatur dolor.'
    },
    {
        avatar: '/images/IMG_4463-bgwhite.png',
        name: 'Richards Thompson',
        job: 'chief chef',
        testimonials: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorum at laboriosam vero, assumenda possimus cum aliquam amet consequatur dolor.'
    },
    {
        avatar: '/images/IMG_4463-bgwhite.png',
        name: 'Richards Thompson',
        job: 'chief chef',
        testimonials: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorum at laboriosam vero, assumenda possimus cum aliquam amet consequatur dolor.'
    }
]

const Testimonials = () => {
    return (
        <section className='mb-12'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-4 text-center mx-auto'>Testimonials</h2>

                <div className='mb-12 text-center'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Deleniti sapiente ea blanditiis repellendus illo totam dolorum quasi culpa officiis possimus.</p>
                </div>


                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 }
                    }}
                    spaceBetween={30}
                    modules={{ Pagination }}
                    pagination={{
                        clickable: true
                    }}
                    className='h-[350px]'
                >
                    {ReviewData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className='flex items-center gap-x-4'>
                                            <Image src={person.avatar} width={70} height={70} alt='reviewer' priority className='w-[70px] h-[70px]rounded-full' />
                                            <div>
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{ person.job }</p>
                                            </div>
                                        </div>
                                        <div>
                                            <CardDescription className='text-lg text-muted-foreground'>
                                                {person.testimonials}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials