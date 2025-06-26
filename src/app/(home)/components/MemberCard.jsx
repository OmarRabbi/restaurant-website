import Image from 'next/image'
import React from 'react'
import teamMember from '@/assets/images/team-member.png';


function MemberCard() {
    const members = [
        {
            image: teamMember,
            name: 'Mark Henry',
            design: 'Owner',
        },
        {
            image: teamMember,
            name: 'Mark Henry',
            design: 'Owner',
        },
        {
            image: teamMember,
            name: 'Mark Henry',
            design: 'Owner',
        },
        {
            image: teamMember,
            name: 'Mark Henry',
            design: 'Owner',
        },
    ]
  return (
    <div className=' flex items-center gap-4 aspect-[312/398]'>
        {
        members.map((member, index)=>(
            <div key={index}>
            <Image 
            src={member?.image} 
            alt="Team member"
            className="object-contain"
            />
            <div className="flex flex-col items-center gap-2 p-2 bg-white">
                <h5 className='text-lg leading-[28px] font-bold text-[#4F4F4F]'>{member?.name}</h5>
                <p className="text-[#828282] text-base leading-[24px]">{member?.design}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default MemberCard