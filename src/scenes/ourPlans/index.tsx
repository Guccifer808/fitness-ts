import { PlanType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Plan from "./Plan";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

//array of obj for plans carousel
const plans: Array<PlanType> = [
  {
    name: "Weight Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: image1,
  },
  {
    name: "Yoga Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: image2,
  },
  {
    name: "Fitness Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: image3,
  },
  {
    name: "CrossFit Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: image4,
  },
  {
    name: "Ab Core Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: image5,
  },
  {
    name: "Stretching Plans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurPlans = ({ setSelectedPage }: Props) => {
  //Scrollbar styles
  // const scrollBarStyles = `scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-32 overflow-y-scroll`;
  return (
    <section id="ourplans" className="w-full bg-primary-100 py-20 md:py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurPlans)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>OUR PLANS</HeaderText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quia, repudiandae harum laudantium deleniti dolorum
              molestias, voluptatum illo delectus, esse hic. Earum?
            </p>
          </div>
        </motion.div>
        <div className="scroll -mx-2 mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden scroll-smooth ">
          <ul className="w-[2800px] whitespace-nowrap">
            {plans.map((item: PlanType, index) => (
              <Plan
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurPlans;
