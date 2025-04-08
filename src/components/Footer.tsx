import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-blue-900 border-t border-white text-white py-6 text-center text-sm">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        
        {/* WhatsApp Icon & Numbers */}
        <div className="flex items-center gap-2">
          <Image src="/WhatsApp.svg" alt="WhatsApp" width={24} height={24} />
          <p>+91 96250 81353, +91 98113 40754</p>
        </div>

        {/* Email Icon & Address */}
        <div className="flex items-center gap-2">
          <Image src="/gmailicon.svg" alt="Email" width={24} height={24} />
          <a href="mailto:rajeevakumar1962@gmail.com" className="hover:underline">
            rajeevakumar1962@gmail.com
          </a>
        </div>

        {/* Facebook Icon */}
        <div className="flex items-center gap-2">
          <Image src="/fblogo.png" alt="Facebook" width={24} height={24} />
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Rajeeva Kumar on Facebook
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-4">© {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
