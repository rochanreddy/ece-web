import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-secondary/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="text-primary font-bold">⚡</span>
        <span className="font-heading font-bold text-sm">Lalitya Technologies</span>
      </div>
      <p className="text-xs text-muted-foreground font-body">© 2026 Lalitya Technologies. All rights reserved.</p>
      <div className="flex gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
