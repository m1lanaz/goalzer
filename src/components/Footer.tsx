const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-myBlack text-center">
      <div>
        <p className="text-white p-6">Copyright Goalzer &copy;{year} </p>
      </div>
    </footer>
  );
};

export default Footer;
