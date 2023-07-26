const Header = ({ index }) => {
  return (
    <header>
      <div className={`circle ${index >= 0 ? "active" : ""}`}>1</div>
      <div className={`circle ${index >= 1 ? "active" : ""}`}>2</div>
      <div className={`circle ${index >= 2 ? "active" : ""}`}>3</div>
    </header>
  );
};

export default Header;
