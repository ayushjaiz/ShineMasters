// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import React from "react";
import heroImage from "../../img/hero.jpg";
import { Link } from "react-router-dom";
//

const Hero = () => {
  return (
    // <div className="flex max-w-container mx-auto gap-8 h-[550px]">
    //   <div className="flex flex-col justify-center align-middle gap-6">
    //     <h1 className="text-5xl">Trusted Home Makers</h1>
    //     <p className="text-2xl">
    //     Shinemasters is the simplest way to get your life in order with the right domestic help
    //     </p>
    //   </div>
    //   <div>
    //     <img
    //       src="https://shinemastersv1.onrender.com/img/main/m3.jpeg"
    //       alt="Example"
    //       className="w-[800px] h-full object-cover object-center"
    //     />
    //   </div>
    // </div>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              height={600}
              alt=""
              src={heroImage}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Trusted <span className="text-primary">Home Makers</span>
            </h2>

            <p className="mt-4 text-secondary text-xl">
              Shinemasters is the simplest way to get your life in order with
              the right domestic help
            </p>
            <Button className="mt-6" asChild>
              <Link to="/services">Explore Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
