export const Footer = () => {
  return (
    <section
      className="bg-black text-white pt-30"
      style={{
        backgroundImage: "url('/Footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row">
        <div className="md:w-[70%] flex flex-col gap-6">
          <div>
            <div className="flex flex-col sm:flex-row gap-10 text-center sm:text-left items-center sm:items-start">
              <div className="sm:w-[40%]">
                <img src="/logo.png" alt="Logo" className="w-28 sm:w-32 mx-auto sm:mx-0 mb-4" />
                <p className="text-sm text-gray-300 leading-relaxed">
                  We are here to guide and build trust. <br />
                  Our mission is to create value and impact through transparency.
                </p>
              </div>

              {/* Useful Links */}
              <div className="sm:w-[25%]">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Hamie Storys</a></li>
                  <li><a href="#">Brand Value</a></li>
                  <li><a href="#">Donations</a></li>
                  <li><a href="#">Hamieverse</a></li>
                  <li><a href="#">Roadmap</a></li>
                  <li><a href="#">Tokenomics</a></li>
                </ul>
              </div>

              {/* More + */}
              <div className="sm:w-[25%]">
                <h3 className="text-lg font-semibold mb-4">More +</h3>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="#">How to Buy</a></li>
                  <li><a href="#">Team Meme Gallery</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </div>
        </div>
        <div className="md:w-[30%] flex justify-center md:justify-end items-center">
          <img
            src="/footer-avatar.png"
            alt="Footer Illustration"
            className="w-[180px] sm:w-[250px] max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
};
