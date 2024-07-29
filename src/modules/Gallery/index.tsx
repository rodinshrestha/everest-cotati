import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";

import ImageLightbox from "@/components/ImageLightBox";
import { getLightBoxImage } from "./utils/get-light-box-image";
import ImageList from "./components/ImageList";
import Typography from "@/components/Typography";
import SectionBgImage from "@/components/SectionBgImage";

type Props = {
  data: Array<{ imageSrc: string }>;
};

const Gallery = ({ data }: Props) => {
  const [index, setIndex] = React.useState<number | null>(null);

  return (
    <StyledSection>
      <SectionBgImage
        bgImage="https://ucarecdn.com/0acfe6bf-a356-4fe4-a837-bcaa02311ae8/-/progressive/yes/-/format/auto/-/resize/2000x/"
        title="GALLERY"
        description="Authentic Himalayan cuisine in downtown Cotati"
      />
      <Container fluid>
        <Row>
          <Col>
            <div className="gallery-wrapper">
              <div className="gallery-image-wrapper">
                {data?.map((x, i) => {
                  if (!x.imageSrc) return;

                  return (
                    <ImageList
                      imageUrl={x.imageSrc}
                      key={i}
                      onClick={() => setIndex(i)}
                    />
                  );
                })}

                <ImageLightbox
                  images={getLightBoxImage(data)}
                  index={index as number}
                  setIndex={setIndex}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Gallery;
