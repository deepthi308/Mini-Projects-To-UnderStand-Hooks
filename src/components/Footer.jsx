const Footer = ({ setIndex, index }) => {
  const handlePrev = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 0;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 2) {
        return 2;
      }
      return prevIndex + 1;
    });
  };

  return (
    <footer>
      <button
        onClick={handlePrev}
        className={`btn ${index === 0 ? "disabled" : ""}`}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className={`btn ${index === 2 ? "disabled" : ""}`}
      >
        Next
      </button>
    </footer>
  );
};

export default Footer;
