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
                            <h4 className="text-gray-100  mb-3 font-extrabold text-2xl"> Network Security</h4>
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
                            <h3 className="text-gray-100 leading-7 font-semibold w-11/12 text-2xl">Digital Forensics </h3><br />
                            <p className="text-gray-100 text-sm text-justify">Digital forensics involves the identification, collection, analysis, and preservation of digital evidence from devices, networks, and systems to investigate cyber incidents or crimes. It helps uncover the cause, scope, and impact of breaches while ensuring the evidence remains admissible in legal proceedings.</p>
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
                            <p className="text-gray-100 text-sm text-justify">Bug bounty programs are designed to identify, disclose, and assess the impact of vulnerabilities within an organization's systems, web architecture, applications, or domains. These initiatives enable organizations to address risks and remediate vulnerabilities or misconfigurations, ensuring they are not exploited by third parties or malicious actors.
                            .</p>
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
                            <p className="text-gray-100 text-sm text-justify">Cloud security encompasses the protection of cloud environments, including infrastructure, platforms, and software, by implementing advanced security controls such as Identity and Access Management (IAM), encryption, network segmentation, and Zero Trust architecture. It involves assessing misconfigurations in cloud services, securing APIs, monitoring for unauthorized activities, and ensuring compliance with frameworks like CIS Benchmarks, SOC 2, and ISO 27001 to prevent data breaches, privilege escalation, and other cloud-specific attack vectors.</p>
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
                            Android testing involves the systematic analysis of Android applications and devices to identify security vulnerabilities, misconfigurations, and potential attack vectors. This includes static and dynamic code analysis, reverse engineering, penetration testing, and evaluating application components such as activities, services, broadcast receivers, and content providers. The goal is to ensure data integrity, secure communication, and robust defense against exploitation.</p>
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