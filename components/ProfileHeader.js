import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function ProfileHeader() {
    return (
        <div className='mt-10 mb-6 flex justify-center'>
            <div className='flex flex-col'>
                <img src={'https://scontent.fgza4-1.fna.fbcdn.net/v/t1.6435-9/158189203_2509749299328785_4449248234570148636_n.jpg?stp=dst-jpg_p640x640&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=vDxbxHoLkT4AX-pMzPZ&_nc_ht=scontent.fgza4-1.fna&oh=00_AfDQeL6sgQgWbktQ8YeIDqslppjkOyXkL2bG42cTn9CRag&oe=64D7049A'} 
                className='w-[200px] h-[200px] rounded-full mx-auto'/>
                <h3 className='my-3 font-[500] text-[20px] text-center'>Mohammed Abohani</h3>
                <div className='flex gap-2 items-center justify-center'>
                    <SocialIcon target='blank' url="https://api.whatsapp.com/send/?phone=%2B972593412175&text&type=phone_number&app_absent=0" style={{height:25,width:25}}/>
                    <SocialIcon target='blank' url="https://www.facebook.com/mohammedheshamA/" style={{height:25,width:25}}/>
                    <SocialIcon target='blank' url="https://github.com/moh7med2002" style={{height:25,width:25}}/>
                </div>
            </div>
        </div>
    )
}
