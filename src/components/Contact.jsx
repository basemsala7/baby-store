import {
  MdLocalPhone,
  MdLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <div className="left">
        <div>
          <label htmlFor="name"> Enter your name</label> <br></br>
          <br></br>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="mail"> Enter your E-mail</label> <br></br>
          <br></br>
          <input type="email" id="mail" />
        </div>

        <div>
          <label htmlFor="sub">Subject</label> <br />
          <br></br>
          <input type="text" id="sub" />
          <br></br>
        </div>

        <div>
          <label htmlFor="review">Your Message </label> <br></br>
          <br></br>
          <textarea
            id=""
            name="review"
            rows="15"
            style={{ width: "100%" }}
          ></textarea>
        </div>
        <div>
          <button type="button" className="sendbtn">
            {" "}
            Send Message
          </button>
        </div>
      </div>

      <div className="right">
        <div>
          <h4>Get in touch</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur{" "}
            <br></br>
            eget leo at velit imperdiet varius. In eu ipsum vitae velit congue{" "}
            <br></br>
            iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>

        <div>
          <h4>The Office</h4>
          <p>
            <MdLocalPhone className="conicon" />
            <span>ADDRESS : </span>
            123 Street Name, City, England
          </p>

          <p>
            <MdLocationOn className="conicon" />
            <span>Phone : </span>
            (123) 456-7890
          </p>

          <p>
            <MdOutlineMailOutline className="conicon" />
            <span> Email : </span>
            mail@example.com
          </p>
        </div>

        <div>
          <h4>Business Hours</h4>
          <p>Monday - Friday 9am to 5pm</p>
          <p>Saturday - 9am to 2pm</p>
          <p>Saturday - 9am to 2pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
