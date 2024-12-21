import React, { memo } from 'react';

const TeamMemberCard = memo(({ member }) => (
  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg-black/30 transition-all duration-300 transform hover:scale-105 group">
    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-6 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500">
      <div className="w-full h-full rounded-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '';
            e.currentTarget.alt = member.name[0];
            e.currentTarget.className += ' bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold';
          }}
        />
      </div>
    </div>
    <div className="text-center transform transition-transform duration-300 group-hover:translate-y-[-5px]">
      <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-purple-400 group-hover:to-blue-400">
        {member.name}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {member.bio}
      </p>
    </div>
  </div>
));

export function CurrentTeamSection() {
  const currentTeamMembers = [
    {
      name: "Ansh Gadhia",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/ansh.jpg?raw=true",
      bio: "A passionate and driven individual with a knack for multitasking, leadership, and out-of-the-box thinking. An enthusiastic explorer and CTF player, always seeking new challenges to sharpen critical thinking and problem-solving skills."
    },
    {
      name: "Vidyan Tidke",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Vidyan%20Tidke.png?raw=true",
      bio: "Vidyan Tidke is a passionate cybersecurity enthusiast, mastering the art of malware analysis & development, and cyber forensics. With a knack for programming and OSINT, he thrives in the world of Linux, CTF & competitions."
    },
    {
      name: "Onkar Sinha",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Onkar.jpg?raw=true",
      bio: "Onkar Sinha is a versatile professional, excelling as an analyst, sales and marketing specialist, and research assistant. A student with a strong passion for cybersecurity and programming, he is also the founder of Tech_Pupil."
    },
    {
      name: "Utkarsh Chandekar",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Utkarsh.jpg?raw=true",
      bio: "Utkarsh Chandekar is a cybersecurity enthusiast with a solid foundation in Linux basics, IoT, and web security. Actively engaged in Hack The Box (HTB) challenges and CTF competitions, he sharpens his skills while exploring the latest in cybersecurity techniques and problem-solving."
    },
    {
      name: "Amit Prajapati",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Amit.jpg?raw=true",
      bio: "Amit Prajapati is a cybersecurity professional specializing in Android security. With a passion for ethical hacking, Amit has extensive experience in both developing and playing Capture The Flag (CTF) challenges."
    },
    {
      name: "Ayush Benny",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Ayush.jpg?raw=true",
      bio: "Ayush Benny is a driven cybersecurity enthusiast specializing in penetration testing and digital forensics. With a solid foundation in Linux and management skills, he is an aspiring entrepreneur."
    },
    {
      name: "Shruti Bhande",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/shruti.jpg?raw=true",
      bio: "Shruti Bhande is proficient in cryptography, actively working on encryption/decryption models through projects, CTF challenges, and solving labs on TryHackMe (THM) and Hack The Box (HTB)."
    },
    {
      name: "Aayushi Salbarde",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Aayushi.jpg?raw=true",
      bio: "Aayushi Salbarde is passionate cybersecurity enthusiast with expertise in cryptography and a strong interest in digital forensics. Her passion lies in identifying and exploiting vulnerabilities in encryption models."
    },
    {
      name: "Sujal Thakur",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Sujal%20.jpg?raw=true",
      bio: "Sujal Thakur, a computer science enthusiast, is exploring cloud security, penetration testing, and computer networking. With a strong interest in ethical hacking, he is focused on mastering cybersecurity trends."
    }
  ];

  return (
    <section className="mb-20 text-white px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 tracking-tight hover:scale-105 transition-transform duration-300 drop-shadow-2xl leading-relaxed py-2">
        Current Team
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentTeamMembers.map((member, index) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
