const Footer = () => {
    return (
      <div>
        <footer className="footer bg-white text-neutral-content p-4 flex justify-center items-center">
          {/* Footer Content */}
          <div className="flex items-center justify-center text-center site-text">
            <p>Copyright © {new Date().getFullYear()} <span className="site-primary-text">N-Mart</span> - All right reserved</p>
          </div>
          {/* Footer Content End */}
        </footer>
      </div>
    );
  };
  
  export default Footer;
  