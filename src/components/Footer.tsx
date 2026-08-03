import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
    {children}
  </svg>
);

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585214638171",
    accent: "bg-[#1D5BD6]",
    icon: (
      <SocialIcon>
        <path
          d="M17.91 26V17.2h3.05l.46-3.53h-3.51V9.4c0-1.02.29-1.72 1.77-1.72H21.5V4.42c-.31-.04-1.4-.13-2.66-.13-2.63 0-4.44 1.61-4.44 4.57v2.81H11.3v3.53h3.1V26h3.51Z"
          fill="white"
        />
      </SocialIcon>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rccgpraisepavillion/",
    accent: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    icon: (
      <SocialIcon>
        <rect x="7" y="7" width="18" height="18" rx="5" fill="none" stroke="white" strokeWidth="2.2" />
        <circle cx="16" cy="16" r="4.4" fill="none" stroke="white" strokeWidth="2.2" />
        <circle cx="21.9" cy="10.1" r="1.5" fill="white" />
      </SocialIcon>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@rccgpraisepavillion",
    accent: "bg-[#000000]",
    icon: (
      <SocialIcon>
        <path d="M18.4 8.5c.98.4 1.74.98 2.35 1.75.5.64.78 1.4.78 2.2v2.3a8 8 0 0 1-2.45-1.1v6.65c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.24 0 .48.02.71.08v2.4a2.1 2.1 0 0 0-1.46.76 2.15 2.15 0 0 0 0 3.04c0 1.44 1.17 2.6 2.6 2.6s2.6-1.16 2.6-2.6V8.5h1.87Z" fill="white"/>
        <path d="M18.4 8.5c.98.4 1.74.98 2.35 1.75.5.64.78 1.4.78 2.2v2.3a8 8 0 0 1-2.45-1.1v6.65c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.24 0 .48.02.71.08v2.4a2.1 2.1 0 0 0-1.46.76 2.15 2.15 0 0 0 0 3.04c0 1.44 1.17 2.6 2.6 2.6s2.6-1.16 2.6-2.6V8.5h1.87Z" fill="url(#tikTokGlow)" opacity="0.75"/>
        <defs>
          <linearGradient id="tikTokGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00F2EA" />
            <stop offset="100%" stopColor="#FF004F" />
          </linearGradient>
        </defs>
      </SocialIcon>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@rccgpraisepavillionparish",
    accent: "bg-[#FF0000]",
    icon: (
      <SocialIcon>
        <rect x="5" y="8" width="22" height="16" rx="4" fill="white" opacity="0.95" />
        <path d="m13.5 12.2 8.1 4.8-8.1 4.8v-9.6Z" fill="#FF0000" />
      </SocialIcon>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2349027088871",
    accent: "bg-[#25D366]",
    icon: (
      <SocialIcon>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white" />
      </SocialIcon>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mb-14">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/church-logo-dark-transparent.png"
                alt="RCCG Logo"
                width={300}
                height={80}
                className="h-10 w-auto sm:h-12 md:h-14 object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              We are a parish of The Redeemed Christian Church of God, dedicated to soul winning and spiritual growth. Join us in our journey of faith.
            </p>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, accent, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/15 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accent}`}
                    title={label}
                  >
                    <span className="relative z-10 flex items-center justify-center">{icon}</span>
                    <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
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

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© 2026 RCCG Praise Pavilion Parish. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
