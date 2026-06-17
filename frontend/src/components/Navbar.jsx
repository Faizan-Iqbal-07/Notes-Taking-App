import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/create", label: "Create Note" },
  ];

  const linkClasses = (path) =>
    `block px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-500 text-white font-semibold"
        : "text-gray-300 hover:bg-white/10 hover:text-blue-300"
    }`;

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-blue-400" />
          <span className="text-2xl font-semibold text-blue-400 tracking-wide">
            NoteKeeper
          </span>
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClasses(link.to)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-gray-950/95 px-4 py-3">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={linkClasses(link.to)}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
