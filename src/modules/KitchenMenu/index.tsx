import React from "react";
import { StyledDiv } from "./style";
import FromTheKitchen from "./components/FromTheKitchen";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import settings from "content/settings/settings.json";

import Typography from "@/components/Typography";
import SectionBgImage from "@/components/SectionBgImage";

const KitchenMenu = () => {
  const { menu_service_charge_description = "" } = settings || {};
  return (
    <StyledDiv>
      <SectionBgImage
        title="From the Kitchen"
        description="Authentic Himalayan cuisine in downtown Cotati"
        bgImage="https://ucarecdn.com/77fa410d-bf68-4302-b095-f97271021eaf/-/progressive/yes/-/format/auto/-/resize/2000x/"
      />
      <Container fluid>
        <Row>
          <Col>
            <div className="menu-title-wrapper">
              <Typography as="h2">SIMPLY FRESH & MADE WITH LOVE.</Typography>
            </div>

            <div className="kitchen-menu-wrapper">
              <FromTheKitchen />
            </div>
          </Col>
        </Row>

        {menu_service_charge_description && (
          <Row>
            <Col>
              <div className="service-charge-info-wrapper">
                <Typography as="subtitle2">
                  {menu_service_charge_description}
                </Typography>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </StyledDiv>
  );
};

export default KitchenMenu;
