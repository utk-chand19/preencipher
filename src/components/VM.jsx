import Card from "./Card";
const miss = "To empower individuals and organizations with the knowledge and resources necessary to navigate the digital landscape securely.";
const vis = "Our vision for cybersecurity is a future where every digital interaction is built on trust and reliability. We strive for an environment where innovation thrives securely, privacy is respected, and individuals and organizations can operate with absolute confidence in the safety of their digital activities.";

export default function VM() {
    return (
        <div className="vmapp">  
        <Card key={1} heding={"Mission"} text={miss} index={1} />
        <Card key={2} heding={"Vision"} text={vis} index={2} />
        </div>
        );
}