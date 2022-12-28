import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HeaderText from "@/shared/HeaderText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  //Form styling
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 mt-5 placeholder-white`;

  //Form functionality
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    //if not valid prevent page refresh
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>
            <span className="text-primary-500">JOIN NOW</span> TO GET FIT
          </HeaderText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            similique atque voluptas veniam harum obcaecati sit officiis illum
            totam facere.
          </p>
        </motion.div>
        {/* Form and image*/}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* React hook form */}
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/712cad5ade0530064a9c927c1ca9ff56"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 50 })}
              />
              {/* Errors validation, handling */}
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This is required field."}
                  {errors.name.type === "maxLength" &&
                    "Please make it shorter."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="SUBJECT"
                {...register("subject", { required: false, maxLength: 75 })}
              />
              {errors.subject && (
                <p className="mt-1 text-primary-500">
                  {errors.subject.type === "maxLength" &&
                    "Please make it shorter."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  maxLength: 75,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This is required field."}
                  {errors.email.type === "pattern" && "Invalid email."}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={5}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 750 })}
              />
              {/* Errors validation, handling */}
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This is required field."}
                  {errors.message.type === "maxLength" &&
                    "Maximum lenght is 750 characters."}
                </p>
              )}
              {/* Submit button */}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {/* Image */}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
