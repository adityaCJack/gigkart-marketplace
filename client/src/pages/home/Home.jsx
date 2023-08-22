import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projects } from "../../data";
import { Link } from "react-router-dom";

function Home() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="home">
      {!currentUser && <Featured />}

      <div className="explore">
        <div className="container">
          <div className="items">
            <Link to="/gigs?cat=design">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Graphics & Design</span>
              </div>
            </Link>
            <Link to="/gigs?cat=marketing">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                  alt=""
                />
                <div className="line"></div>

                <span>Digital Marketing</span>
              </div>
            </Link>
            <Link to="/gigs?cat=writing">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Writing & Translation</span>
              </div>
            </Link>

            <Link to="/gigs?cat=video">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Video & Animation</span>
              </div>
            </Link>

            <Link to="/gigs?cat=music">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Music & Audio</span>
              </div>
            </Link>

            <Link to="/gigs?cat=development">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Programming & Tech</span>
              </div>
            </Link>

            <Link to="/gigs?cat=business">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Business</span>
              </div>
            </Link>

            <Link to="/gigs?cat=lifestyle">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Lifestyle</span>
              </div>
            </Link>

            <Link to="/gigs?cat=data">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Data</span>
              </div>
            </Link>

            <Link to="/gigs?cat=photography">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Photography</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide> */}

      {!currentUser && (
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Quality work done quickly
              </div>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Protected payments, every time
              </div>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                24/7 support
              </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
            <div className="item">
              <iframe
                width="650px"
                height="420px"
                src="https://www.youtube.com/embed/ggHACGb0mtU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Gigkart <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Gigkart Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
