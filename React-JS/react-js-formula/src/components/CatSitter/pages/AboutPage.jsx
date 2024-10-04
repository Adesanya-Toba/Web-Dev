import NavBar from "../shared/NavBar";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-start justify-center min-h-screen bg-amber-50 font-open">
        <div className="flex flex-col flex-wrap items-center justify-center w-full max-w-5xl px-6">
          <img
            className="w-80"
            src="https://static-task-assets.react-formula.com/899260.png"
            alt=""
          />
          <h1 className="my-4 text-4xl text-green-800 font-bubblegum">
            About Us
          </h1>
          <p className="my-4 leading-relaxed text-amber-900/70">
            &nbsp;&nbsp;&nbsp;&nbsp;Our mission at Carl's Cat Sitters is to
            create a stress-free experience for both cats and their owners. We
            believe in building trust and forming lasting relationships with our
            clients and their furry companions. Our sitters undergo rigorous
            training and background checks to ensure they are not only skilled
            but also reliable and trustworthy. With Carl's Cat Sitters, you can
            have peace of mind knowing your cat is in safe and caring hands.
            Whether you need daily visits, overnight stays, or extended care, we
            are here to provide the love and attention your cat deserves, making
            us the trusted choice for cat sitting services in the community.
          </p>
          <p className="my-4 leading-relaxed text-amber-900/70">
            &nbsp;&nbsp;&nbsp;&nbsp;At Carl's Cat Sitters, we offer a range of
            services tailored to meet the specific needs of your cat, ensuring
            they receive the best care while you’re away. From feeding and
            playtime to grooming and administering medication, our sitters are
            trained to handle all aspects of cat care with the utmost
            professionalism and compassion.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
