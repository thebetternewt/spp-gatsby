import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";

const testimonials = [
  {
    snippet: "She's the best we know.",
    full: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
    quibusdam asperiores, omnis adipisci quae pariatur optio magnam
    necessitatibus reiciendis quo veniam ad officia dignissimos, repellat
    earum accusamus maxime facilis recusandae illo itaque sed tempore
    delectus praesentium ullam. Soluta, eum deserunt?`,
  },
  {
    snippet: "You need to use her.",
    full: `Sarah is great. You need to use her. You won't be disappointed!`,
  },
  {
    snippet: "Make your memories count.",
    full: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
           exercitationem nulla, expedita earum atque cum velit ducimus sapiente
           sit corporis dolorem quibusdam similique ipsam ab quia illo quod,
           laborum enim voluptas possimus reprehenderit dolores ea! Nulla.`,
  },
];

const Testimonials = styled.section`
  padding: 4rem 1rem;
  text-align: center;
  background-color: #f4e7e2;
  height: 400px;
  position: relative;

  .testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    margin: 0 auto;
    padding: 1rem;
  }

  h3 {
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0 0 3rem;
  }

  p {
    font-style: italic;
    line-height: 1.5em;
    width: 70%;
    font-size: 0.95rem;
  }
`;

export default () => {
  const [testimonial, setTestimonial] = useState(0);

  // Set refs for state since the updated state is not accessible to setInterval
  // --> https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
  const testimonialRef = useRef(testimonial);
  const setTestimonialRef = useRef(setTestimonial);
  testimonialRef.current = testimonial;

  const nextTestimonial = () => {
    if (testimonial + 1 > testimonials.length - 1) {
      return 0;
    }

    return testimonial + 1;
  };

  const fades = useTransition(testimonial, item => item, {
    from: {
      opacity: 0,
      transform: `translate3d(100%,0,0)`,
    },
    enter: {
      opacity: 1,
      transform: `translate3d(0,0,0)`,
    },
    leave: {
      opacity: 0,
      transform: `translate3d(-100%,0,0)`,
    },
    config: config.slow,
  });

  useEffect(() => {
    const rotateTestimonial = setTimeout(() => {
      setTestimonialRef.current(nextTestimonial());
    }, 3000);

    return () => clearTimeout(rotateTestimonial);
  }, [testimonial]);

  return (
    <Testimonials>
      {fades.map(({ item, props: fade, key }) => (
        <animated.div style={fade} className="testimonial" key={key}>
          <h3>"{testimonials[item].snippet}"</h3>
          <p>{testimonials[item].full}</p>
        </animated.div>
      ))}
    </Testimonials>
  );
};
