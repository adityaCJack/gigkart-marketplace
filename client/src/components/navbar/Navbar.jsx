import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={pathname === "/" && active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Gigkart</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <span className="text">Home</span>
          </Link>
          <Link className="link" to="/gigs?cat=">
            <span className="text">All Gigs</span>
          </Link>
          {/* {!currentUser?.isSeller && <span>Become a Seller</span>} */}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        My Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=design"
            >
              Design
            </Link>
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=development"
            >
              Development
            </Link>
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=animation"
            >
              Animation
            </Link>
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=music"
            >
              Music
            </Link>
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=marketing"
            >
              Digital Marketing
            </Link>
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=writing"
            >
              Writing
            </Link>
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=business"
            >
              Business
            </Link>
            <Link
              className={pathname === "/" ? "link" : "link menu-links-non-home"}
              to="/gigs?cat=lifestyle"
            >
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )} */}
    </div>
  );
}

export default Navbar;
