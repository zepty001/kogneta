import React from "react";
import "./About.scss";
import { jordan } from "../../assets";

const About = () => {
  return (
    <div>
      <div className="about-banner">
        <div className="about-banner-cntr">
          <div className="about-banner-heading">Hi, We're Kogneta!</div>
          <div className="about-banner-content">
            We’re a team of marketers that are obsessed with help local
            companies grow predictably and profitably without the B.S. that
            you’re used to with other agencies.
          </div>
        </div>
      </div>
      <div className="value-section">
        <div className="value-cntr">
          <div className="value-heading">Values We Hire, Fire and Work By</div>
          <div className="value-content-box">
            <div className="value-box">
              <div className="value-box-heading">Quality Over Quantity</div>
              <div className="value-box-text">
                Many providers out there take a churn and burn approach to the
                work that they do by trying to get as much done as quickly as
                possible. <br /> <br />
                We pride ourselves in the work that we do and focus on doing
                that work that may take a little longer but, is of much higher
                quality than the rest.
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-heading">Radical Transparency​</div>
              <div className="value-box-text">
                Radical Transparency The digital marketing world is notorious
                for being opaque and scummy. <br /> <br />
                We take the opposite approach and provide radical transparency
                both within our team and to the clients that we work with.
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-heading">Continuous Curiosity​</div>
              <div className="value-box-text">
                With the industry constantly evolving and clients never being
                the same, it’s important to have continuous curiosity to learn
                and expand your knowledge not just to help your clients grow
                but, to further your career.
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-heading">
                Ownership & Accountability
              </div>
              <div className="value-box-text">
                There can be nothing more frustrating than having someone say
                “that’s not my problem”. We don’t take that approach, instead,
                everything that we do we take ownership of and are accountable
                for. No matter how small or big a task is, you own it.
              </div>
            </div>
          </div>
          <div className="value-content-box">
            <div className="value-box">
              <div className="value-box-heading">Data Driven Decisions </div>
              <div className="value-box-text">
                As a digital marketing agency everything at we do is tracked.
                That is why the opportunities, insights and recommendations that
                we provide should be based off of data rather than feelings,
                anecdotes and sometimes even best practices.
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-heading"> No BS & Douchebaggery​</div>
              <div className="value-box-text">
                Nobody likes working with a douchebag, don’t be one…
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-heading">Be Actionable​</div>
              <div className="value-box-text">
                Providing recommendations without them being actionable doesn’t
                help anyone. Instead we provide recommendations that are
                specific and actionable in a way that everyone (internally and
                externally) understands.
              </div>
            </div>
            <div className="value-box"></div>
          </div>
        </div>
      </div>
      <div className="revenue-section">
        <div className="revenue-cntr">
          <div className="revenue-heading">
            Ready To Start Working With An Agency That Gives a Sh*t?
          </div>
          <button style={{marginBottom:"5rem"}}>Heck Yeah, Let's Get Started</button>
        </div>
      </div>
      <div className="founder-section">
        <div className="founder-cntr">
          <div className="founder-img">
            <img src={jordan} alt="" />
          </div>
          <div className="founder-content">
            <div className="founder-content-heading">
              Meet Our Founder - Jordan Choo
            </div>
            <div className="founder-content-text">
              Get to know our founder, Jordan Choo and his background in digital
              marketing and why he’s dedicated to helping other business grow
              profitably and predictably without B.S.
            </div>
            <button>Learn more about Jordan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
