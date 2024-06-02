import React from "react";
import "./HowWeHelp.scss";
import { automation, content, conversion, crm, digital, ppc, seo, website } from "../../assets";

const HowWeHelp = () => {
  return (
    <div className="how-we-help">
      <div className="how-we-help-banner">
        <div className="how-we-help-banner-cntr">
          <div className="how-we-help-banner-heading">
            Local Marketing Services That Actually Work
          </div>
          <div className="how-we-help-banner-content">
            Tired of working with other agencies that give you cookie cutter
            campaigns? <br /> <br />
            Find out how the mix of channels that we’ll use to create a custom
            marketing campaign so that you can grow your business profitably and
            predictably with out the B.S.
          </div>
          <div className="how-we-help-banner-btn-heading">
            How are you looking to grow?
          </div>
          <div className="how-we-help-banner-btn-cntr">
          <a href="#generate"><button>Generate More Traffic</button></a>
            <a href="#convert"><button>Convert More Leads</button></a>
            <a href="#close"><button>Close More Customers</button></a>
          </div>
        </div>
      </div>
      <div className="help-section" id="generate">
        <div className="help-cntr">
          <div
            className="help-heading"
            style={{ marginTop: "5rem", marginBottom: "1rem" }}
          >
            Generate More Traffic
          </div>
          <div className="help-content-box">
            <div className="help-box">
              <img src={seo} alt="" />
              <div className="help-content-heading"> Local SEO</div>
              <div className="help-content-text">
                Harness the power of Google to drive hundreds of qualified leads
                to your website by leveraging local SEO.​
              </div>
            </div>
            <div className="help-box">
              <img src={ppc} alt="" />
              <div className="help-content-heading"> PPC Advertising</div>
              <div className="help-content-text">
                Use targeting to acquire net-new customers through Google and
                Facebook’s massive ad network.​
              </div>
            </div>
            <div className="help-box">
              <img src={digital} alt="" />
              <div className="help-content-heading"> Digital PR</div>
              <div className="help-content-text">
                Develop and strengthen your company’s brand through local
                targeted digital PR campaigns to keep you top of mind.​
              </div>
            </div>
            <div className="help-box">
              <img src={content} alt="" />
              <div className="help-content-heading"> Content Marketing</div>
              <div className="help-content-text">
                Discover how you can turn readers into revenue by educating and
                empowering visitors before they even make a buying decision.​
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help-section" id="convert">
        <div className="help-cntr">
          <div
            className="help-heading"
            style={{ marginTop: "5rem", marginBottom: "1rem" }}
          >
           Convert More Leads
          </div>
          <div className="help-content-box">
            <div className="help-box">
              <img src={website} alt="" />
              <div className="help-content-heading"> Website Design & Development​</div>
              <div className="help-content-text" style={{width:"400px"}}>
              Design and develop a website that potential customer not only enjoy visiting but, also becomes your top sales and marketing channel.​
              </div>
            </div>
            <div className="help-box">
              <img src={conversion} alt="" />
              <div className="help-content-heading"> Conversion Rate Optimization​</div>
              <div className="help-content-text" style={{width:"400px"}}>
              Leverage the power of qualitative and quantitative website data to turn your site into a 24/7 lead generation machine.​
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help-section" style={{marginBottom:"3rem"}} id="close">
        <div className="help-cntr">
          <div
            className="help-heading"
            style={{ marginTop: "5rem", marginBottom: "1rem" }}
          >
            Close More Customers
          </div>
          <div className="help-content-box">
            <div className="help-box">
              <img src={crm} alt="" />
              <div className="help-content-heading"> CRM​</div>
              <div className="help-content-text" style={{width:"400px"}}>
              Maintain a transparent 360 degree view of how your marketing is performing down to the penny and which channels drive the highest ROI.​
              </div>
            </div>
            <div className="help-box">
              <img src={automation} alt="" />
              <div className="help-content-heading"> Marketing Automation​</div>
              <div className="help-content-text" style={{width:"400px"}}>
              Nurture and close potential and current customers automatically without lifting a finger by leveraging 24/7 automation.​
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-started-section" >
        <div className="get-started-cntr">
          <div className="get-started-left">
            <div className="get-started-heading">
            Read for a Partner That Actually Cares About Your Growth?
            </div>
          </div>
          <div className="get-started-right">
            <button>Hech Yeah, Let's Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
