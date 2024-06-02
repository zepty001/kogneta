import React from "react";
import "./Blog.scss";
import { opportunity } from "../../assets";
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <div className="blog">
        <div className="blog-cntr">
          <div className="blog-heading">Local Marketing Blog</div>
          <div className="blog-text">
            Actionable Local Marketing Strategies You Can Use Today
            <br />
            <br />
            Are you struggling to profitably and predictably grow your business?
            Then stay informed on the newest SEO, PPC and other digital
            marketing strategies and techniques that you can use to start
            growing your franchise. We’ll keep you up to date with our digital
            marketing newsletter dedicated to franchises that will provide you
            with the latest in digital marketing strategies and techniques
            delivered straight to your inbox.
          </div>
        </div>
      </div>
      <div className="schedule">
        <div className="schedule-cntr">
          <div className="schedule-image">
            <img src={opportunity} alt="" />
          </div>
          <div className="schedule-content">
                <div className="schedule-heading">
                Schedule a Free No B.S. Strategy Session
                </div>
                <div className="schedule-text">
                We’ll work with you to learn and identify marketing opportunities
                that you can start using to grow your business whether we work
                with each other or not.
                </div>
                <Link to='/contact'><button>Schedule a Free Session</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
