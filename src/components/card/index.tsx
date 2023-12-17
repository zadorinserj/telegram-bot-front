import type { FC } from 'react';
import Image, {StaticImageData} from 'next/image';

type TCard = {
    imageSrc: StaticImageData;
    title: string;
    price: string;
    discount: string;
};

export const Card: FC<TCard> = ({
    imageSrc,
    title,
    price,
    discount,
}) => {
    return (
        <div className='w-72 h-96 flex flex-col p-3.5 rounded-3xl' style={{ boxShadow: 'rgba(199, 199, 199, 0.6) 0px 0px 59px 8px' }}>
            <div className='relative w-full h-min mb-5 rounded-3xl overflow-hidden'>
                <div className='absolute top-3.5 right-2.5 py-2 px-3.5 rounded-xl font-medium' style={{ backgroundColor: 'rgba(28, 29, 32, 0.35)', color: '#fff' }}>{discount}</div>
                <Image
                    alt=''
                    src={imageSrc}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
            <div className='mb-3.5 text-xl font-semibold'>{title}</div>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <div className='text-sm mb-1' style={{ color: '#94A3B8' }}>Цена</div>
                    <div className='text-base' style={{ color: '#141416' }}>{price}</div>
                </div>
                <button className='h-full w-3/6 rounded-xl' style={{ backgroundColor: '#141416', color: '#fff' }}>Заказать</button>
            </div>
        </div>
    )
};
