export const Navbar = () => {
  return (
    <header>
      <div className="header | u-container">
        <div className="header__logo">Logo</div>

        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button className="button">Make Enquiry</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
