import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever"
        link="/products/67ca38f0251eba358e999453/"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add studio display and color-matched Magic accessories to your bag after you configure yout Mac Mini"
        link="/products/67ca38f0251eba358e99945b/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
