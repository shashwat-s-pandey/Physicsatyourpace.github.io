import Image from "next/image";
import "./physics.css"

export default function Home() {
  return (
    <div>
      <section id="heading">
      PHYSICS AT YOUR PACE
      </section>
    <div className="main">
      <p></p>
      <h1>Welcome to my Website!</h1>
      <p id="one"><span>I am a teacher of Physics and I have been teaching for more than 20 years.</span></p>
    </div>

    <div className="prfone">
      <p id="prfhead">Here is my Profile: </p>
    </div>
    <div className="profile">
      <img src="rajeevakumarpfp.jpg" alt="Image unavailable" className="center"/>
      <p id="myname">Rajeeva Kumar</p>
      <p>Address: 326 Ashirwad Apartment Mayur Vihar Phase-3</p>
      <p>City: East Delhi</p>
      <p>State: Delhi-110096</p>
      <p>className/Standard: Senior Secondary</p>
    </div>

      <p id="details">Following are my details regarding tutoring:</p>
    <ul>
      <li>20+ years of experience in teaching</li>
      <li>Qualification: in B.E. </li>
      <li>Specialisation for NEET and JEE examinations</li>
      <li>Focus on the concepts of className 11 and 12</li>
    </ul>
    <p></p>
    <div className="pointers">
      <h2>More than two hundred of my students have qualified in engineering and medical entrances respectively.</h2>
      <p>My focus is on the understanding of the subject. Every topic is cleared thoroughly before proceeding for next. Each student gets sufficient time for learning and understanding.</p>
      <p>className duration is of one hour.</p>
      <p>Mode of className: It is both online and offline</p>
      <p>Online classNamees can take place on Zoom or any other platform comfortable by the student.</p>
    </div>
    <section id="row">
      <div className="column">
        <img id="contactme" src="https://sites.psu.edu/curtmoore34/wp-content/uploads/sites/40170/2016/04/contactme.png" alt="Image not available"/>
      </div>
      <div className="column">
        <a href="https://www.facebook.com/rajeeva.kumar.9216"><img id="fb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/></a>
      </div>
    </section>
    </div>
  );
}
