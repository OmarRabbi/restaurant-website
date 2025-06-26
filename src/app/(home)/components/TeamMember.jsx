// components/TeamMember.tsx
import Image from 'next/image';
import background from '@/assets/images/team-member-bg.png';
import teamMember from '@/assets/images/team-member.png';

const TeamMember = () => {
  const teamMembers = [
    { name: 'Mark Henry', role: 'Owner', image: teamMember, },
    { name: 'Lucky Helen', role: 'Chief', image: teamMember, },
    { name: 'Moon Henry', role: 'Founder', image: teamMember, },
    { name: 'Tom Monrow', role: 'Specialist', image: teamMember, },
  ];

  return (
    <section 
      className="relative w-full min-h-[460px] pt-12 mb-20"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30 z-0"></div> */}
      
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
        {/* Heading section */}
        <div className="text-center my-6 max-w-[50%] w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Team Member</h2>
          <p className="text-white/80 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Varius sed pharetra dictum neque massa congue.
          </p>
        </div>

        {/* Team members grid */}
        <div className="absolute top-[130%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white/10 text-center hover:bg-white/20 transition-all"
            >
               <Image 
                          src={member?.image} 
                          alt="Team member"
                          className="object-contain"
                          />
              <h3 className="text-xl font-semibold text-[#4F4F4F] pt-2">{member.name}</h3>
              <p className="text-[#828282] leading-[24px] text-base pb-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;