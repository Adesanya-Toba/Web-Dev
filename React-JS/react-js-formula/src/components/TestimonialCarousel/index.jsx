import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../constants/testimonials";

const TestimonialCarousel = () => {
  const [startIdx, setStartIdx] = useState(1);

  // Using slice to render only items in the array.
  // And we use state to change the starting index of the new sliced array.
  const testimonialCards = testimonials
    .slice(startIdx, startIdx + 3)
    .map((testimonial, idx) => (
      <TestimonialCard key={idx} testimonial={testimonial} />
    ));

  return (
    <div className="flex items-center p-4">
      <button
        onClick={() => {
          if (startIdx > 0) {
            setStartIdx(startIdx - 1);
          }
        }}
      >
        <i className="fa-regular fa-square-chevron-left text-2xl text-orange-500"></i>
      </button>
      <div className="flex m-4 flex-wrap justify-center">
        {testimonialCards}
      </div>
      <button
        onClick={() => {
          if (startIdx < testimonials.length - 3) {
            setStartIdx(startIdx + 1);
          }
        }}
      >
        <i className="fa-regular fa-square-chevron-right text-2xl text-orange-500"></i>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
