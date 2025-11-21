import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": ["Home", "About Us", "Admissions", "Academics", "News & Events"],
    Resources: ["Parent Portal", "Student Portal", "Career Opportunities", "Alumni Network", "Downloads"],
    Support: ["Contact Us", "FAQs", "Privacy Policy", "Terms & Conditions", "Sitemap"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Bright Future Academy</span>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Empowering minds, shaping futures. Join us in our journey of academic excellence
              and holistic development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-background/80 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {currentYear} Bright Future Academy. All rights reserved.
            </p>
            <p className="text-background/70 text-sm">
              Designed with ❤️ for Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
