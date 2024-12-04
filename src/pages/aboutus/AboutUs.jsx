import React from "react";
import LedLights from "../../components/carasol/LedLights";

const AboutUs = () => {
  return (
    <div className="max-w-[1400px] mx-auto sm:px-14 px-5 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">About Us</h1>
        <p className="text-xl text-slate-400 mt-4">
          Welcome to GreatLumen, your trusted partner in innovative LED lighting solutions.
        </p>
      </div>

      <section className=" mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
        <p className="text-lg leading-relaxed text-slate-400">
          At GreatLumen, our mission is simple — to provide advanced, sustainable, and energy-efficient
          lighting solutions that make a difference in the way the world shines. We aim to be a global leader
          in LED lighting innovation, delivering reliable, eco-friendly, and affordable solutions that meet the
          diverse needs of our customers.
        </p>
      </section>

     <div className=" flex  items-center lg:gap-10 gap-5 max-lg:flex-col">
     <div className=" mb-20 flex-1 lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Products</h2>
        <p className="text-lg leading-relaxed text-slate-400 mb-4">
          We specialize in manufacturing the following LED lighting products:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-slate-400">
          <li>LED Panel Lights - Ideal for offices, homes, and commercial spaces.</li>
          <li>Flood Lights - Powerful illumination for outdoor spaces and large areas.</li>
          <li>COB Lamps - Compact and energy-efficient lighting solutions.</li>
          <li>Hanging LED Lights - Stylish lighting for residential and commercial applications.</li>
          <li>Street Lights - Durable and energy-efficient lighting for streets and highways.</li>
          <li>High Bay LED Lights - Perfect for industrial spaces like warehouses and factories.</li>
          <li>Driver LED Lights - Essential for efficient power distribution in LED systems.</li>
          <li>Wall-Mounted LED Lights - Practical and decorative lighting for both indoor and outdoor use.</li>
        </ul>
      </div>
      <div className=" lg:w-[40%] w-full ml-auto">
        <LedLights/>

      </div>
     </div>

      <section className=" mb-20 mt-20
      ">
        <h2 className="text-2xl font-semibold mb-4 text-white">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-slate-400">
          <li>Innovation in LED technology for smarter, eco-friendly lighting.</li>
          <li>Uncompromising quality through rigorous product testing and checks.</li>
          <li>Energy-efficient products that reduce costs while enhancing performance.</li>
          <li>Customization of lighting solutions to fit unique client needs.</li>
          <li>Customer-centric approach for long-term relationships and satisfaction.</li>
        </ul>
      </section>

      <section className=" mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
        <p className="text-lg leading-relaxed text-slate-400">
          To be the go-to brand for lighting solutions globally, recognized for our innovation, quality,
          and commitment to sustainability. We envision a world powered by energy-efficient lighting that
          contributes to a greener, brighter, and safer future.
        </p>
      </section>

      <section className=" mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-slate-400">
          <li>Sustainability - Reducing the carbon footprint with eco-friendly products.</li>
          <li>Integrity - Transparent and ethical business practices.</li>
          <li>Excellence - Always exceeding customer expectations with our products and services.</li>
          <li>Customer Focus - Prioritizing customer satisfaction and needs.</li>
        </ul>
      </section>

   
    </div>
  );
};

export default AboutUs;
