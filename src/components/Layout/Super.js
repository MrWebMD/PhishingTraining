const Super = (props) => {
  return (
    <header className="superHeader" data-aos="fade-in">
      <div className="pageBoundary superHeader__contentWrapper">{props.children}</div>
    </header>
  );
};

export default Super;
