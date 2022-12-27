import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorNike from "@/assets/SponsorNike.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  //responsive
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image & Main */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* Main */}
        <div className=",t-32 z-10 md:basis-3/5">
          {/* Headings */}
          <div className="md:-mt-20">
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
        <div>
          <img alt="home-graphic" src={HomePageGraphic}></img>
        </div>
      </div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img src={SponsorForbes} alt="forbes" />
              <img src={SponsorNike} alt="nike" />
              <img src={SponsorRedBull} alt="redbull" />
              <img src={SponsorFortune} alt="fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
