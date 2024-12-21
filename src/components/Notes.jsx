import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Note = () => {
    return (
        <div> <center>
            
            <div className="mx-auto container py-20 px-6 ">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                 <div className="rounded">
                    <motion.div
                    whileHover={{
                    scale: 1.1,
                    opacity:1,
                    textShadow: "0px 0px 4px gray"
                      }}
                      >
                    <div className="w-full h-64 flex flex-col justify-between bg-gray-800/75 border-gray-700 rounded-lg border mb-6 py-5 px-4 ">
                        <div>
                            <h4 className="text-gray-100  mb-3 font-extrabold text-2xl">Network and Network Security</h4>
                            <p className="text-gray-100 text-sm text-justify">Network and network analysis involve understanding, monitoring, and securing communication systems by analyzing data flows, protocols, and traffic patterns. It focuses on identifying anomalies, detecting intrusions, and mitigating threats. Network analysis helps in threat hunting, incident response, and performance optimization.</p>
                        </div>
                        <></>
                    
                    </div>
                    </motion.div>
                    <motion.div
                    whileHover={{
                    scale: 1.1,
                    opacity:1,
                    textShadow: "0px 0px 4px gray"
                      }}
                      >
                    <div className="w-full h-64 flex flex-col justify-between bg-gray-600/75 rounded-lg border border-gray-700 mb-6 py-5 px-4">
                        <div>
                        <h4 className="text-gray-100 font-bold mb-3 text-2xl">VAPT + API testing </h4>
                            <p className="text-gray-100 text-sm text-justify">In the ever-evolving realm of cybersecurity, proactive measures are paramount to safeguarding systems and data. Vulnerability Assessment and Penetration Testing (VAPT) plays a crucial role in this endeavor, offering a comprehensive approach to identifying, evaluating, and exploiting vulnerabilities within an organization's IT infrastructure.</p>
                        </div>
    
                    </div>

                    </motion.div>
                    <motion.div
                    whileHover={{
                        scale: 1.1,
                        opacity:1,
                        textShadow: "0px 0px 4px gray"
                          }}>
                    <div className="w-full h-64 flex flex-col justify-between bg-gray-300 bg-gray-800/75 border-gray-700 rounded-lg border mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-100 font-bold mb-3 text-2xl">Malware Analysis and Development</h4>
                            <p className="text-gray-100 text-sm text-justify">
                            Malware analysis and development focus on understanding, detecting, and countering malicious software, dissecting malware through static and dynamic analysis to uncover behavior. On the offensive side, malware development involves crafting payloads for ethical hacking, such as ransomware simulations or backdoors.</p>
                        </div>
                    </div>
                    
                    
                    </motion.div>

                    
                    
                </div> 
                
                <div className="rounded">
                <motion.div
                    whileHover={{
                    scale: 1.1,
                    opacity:1,
                    textShadow: "0px 0px 4px gray"
                      }}
                      >
                    <div className="w-full h-64 flex flex-col justify-between bg-gray-600/75 border-gray-700 rounded-lg border mb-6 py-5 px-4">
                        <div>
                            <h3 className="text-gray-100 leading-7 font-semibold w-11/12 text-2xl">Reverse Engineering </h3><br />
                            <p className="text-gray-100 text-sm text-justify">Reverse engineering in cybersecurity involves analyzing software, hardware, or protocols to uncover vulnerabilities, understand malware behavior, and identify system flaws. It plays a key role in malware analysis, vulnerability research, and incident response.</p>
                        </div>
                    </div>
                    </motion.div>
                    <motion.div
                    whileHover={{
                    scale: 1.1,
                    opacity:1,
                    textShadow: "0px 0px 4px gray"
                      }}
                      >
                    <div className="w-full h-64 flex flex-col justify-between bg-gray-800/75 border-gray-700 rounded-lg border mb-6 py-5 px-4">
                        <div>
                            <h3 className="text-gray-100 leading-7 font-semibold w-11/12 text-2xl">Digital Forensics (Incidence Response)</h3><br />
                            <p className="text-gray-100 text-sm text-justify">In the ever-evolving landscape of cyber threats, reverse engineering plays a critical role in understanding and mitigating malicious software (malware). This abstract explores the application of reverse engineering techniques in the context of malware and threat analysis.</p>
                        </div>
                        
                    </div>
                    </motion.div>
                    <motion.div
                    whileHover={{
                    scale: 1.1,
                    opacity:1,
                    textShadow: "0px 0px 4px gray"
                      }}
                      >
                    <div className="w-full h-64 flex flex-col justify-between bg-gray-600/75 border-gray-700 rounded-lg border mb-6 py-5 px-4">
                        <div>
                            <h3 className="text-gray-100 leading-7 font-semibold w-11/12 text-2xl">Bug Bounty</h3><br />
                            <p className="text-gray-100 text-sm text-justify">The bug bounty domain focuses on finding and reporting security vulnerabilities across platforms and devices. Ethical hackers test for vulnerabilities and these programs help organizations strengthen their security by identifying and fixing vulnerabilities before they can be exploited by malicious actors.</p>
                        </div>
                    </div>
                    </motion.div>
                </div>



                
                <div className="rounded">
                <motion.div
                    whileHover={{
                    scale: 1.1,
                    opacity:1,
                    textShadow: "0px 0px 4px gray"
                      }}
                      >
                    <div className="w-full h-64 flex flex-col justify-between items-start bg-gray-800/75 border-gray-700 rounded-lg border mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-100 font-bold mb-3 text-2xl">Cloud Security</h4>
                            <p className="text-gray-100 text-sm text-justify">The Cloud Security domain focuses on securing the on-demand delivery of IT resources via the internet. This paradigm shift from on-premises infrastructure to cloud computing introduces unique security challenges and responsibilities shared between cloud service providers (CSPs) and their customers.</p>
                        </div>
                    </div>
                    </motion.div>
                    <motion.div
                    whileHover={{
                    scale: 1.1,
                    opacity:1,
                    textShadow: "0px 0px 4px gray"
                      }}
                      >


                    <div className="w-full h-64 flex flex-col justify-between bg-gray-300 bg-gray-600/75 border-gray-700 rounded-lg border mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-100 font-bold mb-3 text-2xl">SOC Analyst</h4>
                            <p className="text-gray-100 text-sm text-justify">In the ever-evolving landscape of cyber threats, Security Operations Center (SOC) analysts play a vital role in safeguarding organizations' digital assets. They act as the frontline defenders, continuously monitoring, analyzing, and responding to security incidents.</p>
                        </div>
                    </div>
                    </motion.div>
                    <motion.div
                    whileHover={{
                        scale: 1.1,
                        opacity:1,
                        textShadow: "0px 0px 4px gray"
                          }}>
                    <div className="w-full h-64 flex flex-col justify-between bg-gray-300 bg-gray-800/75 border-gray-700 rounded-lg border mb-6 py-5 px-4">
                        <div>
                            <h4 className="text-gray-100 font-bold mb-3 text-2xl">Android Testing</h4>
                            <p className="text-gray-100 text-sm text-justify">
                            Android testing involves evaluating the functionality, performance, security, and user experience of Android applications to ensure they work smoothly across different devices and environments. This process includes functional testing, performance testing, security testing, and UI/UX testing.</p>
                        </div>
                    </div>
                    </motion.div>

                    
                    
                </div>
                
            </div>
        </div></center>
    </div>
    )
}

export default Note;