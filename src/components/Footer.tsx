import Link from "next/link";
import { ArrowUp, Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden p-0.5 shadow-md">
                <Image
                  src="/RCCG LOGO.jpeg"
                  alt="RCCG Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-xl leading-none">Praise Pavilion Parish</span>
                <span className="text-secondary text-[10px] uppercase tracking-widest font-sans font-bold mt-1">Zonal Headquarters</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              We are a parish of The Redeemed Christian Church of God, dedicated to soul winning and spiritual growth. Join us in our journey of faith.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all font-bold text-xs">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all font-bold text-xs">
                YT
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all font-bold text-xs">
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">Weekly Activities</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link href="#contact" className="hover:text-white transition-colors">Prayer Request</Link></li>
              <li><Link href="#give" className="hover:text-white transition-colors">Online Giving</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Member Portal</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Join a Workforce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">Stay updated with our latest news and events.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg outline-none focus:border-secondary w-full"
              />
              <button className="bg-secondary text-primary px-4 py-2 rounded-r-lg font-bold hover:bg-accent transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>© 2026 RCCG Praise Pavilion Parish. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
