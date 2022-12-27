import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

//Navbar component
type Props = {};

const Navbar = (props: Props) => {
  // flex class reusable for future use
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Left Side */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />
            {/* Right Side */}
            <div className={`${flexBetween} w-full`}>
              {/* Inner Left */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Plans</p>
                <p>Contact Us</p>
              </div>
              {/* Inner Right */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
