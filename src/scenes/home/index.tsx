import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageText.png";
import SponsorRedBull from "@/assets/HomePageText.png";
import SponsorForbess from "@/assets/HomePageText.png";
import SponsorFortune from "@/assets/HomePageText.png";
import SponsorNike from "@/assets/HomePageText.png";
import { classNames } from "classnames";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  //responsive
  const isAboveMediumScreenshots = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image & Main */}
      <div>
        {/* Main */}
        <div>
          {/* Headings */}
          <div>
            <div>
              <div>
                <img alt="home-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Lorem ipsum. Dolor sit amet consectetur adipisicing elit. Aliquid
              doloribus qui dignissimos minima animi nesciunt dolorem ratione
              aperiam omnis tempore!
            </p>
          </div>
          {/* Buttons */}
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Discover More</p>
          </AnchorLink>
        </div>

        {/* Image */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
