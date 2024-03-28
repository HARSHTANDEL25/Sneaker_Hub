// Import React and components from react-splide
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
 // Import the CSS directly

import BlogBox from "./BlogBox";
import { BlogsData } from "../../data";

// ... rest of your code

const Blogs = () => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1em",
    pagination: false,
    padding: "2em",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <div className="blogs section-padding">
      <div className="container">
        <h3 className="m-0 mb-3">Top Stories</h3>
        <Splide options={splideOptions}>
          {BlogsData.map((blogItem) => (
            <SplideSlide key={blogItem.id}>
              <BlogBox blogItem={blogItem} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Blogs;
