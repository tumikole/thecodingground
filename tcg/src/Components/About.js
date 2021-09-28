import React, { Component } from "react";
import Aim from "../icons/aim.png";
import Application from "../icons/application.svg";
import Cost from "../icons/cost.svg";
import Duration from "../icons/duraion.svg";
import Outcome from "../icons/outcome.svg";
import Qualifies from "../icons/qualifies.svg";
import Where from "../icons/where.svg";
import Community from "../icons/community.svg";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="introSection">
          <h1>
            "THE " <span>CODING GROUND</span>
          </h1>
          <p>
            The Coding Ground is a software craftsmanship academy that focuses
            on the art and science of cultivating software developers with
            in-demand technical, leadership and interpersonal skills. Our
            intensive 18-month program helps students master core skills
            required to accelerate their careers in Information Technology as
            well as change the trajectory of their lives forever. We have
            strategic relationships with clients who employ or graduates into
            their companies. Our graduates work for all types of companies, from
            startups to Fortune 500 companies. Our dynamic, robust and welcoming
            network of alumni give our future apprentices a platform and network
            through which they can learn and share insights on their quest to
            software mastery.
          </p>
        </div>
        <div className="container">
          <div classname="service">
            <img src={Aim} alt="" />
            <h2>THE AIM</h2>
            <p className="icon-box-content">
              To teach computer programming and software craftsmanship to at
              least ten thousand young people between the ages of 16 and 25 with
              the aptitude and the right attitude to learn.
            </p>
          </div>
          <div classname="service">
            <img src={Where} alt="" />
            <h2>WHERE</h2>
            <p className="icon-box-content">
              The Grounds are located at The Riversands Incubation Hub which is
              located close to Diepsloot, Thembisa, and Olievenhoutbosch. No
              on-site accommodation is offered however an apprentice stipend is
              given to assist in travel costs.
            </p>
          </div>
          <div classname="service">
            <img src={Duration} alt="" />
            <h2>DURATION</h2>
            <p className="icon-box-content">
              The training curriculum runs over 18 months, our graduates are
              then employed at our clients for another 18 months.
            </p>
          </div>
          <div classname="service">
            <img src={Qualifies} alt="" />
            <h2>WHO QUALIFIES</h2>
            <p className="icon-box-content">
              Any individuals between the ages of 16 (guardian permission for
              minors required) and 25 can apply. This is a full-time commitment.
            </p>
          </div>
          <div classname="service">
            <img src={Application} alt="" />
            <h2>APPLICATIONS</h2>
            <p className="icon-box-content">
              Once you've filled in the application form, you will be notified
              when we're ready for you to complete an online assessment. Should
              you qualify, you will take part in a Bootcamp with other students
              from which final students are selected.
            </p>
          </div>
          <div classname="service">
            <img src={Cost} alt="" />
            <h2>COSTS & FEES</h2>
            <p className="icon-box-content">
              Students are sponsored and have a requirement to work for our
              clients as part of your tuition. Don't be fooled however, you will
              have to work extremely hard to get through the course.
            </p>
          </div>
          <div classname="service">
            <img src={Outcome} alt="" />
            <h2>COURSE OUTCOME</h2>
            <p className="icon-box-content">
              A skill to work as an apprentice software craftsman. We will show
              you how to embark on a lifelong journey of mastering software
              development.
            </p>
          </div>
          <div classname="service">
            <img src={Community} alt="" />
            <h2>COMMUNITY INVOLVEMENT</h2>
            <p className="icon-box-content">
              It is crucial for our apprentices to be exposed to numerous
              craftsmen, so we will frequently schedule talks and contact
              sessions with other craftsmen.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
