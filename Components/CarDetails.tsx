"use client";

import { Transition, Dialog } from '@headlessui/react';
import { Fragment} from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import { generateImageURL } from '@/Utils';

interface CarDetailProps{
    isOpen: boolean;
    car: CarProps;
    closeModel: ()=> void;
} 


const CarDetails = ( { isOpen, car, closeModel }: CarDetailProps ) => {
  return (
    <>
    <Transition appear show={isOpen} as = {Fragment} >
        <Dialog as="div" onClose={closeModel} className="relative z-10">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opactiy-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25"/>
            </Transition.Child>

            <div className='fixed overflow-y-auto inset-0'>
                <div className='flex min-h-full justify-center items-center p-4 text-center'>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opactiy-0"
                >
                    <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-6'>
                        <button className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full" type='button' onClick={closeModel}>
                            <Image src="/close.svg" alt='close img' width={20} height={20} className='object-contain'/>
                        </button>

                        <div className='flex-1 flex flex-col gap-3'>
                            <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                <Image src={generateImageURL(car, 'angle')} className='object-contain' fill priority alt='car-model'/>
                            </div>

                            <div className='flex gap-3'>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateImageURL(car, '29')} className='object-contain' fill priority alt='car-model'/>
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateImageURL(car, '32')} className='object-contain' fill priority alt='car-model'/>
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateImageURL(car, '13')} className='object-contain' fill priority alt='car-model'/>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-1 flex-col gap-2'>
                            <h2 className='font-semibold text-xl capitalize'>{ car.make }{ car.model }</h2>
                            <div className='mt-2 flex flex-wrap gap-2 flex-col'>
                                {Object.entries(car).map(([key, value])=>(
                                    <div className='flex justify-between gap-5'>
                                        <h2 className='capitalize text-gray-500'>{key.split("_").join(" ")}</h2>
                                        <p className='font-semibold text-black-100'>{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
        </Dialog>

    </Transition>
    </>
  )
}

export default CarDetails
