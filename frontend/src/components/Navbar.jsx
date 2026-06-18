import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-3"
      style={{
        background: "#ffffff",
        boxShadow:
          "0 2px 20px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: "2rem",
            color: "#2563eb",
            textDecoration: "none"
          }}
        >
          Book A Doctor
        </Link>

        <div
          className="d-flex align-items-center"
          style={{
            gap: "25px"
          }}
        >

          <Link
            className="nav-link-custom"
            to="/"
          >
            Home
          </Link>

          <Link
            className="nav-link-custom"
            to="/doctors"
          >
            Doctors
          </Link>

          <Link
            className="nav-link-custom"
            to="/patient-dashboard"
          >
            Dashboard
          </Link>
<Link
  className="nav-link-custom"
  to="/profile"
>
  Profile
</Link>

<Link
  className="nav-link-custom"
  to="/apply-doctor"
>
  Apply Doctor
</Link>
         
<Link
  className="btn reports-btn"
  to="/upload-report"
>
  Reports
</Link>
          <button
            className="btn btn-danger"
            onClick={() => {
              localStorage.clear();
              window.location.href =
                "/login";
            }}
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;