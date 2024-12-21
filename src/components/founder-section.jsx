export function FounderSection() {
  return (
    <section className="mb-20 text-white px-4 max-w-7xl mx-auto">
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"></div>
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 tracking-tight hover:scale-105 transition-transform duration-300 drop-shadow-2xl leading-relaxed py-2">
        Meet Our Founder
      </h2>
      <div className="flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-12 sm:space-y-0 bg-black/20 backdrop-blur-sm rounded-xl p-8 hover:bg-black/30 transition-all duration-300">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="https://github.com/cutiepie2468/phxwebpic/blob/main/avatar/vishal-injewar.jpg?raw=true"
              alt="Vishal Injewar"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = '';
                e.currentTarget.alt = 'VI';
              }}
            />
          </div>
        </div>
        <div className="text-center sm:text-left max-w-2xl">
          <h3 className="text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Vishal Injewar
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Vishal Injewar is a passionate cybersecurity enthusiast, skilled ethical hacker, and penetration testing expert, recently certified in CEH (Certified Ethical Hacker). Actively engaged in CTF competitions, he leverages his strong background in computer engineering to combine deep knowledge with hands-on experience, identifying vulnerabilities and strengthening security systems.
          </p>
        </div>
      </div>
    </section>
  );
}