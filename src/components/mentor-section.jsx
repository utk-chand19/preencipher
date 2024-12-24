export function MentorSection() {
  const mentors = [
    {
      name: "Rushi Wagh",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/rushi.jpg?raw=true",
      bio: "Rushi Wagh is a tech geek with a passion for exploring DevOps, specializing in AWS, Linux administration, Ansible, Docker, and Jenkins. Alongside his technical expertise, he is also an infographics designer with a keen interest in vehicle dynamics."
    },
    {
      name: "Abin George Varghese",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Abin%20George%20Varghese.jpg?raw=true",
      bio: "Abin George Varghese is a dynamic support desk executive at RMV India with a passion for cybersecurity and technology exploration. A computer engineer by training and a career advisor at heart."
    },
    {
      name: "Yash Kamone",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Yash%20Kamone.jpg?raw=true",
      bio: "A dependable guide in times of need, always ready to share his knowledge and offer assistance for any task."
    },
    {
      name: "Jyotiraditya Parihar",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Jyotiraditya%20Parihar.jpg?raw=true",
      bio: "Jyotiraditya Parihar is a dynamic professional, blending expertise in engineering, finance, and data science with a deep passion for machine learning and AI research."
    },
    {
      name: "Ayush Gupta",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Ayush%20Gupta.jpg?raw=true",
      bio: "A dependable and trustworthy mentor who works discreetly, always there when needed. Continuously exploring new technologies, he is always helpful in offering guidance and support."
    },
    {
      name: "Rohan Misalwar",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Rohan%20Misalwar.jpg?raw=true",
      bio: "Rohan Misalwar is an experienced professional with expertise in data science, cyber security, mental health advocacy, public speaking, business analysis, marketing, and operations."
    },
    {
      name: "Om Itankar",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/OM%20ITANKAR.jpg?raw=true",
      bio: "Om Itankar is a dedicated Data Science Intern with a background in computer engineering. He has experience as a data scientist, working with tools like Python and Power BI to analyze and visualize data."
    },
    {
      name: "Shantanu Jangle",
      image: "https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/Shantanu%20Jangale.jpg?raw=true",
      bio: "Shantanu Jangle is a cybersecurity expert specializing in penetration testing, threat intelligence, and red teaming. As a skilled ethical hacker and digital forensics analyst, he has contributed to ISAC India, SAE India, and the UK's National Crime Agency (NCA). His experience spans uncovering vulnerabilities and strengthening defenses in high-stakes environments."
    }
  ];

  return (
    <section className="mb-20 text-white px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 tracking-tight hover:scale-105 transition-transform duration-300 drop-shadow-2xl leading-relaxed py-2">
        Our Mentors
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <div key={index} className="bg-black/20 backdrop-blur-sm rounded-xl p-6 hover:bg-black/30 transition-all duration-300 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1 mb-6">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '';
                    e.currentTarget.alt = mentor.name[0];
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {mentor.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {mentor.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}