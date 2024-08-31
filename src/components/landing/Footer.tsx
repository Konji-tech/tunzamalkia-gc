import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-fuchsia-400 text-white py-4">
      <div className="max-w-[85rem] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold">About Us</h2>
            <p className="mt-2 text-sm">
              Empowering women with knowledge about sexual and reproductive health.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-fuchsia-300">About</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-fuchsia-300">Resources</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-fuchsia-300">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 text-sm">
          &copy; {new Date().getFullYear()} TunzaMalkia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
