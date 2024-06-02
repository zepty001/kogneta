import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import data from "../../Data/data";
import axios from 'axios'
import "./Contact.scss";
import { accountability, bs_free, insights, language, marcuson, project_spaces, revenue, skyetec, skyview, support, vicwest, woood, work_214, work_away } from "../../assets";

const Contact = () => {

  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  const [flag, setFlag] = useState("");
  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [phone, setPhone] =useState("");
  const [day, setDay] = useState("");
  const [url, setUrl] =useState("");
  const [text, setText]= useState("")
  const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(flag)
    const data = {
        Name:name,
        Email:email,
        Country:flag,
        Number:phone,
        Day:day,
        url:url
    }

    axios.post("https://sheet.best/api/sheets/988b823b-38fb-487b-87f1-ab17ebcdb4bb", data).then((response) =>  {console.log(response)})
    setFlag("")
    setDay("")
    setEmail("")
    setName("")
    setPhone("")
    setUrl("")
    setText("")
    setSubmitted(true)

}


//   const time = [
//         {label: "10 AM",  value: "1"},
//         {label: "11 AM",  value: "2"},
//         {label: "12 PM",  value: "12 PM"},
//         {label: "6 PM",  value: "6 PM"},
//         {label: "7 PM",  value: "7 PM"},
//   ]
  return (
    <div className="conatct-page">
      <div className="contact-banner">
        <div className="contact-content">
          <div className="contact-content-heading">Ready to Start Growing?</div>
          <div className="contact-content-text">
            Book a Free Strategy Session <br /> <br />
            Tell us a bit more about how you’re trying to grow your business so
            we can have a productive strategy call. <br /> <br />
            What you can expect from our call:
            <ul>
              <li> Align on your current situation and your goals</li>
              <li>
                Understand which marketing channels have and haven’t been
                working for you
              </li>
              <li>
                Identify 3 things that you can be doing today that will drive
                profitable growth.
              </li>
              <li>
                If we are a good fit, we’ll discuss what the next steps are. If
                not, the strategies that we discussed are yours to keep.
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-form-heading">
            Get Your Local Marketing Strategy Session
          </div>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
            <div className="form-inputs">
              <label> Your Name: </label>
              <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>
            <div className="form-inputs">
              <label> Your Email: </label>
              <input type="text" placeholder="Enter your E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className="form-inputs">
              <label> Select Your Country</label>
              <ReactFlagsSelect
                selected={flag}
                onSelect={(code) => setFlag(code)}
                placeholder="Your Country"
                searchable
                className="menu-flags" 
              />
            </div>
            <div className="form-inputs">
              <label> Your Phone: </label>
              <input type="text" placeholder="Enter your Phone Number" value={phone} required onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div className="form-inputs">
              <label> Select Date: </label>
              <input type="date" placeholder="Choose your meeting day" value={day} onChange={(e)=>setDay(e.target.value)} required />
            </div>
            {/* <div className="form-inputs">
              <label> Select Time: </label>
              <select className="form-inputs">
                {time.map(options => (
                    <options value={time.value}> {time.label} </options>
                ))}
              </select>
            </div> */}
            <div className="form-inputs">
              <label> Your Website: </label>
              <input type="text" placeholder="Enter your Website URL" value={url} onChange={(e)=>setUrl(e.target.value)} required />
            </div>
            <div className="form-inputs">
              <label> Your Marketing Goals </label>
              <textarea
                rows={5}
                cols={60}
                placeholder="Type Here"
                style={{padding:"8px 10px", background:"white", border:"2px solid black"}}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                required
              />
            </div>
            <button type='submit' className='submit-btn'>Submit</button>
          </form>
          ): (
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Thank you! for considering us. We'll identify your opportunities in our meeting.</div>
          )}
        </div>
      </div>
      <div className="company-section">
        <div className="company-cntr">
          <div className="company-heading">Don't Worry, You'll Be in Good Company</div>
          <div className="company-img-cntr">
           <div> <img src={work_away} alt="" /></div>  
           <div> <img src={woood} alt="" /> </div> 
           <div> <img src={work_214} alt="" /> </div>
           <div><img src={vicwest} alt="" style={{width:"250px"}}/></div>
          </div>
          <div className="company-img-cntr">
          <div> <img src={skyview} alt="" /></div>  
           <div> <img src={skyetec} alt="" /> </div> 
           <div> <img src={project_spaces} alt="" style={{width:"150px"}}/> </div>
           <div><img src={marcuson} alt="" /></div>
          </div>
        </div>
      </div>
      <div className="get-started-section" >
        <div className="get-started-cntr">
          <div className="get-started-left">
            <div className="get-started-heading">
              Ready To Grow Your Business Without Getting Burned?
            </div>
          </div>
          <div className="get-started-right">
            <button>Hech Yeah, Let's Get Started</button>
          </div>
        </div>
      </div>
      <div className="expect-section">
        <div className="expect-cntr" style={{paddingBottom:"6rem"}}>
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
          <div className="revenue-heading">Ready To Grow Your Business Without The B.S.?</div>
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
    </div>
  );
};

export default Contact;
