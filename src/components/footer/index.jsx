import ClockIcon from "@/assets/SVG/ClockIcon";
import EmailIcon from "@/assets/SVG/EmailIcon";
import Facebook from "@/assets/SVG/FacebookIcon";
import Instagram from "@/assets/SVG/InstagramIcon";
import MapIcon from "@/assets/SVG/MapIcon";
import PhoneIcon from "@/assets/SVG/PhoneIcon";
import Pinterest from "@/assets/SVG/PinterestIcon";
import SendButtonIcon from "@/assets/SVG/SendButtonIcon";
import Twitter from "@/assets/SVG/TwitterIcon";
import Youtube from "@/assets/SVG/YoutubeIcon";
import instagramGallery from "@/assets/images/instagramGallery.png";
import Image from "next/image";


const socialMediaLinks = [
  {
    name: "Pinterest",
    icon: <Pinterest />,
    link: "https://www.pinterest.com/",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    icon: <Twitter />,
    link: "https://www.twitter.com/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/",
  },
  {
    name: "Youtube",
    icon: <Youtube />,
    link: "https://www.youtube.com/",
  },
];

const contactUs = [
  {
    icon: <MapIcon/>,
    name: '3517 W. Gray St. Utica, Pennsylvania 57867',
  },
  {
    icon: <PhoneIcon/>,
    name: '(480) 555-0103',
  },
  {
    icon: <EmailIcon/>,
    name: 'M.Alyaqout@4house.Co',
  },
  {
    icon: <ClockIcon/>,
    name: 'Sun - Sat / 10:00 AM - 8:00 PM',
  },
]
export default function Footer() {
  return (
    <footer>
        <div className="bg-[#880808]">
      <div className="container lg:flex justify-between gap-y-7 lg:gap-x-20 py-16 grid grid-cols-3 px-5 md:px-8">
        <div className="lg:w-1/3 col-span-2 lg:col-span-1 w-4/5 flex flex-col gap-4">
          <h5 className="font-semibold text-lg md:text-xl lg:text-[26px] lg:leading-[72px] tracking-[0%] text-white mb-3">
            Restaurant
          </h5>
          <p className="text-xs lg:text-sm lg:leading-[24px] text-white/90">
          Subscribe our newsletter and 
          get discount 25%off
          </p>
          <div className='flex items-center '>
        <input type="text" placeholder='Enter Your Email' className='rounded-l-[6px] bg-[#fff] px-2 py-1 w-full border-0 outline-none placeholder:text-[#828282] placeholder:text-sm placeholder:text-semibold'/>
        <div className="bg-[#A52A2A] cursor-pointer flex items-center justify-center h-full px-2 py-1 rounded-r-[6px]">
            <SendButtonIcon/>
        </div>
      </div>
          <div className="flex items-center gap-2.5 md:gap-x-4">
          {socialMediaLinks?.map((info, idx) => (
            <a
              key={idx}
              href={info?.link}
              className=" w-[10px] md:w-8 lg:w-10 h-[10px] md:h-8 lg:h-10 rounded-full flex items-center justify-center"
            >
              <div className="!w-[10px] md:!w-4 lg:!w-6 !text-white">{info?.icon}</div>
            </a>
          ))}
        </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-semibold lg:leading-[72px] text-sm lg:text-base tracking-[0%] text-white w-full shrink-0">Contact us</h5>
          <div className="flex flex-col gap-2">
          {contactUs.map((contact, index)=>(
            <div key={index} className="flex  gap-3">
              <div className="mt-1">{contact?.icon}</div>
              <p className="text-xs lg:text-sm text-white/90 leading-[26px]">{contact?.name}</p>
            </div>
          ))}
          </div>
        </div>
        <QuickLinks
          title="Links"
          links={[
            { label: "About us", href: "#" },
            { label: "Contact us", href: "#" },
            { label: "Why SpeechCEU?", href: "#" },
            { label: "Our Menu", href: "#" },
            { label: "Team", href: "#" },
            { label: "FAQ", href: "#" },
          ]}
        />
        <div className="flex flex-col gap-4 lg:w-1/3">
          <h5 className="font-semibold text-sm lg:text-base tracking-[0%] lg:leading-[72px] text-white w-full shrink-0">Instagram Gallery</h5>
          <Image 
    src={instagramGallery.src}
    alt="Instagram Gallery"
    width={350}
    height={350}
    className="w-full h-auto"
  />
        </div>
        {/* <div className="flex justify-between w-3/5"></div> */}
      </div></div>
      <div className="bg-[#A52A2A]">
      <div className="container flex md:gap-x-20 justify-between items-center py-10 px-5 md:px-8">
        <div className="md:w-4/5 lg:w-1/2">
          <p className="text-[10px] md:text-sm lg:text-base leading-[24px] text-white/90">
            Copyright © {new Date().getFullYear()} SpeechCEU All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-5">
            <p className="text-white/90 text-base leading-[24px]">Privacy Policy</p>
            <p className="text-white/90 text-base leading-[24px]">Term of Use</p>
            <p className="text-white/90 text-base leading-[24px]">Partner</p>
        </div>
      </div>
      </div>
    </footer>
  );
}

function QuickLinks({ title = "Quick Links", links = [], className }) {
  return (
    <div className={className}>
      <h5 className="font-semibold text-sm lg:text-base lg:leading-[72px] tracking-[0%] text-white">
        {title}
      </h5>
      <ul className="space-y-2 mt-3">
        {links.map((link, index) => (
          <li key={index}>

            <a
              className="text-xs lg:text-sm lg:leading-[24px] text-white/90 hover:underline"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}