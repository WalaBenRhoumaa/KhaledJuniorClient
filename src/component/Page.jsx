import './Page.css'; // Make sure to create this CSS file
import servicesBg from '../assets/images/services-bg.jpg'; // Import the image
import backg from '../assets/images/backg.jpg';
import backs from '../assets/images/backs.jpg';
import kh from '../assets/images/kh.png'; // Import the new image
import ContactForm from './contact';
function Page() {
    return (
        <>
            <div className="page-container">
                <img src={servicesBg} alt="Services Background" className="services-bg" />
                <div className="text-overlay">
                </div>
            </div>
            <div className="page-container">
                <img src={backg} alt="Background" className="services-bg" />
                <div className="image-overlay">
                    <img src={kh} alt="KH" className="side-image" />
                </div>
                <div className="text-overlay text-right">
                    <h1>Moderating</h1>
                    <p>
                        Success in events lies on skilled moderation. Let me tell my story: maintaining focus, engaging the audience, and ensuring a seamless flow of ideas. As your moderator, I excel at managing panel discussions, conferences, and virtual events with finesse and expertise. Enlisting my services guarantees a memorable and enriching experience for participants.
                    </p>
                </div>
            </div>
            <div className="page-container">
                <img src={backs} alt="Background" className="services-bg" />
                <div className="text-overlay">
                    <h1>Training</h1>
                    <p>
                        Empowerment is at the heart of my training services. Through diverse and cutting-edge programs, I equip individuals with the skills needed to excel. Addressing the latest industry trends and challenges, I employ interactive methodologies for engaging and effective learning. Investing in my training ensures a competitive edge and empowers your workforce to thrive in today's dynamic business landscape.
                    </p>
                </div>
            </div>
            <div className="page-container">
                <img src={backg} alt="Background" className="services-bg" />
                <div className="text-overlay text-center">
                    <h2>Conferencing</h2>
                    <p>
                        Exceptional conferences are orchestrated through my comprehensive services, covering every aspect of planning and execution. (expertise)
                    </p>
                </div>
            </div>
            <div className="page-container">
                <img src={backs} alt="Background" className="services-bg" />
                <div className="text-overlay">
                    <h1>Project Management</h1>
                    <p>
                        Navigating complexities is my forte as a project manager. I employ industry best practices to drive successful outcomes. From initiation to execution and monitoring, I ensure projects stay on track, within budget, and meet critical milestones. My expertise in project management empowers you to focus on your core business while I handle the intricacies of delivery.
                    </p>
                </div>
            </div>
            <div className="page-container">
                <img src={backg} alt="Background" className="services-bg" />
                <div className="text-overlay text-center">
                    <h2>Public Speaking</h2>
                    <p>
                        I confidently take the stage at events, empowering individuals and businesses to communicate their messages with impact and unwavering confidence.
                    </p>
                </div>
            </div>
            <ContactForm />
        </>
    );
}

export default Page;
