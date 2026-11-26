import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end={to === "/"}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
