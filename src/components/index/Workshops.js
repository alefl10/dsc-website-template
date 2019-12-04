import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import infoSession from '../../images/info-session.png'

export default () => (
  <section
    id="workshops"
    className="section-spacer workshops-section bg-very__gray"
  >
    <div className="container">
      <header className="section-header text-center">
        <h2 className="section-title">Events & Workshops</h2>
        <p className="section-subtitle">
          Come learn, share and connect with us in person.
        </p>
      </header>
      <div className="workshops-type-switch">
        <ul className="nav nav-pills justify-content-center js-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#upcoming">
              Upcoming Events
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className="tab-pane active"
          id="upcoming"
          role="tabpanel"
          aria-labelledby="upcoming"
        >
          <section id="hi" className="section-spacer bg-very__gray">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <div className="feature-list-image">
                    <img
                      className="card-img-top"
                      src={infoSession}
                      alt="Tech Workshop"
                    />
                  </div>
                </div>
                <div className="col-sm-5 ml-auto">
                  <div className="feature-list-wrapper">
                    <div className="content-header">
                      <h2 className="content-title">Info Session</h2>
                      <a href="https://docs.google.com/forms/d/1l4hnnVPG13ZwxFdUXS9Ffn7OBlFt_MbYTB26rPh0iCE/edit">Register here</a>
                      <hr />
                      <h6>DATE : 12th December 2019 - 6:00 PM</h6>
                      <h6>VENUE : #To be defined</h6>
                      <p>Discover the opportunities that a Developer Student Club offers you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="tab-pane"
          id="past"
          role="tabpanel"
          aria-labelledby="past"
        >
          <section id="hi" className="section-spacer bg-very__gray">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="feature-list-image">
                    <img
                      className="card-img-top"
                      src={null}
                      alt="Tech Workshop"
                      width="100"
                      height="100"
                    />
                  </div>
                </div>
                <div className="col-sm-5 ml-auto">
                  <div className="feature-list-wrapper">
                    <div className="content-header">
                      <h2 className="content-title">Tech Workshop</h2>
                      <hr />
                      <h6>TIME : 10:00 AM - 02:00 PM (Weekly)</h6>
                      <h6>VENUE : TechHub EKSU</h6>
                      <p>We learnt web and android development</p>
                    </div>
                    <a href="#" className="past-event" rel="noopener">
                      EVENT PHOTOS&nbsp;&nbsp;<i className="fas fa-camera"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-spacer">
            <div className="container">
              <div className="row flex-column-reverse flex-sm-row align-items-cengit ter">
                <div className="col-sm-5 mr-auto">
                  <div className="feature-list-wrapper">
                    <div className="content-header">
                      <h2 className="content-title">DSC SSA Leads Summit</h2>
                      <hr />
                      <h6>
                        DATE : 25<sup>th</sup> July - 28<sup>th</sup>July 2018
                      </h6>
                      <h6>WHERE : Lagos, Nigeria.</h6>
                      <p>
                        One of our lead organizers was privileged to represent
                        the community in a lead summit hosted by Google Nigeria
                        where he also talked about goal-setting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-list-image">
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
)
