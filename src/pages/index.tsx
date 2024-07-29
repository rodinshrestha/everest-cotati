import Banner from "@/modules/Banner";
import BaseLayout from "../layouts/BaseLayout";
import React from "react";

import OurStory from "@/components/OurStory";

import seo from "content/seo/home-page-seo.json";
import Seo from "@/components/Seo";
import SectionBgImage from "@/components/SectionBgImage";

const Home = () => {
  const {
    seo_title = "Sherpa Kitchen - St. Helena",
    meta_description = "Best Indian, Nepalese, Tibetan restaurant in St. Helena, CA",
    meta_keywords = "indian restaurant in st. helena, indian food-st. helena, indian cuisine-st. helena, himalayan kitchen- st. helena, himalayas- st. helena, sherpa kitchen- st. helena, st. helena lunch",
  } = seo || {};

  return (
    <BaseLayout>
      <Seo
        meta_description={meta_description}
        meta_keywords={meta_keywords}
        seo_title={seo_title}
      />

      {/* <Banner /> */}
      <SectionBgImage
        title="About Us"
        description="Authentic Himalayan cuisine in downtown Cotati"
        bgImage="https://ucarecdn.com/1e88b67c-eab2-4ed5-8704-a754159f9424/-/progressive/yes/-/format/auto/-/resize/2000x/"
      />

      <OurStory />
    </BaseLayout>
  );
};
export default Home;
