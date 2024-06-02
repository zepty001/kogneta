import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faPhone,
  faChartLine,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  Dump,
  accountability,
  bs_free,
  common,
  crown,
  hama,
  hgregoire,
  insights,
  is,
  language,
  martin,
  quality,
  revenue,
  scalable,
  spray,
  strategies,
  support,
  vet,
} from "../../assets";
import data from "../../Data/data";
import "./Home.scss";

const Home = () => {

  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className="home-contr">
      <div className="home-banner-cntr">
        <div className="home-banner-top">
          <div className="home-banner-top-left">
            <div className="home-banner-top-heading">
              Helping Local Companies Profitably & Predictably Grow
            </div>
            <div className="home-banner-top-text">
              Discover how we helped a dumpster rental company grow by $2.89M by
              building a scalable and repeatable marketing machine.
            </div>
            <button className="nav-btn" style={{ margin: " 10px 0px" }}>
              Read The Case Study
            </button>
          </div>
          <div className="home-banner-top-right">
            <div className="home-banner-top-right-heading">
              Recent Client Wins
            </div>
            <div className="home-banner-top-right-content">
              <div className="content-img">
                <div className="circle-icon">
                  <FontAwesomeIcon icon={faMoneyBill} className="icon" />
                </div>
              </div>
              <div className="content-text"> $2.89MM Growth in Revenue</div>
            </div>

            <div className="home-banner-top-right-content">
              <div className="content-img">
                <div className="circle-icon">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                </div>
              </div>
              <div className="content-text">
                {" "}
                +267% Increase in Monthly Leads
              </div>
            </div>

            <div className="home-banner-top-right-content">
              <div className="content-img">
                <div className="circle-icon">
                  <FontAwesomeIcon icon={faChartLine} className="icon" />
                </div>
              </div>
              <div className="content-text"> +44% Closing Rate Improvement</div>
            </div>
          </div>
        </div>
        <div className="banner-bottom">
          <img src={Dump} alt="dump" />
          <img src={spray} alt="dump" />
          <img src={is} alt="dump" />
          <img src={hgregoire} alt="dump" />
          <img src={hama} alt="dump" style={{ width: "140px" }} />
          <img src={common} alt="dump" />
          <button>see more &gt;</button>
        </div>
      </div>

      <div className="marketing">
        <div className="marketing-cntr">
          <div className="marketing-heading">
            Local Marketing That Actually Works Without The B.S
          </div>
          <div className="marketing-content-box">
            <div className="content-box">
              <img src={vet} alt="vet" />
              <div className="content-heading">
                How We Helped Paoli Vetcare Increase Clients by 181%
              </div>
              <button className="nav-btn">Read The Case Study</button>
            </div>
            <div className="content-box">
              <img src={martin} alt="vet" />
              <div className="content-heading">
                How We Helped a Lawyer Get a 7000:1 Return on Marketing
              </div>
              <button className="nav-btn">Read The Case Study</button>
            </div>
            <div className="content-box">
              <img src={crown} alt="vet" />
              <div className="content-heading">
                How We Helped CrownFire Increase Leads By 267%
              </div>
              <button className="nav-btn">Read The Case Study</button>
            </div>
          </div>
        </div>
      </div>

      <div className="help-section">
        <div className="help-cntr">
          <div className="help-heading"> How We Help You Grow</div>
          <div className="help-content-box">
            <div className="help-box">
              <img src={scalable} alt="" />
              <div className="help-content-heading"> Generate More Traffic</div>
              <div className="help-content-text">
                {" "}
                Leverage SEO, PPC, and Facebook Ads to drive high-quality and
                purchase ready traffic to your website.
              </div>
            </div>
            <div className="help-box">
              <img src={quality} alt="" />
              <div className="help-content-heading"> Convert More Leads</div>
              <div className="help-content-text">
                {" "}
                Turn your website into a high-converting machine by leveraging
                analytics and user behaviour data.
              </div>
            </div>
            <div className="help-box">
              <img src={strategies} alt="" />
              <div className="help-content-heading"> Close More Customers</div>
              <div className="help-content-text">
                {" "}
                Put your sales process on auto-pilot with personalized lead
                nurturing and marketing automation.
              </div>
            </div>
          </div>
          <button>View All Of Our Services</button>
        </div>
      </div>

      <div className="get-started-section">
        <div className="get-started-cntr">
          <div className="get-started-left">
            <div className="get-started-heading">
              Ready To Grow Your Business Without Getting Burned?
            </div>
            <div className="get-started-text">
              If you’re sick of working with marketing agencies that promise the
              world and don’t deliver then discover how we help you cut through
              the marketing B.S. to actually grow your business.
            </div>
          </div>
          <div className="get-started-right">
            <button>Hech Yeah, Let's Get Started</button>
          </div>
        </div>
      </div>

      <div className="testimony-section">
        <div className="testimony-cntr">
          <div className="testimony-content">
            <div className="testimony-content-heading">
              What Others Have to Say
            </div>
            <div className="testimony-content-text">
              Don’t take our word for it, find out what others have to say about
              working with us and the results that they’ve seen.
            </div>
          </div>
          <div className="testimony-video">
            <div className="youtube-video">
              <div className="youtube-video-container">
                <div className="youtube-video-outer-wrap">
                  <div className="youtube-video-inner-wrap">
                    <div className="youtube-video-play">
                      <iframe
                        src="https://www.youtube.com/embed/QPyHXj2R364?rel=0&amp;start&amp;end&amp;controls=1&amp;mute=0&amp;modestbranding=0&amp;autoplay=1"
                        title="YouTube video"
                        allowFullScreen
                        allow="encrypted-media;"
                        width="500"
                        height="300"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="expect-section">
        <div className="expect-cntr">
          <div className="expect-heading">
            What You Can Expect Working With Us
          </div>
          <div className="expect-content-box">
            <div className="expect-box">
              <img
                src={language}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
              <div className="expect-box-heading">Understand Your Language</div>
              <div className="expect-box-text">
                We speak in a language that you actually understand rather than
                the normal marketing jargon that you’re used to.​
              </div>
            </div>
            <div className="expect-box">
              <img
                src={revenue}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
              <div className="expect-box-heading">Revenue Focused​</div>
              <div className="expect-box-text">
                We don’t care about clicks or traffic and instead obsess over
                leads and revenue that actually grows your business.​
              </div>
            </div>
            <div className="expect-box">
              <img
                src={insights}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
              <div className="expect-box-heading">Transparent Insights​</div>
              <div className="expect-box-text">
                We provide you with clear transparent insight into how every
                cent you’re investing is growing your business.​
              </div>
            </div>
          </div>
          <div className="expect-content-box">
            <div className="expect-box">
              <img
                src={support}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
              <div className="expect-box-heading">Dedicated Support </div>
              <div className="expect-box-text">
                We make sure that you have access to a dedicated team that knows
                and grows your business day in and day out.​
              </div>
            </div>
            <div className="expect-box">
              <img
                src={bs_free}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
              <div className="expect-box-heading">B.S. Free Environment​</div>
              <div className="expect-box-text">
                We don’t beat around the bush and instead work with you directly
                and candidly so things get done without wasting your time and
                energy.
              </div>
            </div>
            <div className="expect-box">
              <img
                src={accountability}
                alt=""
                style={{ width: "120px", height: "120px" }}
              />
              <div className="expect-box-heading">Full Accountability​​</div>
              <div className="expect-box-text">
                We don’t just own the ups but, also the downs so you can focus
                on growing your business worry free.​
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="revenue-section">
        <div className="revenue-cntr">
          <div className="revenue-heading">Sick of Marketing That's Focused on Clicks and Not Revenue?</div>
          <button>Of Course, Let's Get Going</button>
        </div>
      </div>

      <div className="questions-section">
        <div className="questions-cntr">
        <div className="questions-heading">You've Got Questions, We've Got Answers</div>
        <div className="question box">
          <div className="accordion">
            {data.map((items, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)} >
                  <h2>{items.question}</h2>
                  <span> {selected === i ? <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" style={{color:"black"}}/> : <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" style={{color:"black"}}/> } </span>
                </div>
                <div className={selected === i ? "content show": "content"}>{items.answer}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="tired-section">
        <div className="tired-cntr">
          <div className="tired-heading">Tired of Working with Shady Marketing Agencies?</div>
          <button>Obviously, Let's Do This!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
