import {useState,useEffect} from 'react'

export default function ImageParolax() {
    const [offset, setOffset] = useState();
    const handleScroll = () => setOffset(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
        <div className='image-parollax-wrapper'>
            <div className='image-parollax-left'><img  src='https://thumb.tildacdn.com/tild3630-6533-4266-b465-333339316362/-/cover/520x920/center/center/-/format/webp/SFOT4885_1_1.jpg' />
            </div>
            <div className='container image-parollax'>
                <div>
                    <img src='https://thumb.tildacdn.com/tild6266-3033-4436-b830-313534653265/-/cover/520x520/center/center/-/format/webp/IMG_3700_1.jpg' />
                    <img src='https://thumb.tildacdn.com/tild3637-3937-4438-a661-363130383238/-/cover/520x480/center/center/-/format/webp/5G7A6455.jpg' />
                </div>
                <div className='image-parollax-middle'></div>
                <div>
                    <img src='https://thumb.tildacdn.com/tild3665-6536-4539-b334-363437336337/-/cover/520x480/center/center/-/format/webp/5G7A1820-min.jpg' />
                    <img src='https://thumb.tildacdn.com/tild6163-3164-4561-b639-393435303034/-/cover/520x520/center/center/-/format/webp/SFOT9973.jpg' />
                </div>
            </div>
            <div className='image-parollax-right'><img src='https://thumb.tildacdn.com/tild3031-6363-4666-b332-616162653466/-/cover/520x920/center/center/-/format/webp/30-min.jpg' />
            </div>
        </div>
    )
}
