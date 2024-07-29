import React from "react";
import Starter from "./components/Starter";
import Momo from "./components/Momo";
import VegetableTarkariCurry from "./components/VegetableTarkariCurry";
import { StyledDiv } from "./style";
import ChickenCurry from "./components/ChickenCurry";
import LambCurry from "./components/LambCurry";
import SeaFoodCurry from "./components/SeaFoodCurry";
import Biryani from "./components/Biryani";
import Chowmein from "./components/Chowmein";
import NonAlcholicBeverage from "./components/NonAlcholicBeverage";
import Tandoori from "./components/Tandoori";
import Appetizer from "./components/Appetizer";
import TikkaMasala from "./components/TikkaMasala";
import NaanSideItem from "./components/NaanSideItem";
import AddVegetableMeat from "./components/AddVegetableMeat";

const FromTheKitchen = () => {
  return (
    <StyledDiv>
      <Appetizer />
      <Starter />
      <Tandoori />
      <Momo />
      <TikkaMasala />
      <ChickenCurry />
      <LambCurry />
      <VegetableTarkariCurry />
      <SeaFoodCurry />
      <Biryani />
      <NaanSideItem />
      <AddVegetableMeat />
      <NonAlcholicBeverage />
      {/* <Chowmein />

      <Tandori />
      <Sides /> */}
    </StyledDiv>
  );
};

export default FromTheKitchen;
