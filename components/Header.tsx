import Link from "next/link";

export default function Header({ sticky = false }: { sticky?: boolean }) {
  return (
    <header className={`header navbar-area ${sticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" href="/">
                  AgriCoreAi
                </Link>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#features" className="nav-link">
                        Features
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#overview" className="nav-link">
                        Overview
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#impact" className="nav-link">
                        Impact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#team" className="nav-link">
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/support" className="nav-link">
                        Support
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/#contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="button add-list-button">
                  <a href="#contact" className="btn">
                    Get it now
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
