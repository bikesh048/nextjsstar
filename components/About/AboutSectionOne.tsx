import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about">
      <div className="container pt-44 pb-24">
        {/* <div className=" border-b border-body-color/[.15] dark:border-white/[.15]"> */}
          <div className=" -mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="See the World in a New Light: Unleash Your Style with Our Eyewear!"
                paragraph="Welcome to our premier eyewear shop, where fashion meets function to enhance your vision and elevate your style. We believe that eyewear is not just about practicality; it's an expression of individuality and personality. Step inside our store, and you'll be greeted by an extensive collection of frames carefully curated to cater to every taste and preference. From timeless classics to the latest trendsetters, we have something to suit every face shape, age, and lifestyle."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Prescription Sunglasses" />
                    <List text="Contact Lenses" />
                    <List text="Computer Glasses" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Fancy Sunglasess" />
                    <List text="Prescription Glasses" />
                    <List text="Progressive Glasses" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              {/* <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              > */}
                <div className="wow fadeInUp relative z-10 rounded-md aspect-[25/24] bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11" data-wow-delay=".2s">
                <Image
                  src="/images/about/about-image.jpg"
                  alt="about-image"
                  fill
                  className="object-contain p-2 rounded-md w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default AboutSectionOne;
