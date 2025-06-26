import React from 'react'
import Image from 'next/image';
import companyName1 from '@/assets/images/company-1.png';
import companyName2 from '@/assets/images/company-2.png';
import companyName3 from '@/assets/images/company-3.png';
import companyName4 from '@/assets/images/company-4.png';
import companyName5 from '@/assets/images/company-5.png';
import companyName6 from '@/assets/images/company-6.png';

function PartnerClient() {
  const industries = [
    {
      icon: companyName1,
      alt: "Company 1"
    },
    {
      icon: companyName2,
      alt: "Company 2"
    },
    {
      icon: companyName3,
      alt: "Company 3"
    },
    {
      icon: companyName4,
      alt: "Company 4"
    },
    {
      icon: companyName5,
      alt: "Company 5"
    },
    {
      icon: companyName6,
      alt: "Company 6"
    },
  ]

  // Duplicate the array to create seamless looping
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <div className="container pt-40 pb-20">
      <div className="flex flex-col items-center justify-center">
        <p className='text-lg text-[#A52A2A] leading-[26px]'>Partners & Clients</p>
        <h1 className='text-[48px] text-[#333333] leading-[56px] text-bold'>We work with the best people</h1>
      </div>
      <div className="marquee-container">
        <div className="animate-marquee">
          {duplicatedIndustries.map((company, index) => (
            <div key={index} className="marquee-item transition-all flex items-center justify-center"> 
              <Image 
                src={company.icon} 
                alt={company.alt}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnerClient;