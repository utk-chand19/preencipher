import React from 'react';
import { CalendarIcon } from "lucide-react"

export function TimelineSection() {
  const events = [
    { date: "July 2021", event: "Group Formation and Virtual Meetups", description: "In the midst of the pandemic, a group of students with a passion for cybersecurity came together on July 9, 2021. They used online platforms to collaborate, share ideas, and plan for the future." },
    { date: "October 2021", event: "Transition to Offline Meetups", description: "As offline classes resumed, the group transitioned to in-person meetings. They faced challenges in organizing these gatherings, but their perseverance helped them strengthen the community." },
    { date: "February 2022", event: "First Cybersecurity Workshop", description: "The group hosted their first technical workshop, sharing their accumulated knowledge. This was their first official step into becoming a recognized entity within the department." },
    { date: "March 2022", event: "EncipherX 1.0 Cybersecurity Competition", description: "EncipherX 1.0, held on March 24-25, 2022, was a major cybersecurity competition that attracted students from various semesters. It marked the group's first large-scale event." },
    { date: "January 2023", event: "Second Batch of Members Joined", description: "With fresh perspectives and energy, the second batch of members brought new ideas to the forum. The senior members mentored the newcomers, preparing them for the future." },
    { date: "March 2024", event: "EncipherX 2.0 Cybersecurity Competition", description: "Building on the success of EncipherX 1.0, the second edition was even larger and more challenging. It attracted a wider range of participants and solidified the forum's standing." },
    { date: "April 2024", event: "Official Establishment of the Forum", description: "On April 23, 2024, the Phoenix CyberSecurity Forum was officially recognized as a part of the department. This milestone acknowledged the forum's contributions to the academic community." },
    { date: "July 2024", event: "Seminar Report: Mobile Security Awareness and Threats", description: "The Phoenix Club and the Cybersecurity Department held a seminar on Mobile Security Awareness and Threats featuring experts Onkar Sinha, Amit Prajapati, and Vishal Injewar, focusing on mobile security risks and practical data protection tips." },
    { date: "July 2024", event: "Third Batch of Members Joined", description: "The Phoenix Cyber Security Forum welcomes its second batch of members, bringing fresh energy and strengthening our commitment to cybersecurity excellence." },
    { date: "October 2024", event: "Phoenix Forum Triumphs at COLOSSEUM 15.0 Capture the Flag (CTF) event", description: "The Phoenix Cyber Security Forum welcomes its third batch of members, further enhancing our commitment to cybersecurity excellence." },
    { date: "October 2024", event: "Fourth Batch of Members Joined", description: "Phoenix Forum members dominated COLOSSEUM 15.0 CTF, securing 1st and 2nd place, and proving their unmatched expertise in the cybersecurity challenge." }
  ]

  return (
    <section className="mb-16 md:mb-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">
        Our Journey Through Time
      </h2>
      <div className="relative">
        {/* Vertical line connecting timeline items - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-red-500" />
        
        <div className="space-y-12 md:space-y-24">
          {events.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              {/* Center dot - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 md:w-6 h-4 md:h-6">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-red-500 animate-pulse" />
              </div>
              
              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center">
                      <CalendarIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="text-red-400 font-medium text-sm md:text-base">{item.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-2 md:mb-3">{item.event}</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
