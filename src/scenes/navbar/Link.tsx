import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  //passing whatever page id to lowercase for href
  //removing spaces with regexp
  // using "as" keyword to let TS know to threat this as SelectedPage to fix errors
  const lowerCasePageId = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePageId ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePageId}`}
      onClick={() => setSelectedPage(lowerCasePageId)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
