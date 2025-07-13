import { FaArrowAltCircleRight } from "react-icons/fa";

export const HeroSection = () => {
  return( <main className="hero-section main">
    <div className="container grid grid-two-cols">
      <div className="hero-content">
        <h1 className="heading-xl" style={{textShadow:"revert"}}>
          Explore the World, One Country at a Time.
        </h1>
        <p className="paragraph" class="shadow-lg text-primary p-3 text-center bg-body-transparent rounded" >
          Discover the history, culture, and beauty of every nation. Sort,
          search, and filter through countries to find the details you need.
        </p>
        <button  type="button"  class="btn btn-outline-primary btn-lg" style={{padding: "1rem"}}>
          Start Exploring <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="hero-image">
        <img
          src="/images/world.png"
          alt="world is beauty"
          className="banner-image"
        />
      </div>
    </div>
  </main>
  );
};
