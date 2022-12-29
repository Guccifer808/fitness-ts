import { SelectedPage } from "@/shared/types";
import Logo from "@/assets/Logo.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* Col 1 */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            reiciendis dolore sint, velit voluptas consequuntur.
          </p>
          <p>&#169; Evogym All Rights Reserved.</p>
        </div>
        {/* Col 2 */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum dolor.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>(044)123-4567</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
