const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex justify-around py-10px bg-myGreen pt-10">
      <div className="text-2xl font-Nunito font-extrabold text-white">
        GoalZer
      </div>
      <div>
        <a className="text-white text-m font-medium hover:cursor-pointer">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
