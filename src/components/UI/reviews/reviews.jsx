import TestimonialSlider from "../slider/TestimonialSlider";
import { Container, Row, Col } from "reactstrap";
import networkImg from "../reviews/network.png";

function Reviews() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="testimonial ">
              <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
              <h2 className="testimonial__title mb-4">
                What our <span>customers</span> are saying
              </h2>
              <p className="testimonial__title mb-4">
                <span>Reviews</span>
              </p>

              <TestimonialSlider />
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={networkImg} alt="testimonial-img" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Reviews;
