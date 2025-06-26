"use client"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import profile from '@/assets/images/profile.png';
import carouselImage from "@/assets/images/carousel-image.png";

export default function CarouselSlider() {
  const customers = [
    {
      image: profile,
      name: "Tayyab Sohail",
      designation: "UX/UI Designer",
      feedback:
        "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    },
    {
        image: profile,
        name: "Tayyab Sohail",
        designation: "UX/UI Designer",
        feedback:
          "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
      },
      {
        image: profile,
        name: "Tayyab Sohail",
        designation: "UX/UI Designer",
        feedback:
          "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
      },
  ];

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full container">
      <Carousel setApi={setApi} className="w-full max-w-[1200px] mx-auto">
        <CarouselContent className="-ml-[1px]">
          {customers.map((customer, index) => (
            <CarouselItem key={index} className="pl-0">
              <Card className="text-white flex xl:flex-col-reverse flex-row justify-between border-none shadow-none min-h-[500px] xl:h-[551px] py-0">
                <CardContent className="xl:w-[60%] w-full flex flex-col justify-evenly p-6 xl:gap-8 gap-6">
                  <div className="flex flex-col gap-6">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[#000000] text-[32px] font-bold leading-[120%]'>Customer <span className='text-[#AD1519]'>Feedback</span></h1>
                        <p className="text-[#3D3D3D]">{customer?.feedback}</p>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <Image
                          src={customer?.image} 
                          alt="Team member"
                          className="object-contain w-12 h-12 rounded-full"  
                        />
                        <div className="flex flex-col gap-1">
                        <h2 className="text-base font-medium text-[#A52A2A]">
                            {customer.name}
                        </h2>
                        <p className="text-sm text-[#000000]">{customer.designation}</p>
                        </div>
                    </div>
                  </div>
                </CardContent>
                <div className="xl:w-[40%] w-full xl:h-full rounded-md">
                  <Image
                    src={carouselImage}
                    alt="profile"
                    className="w-full h-full object-cover rounded-md shrink-0"
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Circle Navigation */}
        <div className="absolute top-[60%] left-[42%] flex items-center justify-center gap-2 mt-8">
          {customers.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-[#AD1519]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}