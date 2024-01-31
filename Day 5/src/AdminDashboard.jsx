import './AdminDashboard.css';
// const AdminDashboard = () => {
   /* return (
        <div>
          <title>Document</title>
          <div className="container">
            <div className="header">
              <div className="search-bar">
                <span><i className="fa-solid fa-magnifying-glass search-icon" /></span>
                <input type="text" />
              </div>
              <div className="user-menu">
                <div className="notifications">
                  <span><i className="fa-regular fa-bell" /></span>
                </div>
                <div className="user-avatar-small" />
                <div className="user-display-name">Morgan Oakley</div>
              </div>
              <div className="welcome-user">
                <div className="user-avatar-large" />
                <div className="greeting">
                  <div className="greeting-text">Hi there,</div>
                  <div className="greeting-user">Morgan Oakley (@morgan)</div>
                </div>
              </div>
              <div className="menu">
                <a className="menu-button" href>New</a>
                <a className="menu-button" href>Upload</a>
                <a className="menu-button" href>Share</a>
              </div>
            </div>
            <div className="sidebar">
              <div className="logo-container">
                <div className="logo-text">Dashboard</div>
              </div>
              <div className="side-menu-primary">
                <a href className><ul className="menu">
                    <li className="side-menu-home menu-item">Home</li>
                    <li className="side-menu-profile menu-item">Hotels</li>
                    <li className="side-menu-messages menu-item">Messages</li>
                    <li className="side-menu-history menu-item">History</li>
                    <li className="side-menu-tasks menu-item">Tasks</li>
                    <li className="side-menu-communities menu-item">Communities</li>
                  </ul></a>
              </div>
              <div className="side-menu-secondary">
                <a href>
                  <ul className="menu">
                    <li className="side-menu-settings menu-item">Settings</li>
                    <li className="side-menu-support menu-item">Support</li>
                    <li className="side-menu-privacy menu-item">Privacy</li>
                  </ul>
                </a>
              </div>
            </div>
            <div className="main-content">
              <div className="projects-container">
                <div className="projects-header main-content-header">BootHouse</div>
                <div className="projects">
                  {/* CARDS  */
                  /*<div className="project-card card">
                    <a href><div className="card-title">Super Cool Project</div>
                      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></a>
                    <div className="card-buttons">
                      <a href><div className="card-icon-favorite card-icons"><i className="fa-regular fa-star" /></div></a>
                      <a href><div className="card-icon-follow card-icons"><i className="fa-regular fa-eye" /></div></a>
                      <a href><div className="card-icon-share card-icons"><i className="fas fa-share-alt" /></div></a>
                    </div>
                  </div>
                  <div className="project-card card">
                    <a href><div className="card-title">Super Cool Project</div>
                      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></a>
                    <div className="card-buttons">
                      <a href><div className="card-icon-favorite card-icons"><i className="fa-regular fa-star" /></div></a>
                      <a href><div className="card-icon-follow card-icons"><i className="fa-regular fa-eye" /></div></a>
                      <a href><div className="card-icon-share card-icons"><i className="fas fa-share-alt" /></div></a>
                    </div>
                  </div>
                  <div className="project-card card">
                    <a href><div className="card-title">Super Cool Project</div>
                      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></a>
                    <div className="card-buttons">
                      <a href><div className="card-icon-favorite card-icons"><i className="fa-regular fa-star" /></div></a>
                      <a href><div className="card-icon-follow card-icons"><i className="fa-regular fa-eye" /></div></a>
                      <a href><div className="card-icon-share card-icons"><i className="fas fa-share-alt" /></div></a>
                    </div>
                  </div>
                  <div className="project-card card">
                    <a href><div className="card-title">Super Cool Project</div>
                      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></a>
                    <div className="card-buttons">
                      <a href><div className="card-icon-favorite card-icons"><i className="fa-regular fa-star" /></div></a>
                      <a href><div className="card-icon-follow card-icons"><i className="fa-regular fa-eye" /></div></a>
                      <a href><div className="card-icon-share card-icons"><i className="fas fa-share-alt" /></div></a>
                    </div>
                  </div>
                  <div className="project-card card">
                    <a href><div className="card-title">Super Cool Project</div>
                      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></a>
                    <div className="card-buttons">
                      <a href><div className="card-icon-favorite card-icons"><i className="fa-regular fa-star" /></div></a>
                      <a href><div className="card-icon-follow card-icons"><i className="fa-regular fa-eye" /></div></a>
                      <a href><div className="card-icon-share card-icons"><i className="fas fa-share-alt" /></div></a>
                    </div>
                  </div>
                  <div className="project-card card">
                    <a href><div className="card-title">Super Cool Project</div>
                      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></a>
                    <div className="card-buttons">
                      <a href><div className="card-icon-favorite card-icons"><i className="fa-regular fa-star" /></div></a>
                      <a href><div className="card-icon-follow card-icons"><i className="fa-regular fa-eye" /></div></a>
                      <a href><div className="card-icon-share card-icons"><i className="fas fa-share-alt" /></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-sidemenu">
                <div className="main-content-header">Announcements</div>
                <div className="announcements card">
                  <div className="announcement">
                    <a href className="announcement-link"><div className="announcement-title">Site Maintenance</div></a> 
                    <div className="announcement-text">At 24.12.22 the site will be down for routine maintenance. Fuck the poor sod who has to do it...</div>
                  </div>
                  <hr className="solid" />
                  <div className="announcement">
                    <a href className="announcement-link"><div className="announcement-title">Community Share Day</div></a> 
                    <div className="announcement-text">Nam vel lectus tincidunt, rutrum nulla eu, ornare libero. Aliqyam dictum accumsan porttitor...</div>
                  </div>
                  <hr className="solid" />
                  <a href className="announcement-link">
                  </a><div className="announcement"><a href className="announcement-link">
                    </a><a href className="announcement-link"><div className="announcement-title">Updated Privacy Policy</div></a> 
                    <div className="announcement-text">Nam vel lectus tincidunt, rutrum nulla eu, ornare libero. Aliqyam dictum accumsan porttitor...</div>
                  </div>
                </div>
                <div className="main-content-header">Trending</div>
                <div className="trending card">
                  <div className="trend">
                    <div className="trending-avatar" />
                    <a href className="trending-links">
                      <div className="trending-username">@tegan</div>
                      <div className="trending-title">World Peace Builder</div>
                    </a>
                  </div>
                  <div className="trend">
                    <div className="trending-avatar" />
                    <a href className="trending-links">
                      <div className="trending-username">@morgan</div>
                      <div className="trending-title">Super Cool Project</div>
                    </a>
                  </div>
                  <div className="trend">
                    <div className="trending-avatar" />
                    <a href className="trending-links">
                      <div className="trending-username">@kendall</div>
                      <div className="trending-title">Life Changing App</div>
                    </a>
                  </div>
                  <div className="trend">
                    <div className="trending-avatar" />
                    <a href className="trending-links">
                      <div className="trending-username">@Alex</div>
                      <div className="trending-title">No Traffic Maker</div>
                    </a>    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }*/
    const AdminDashboard = () => {
    return (
        <div>
          {/* Banner */}
          <a href="https://webpixels.io/components?ref=codepen" className="btn w-full btn-primary text-truncate rounded-0 py-2 border-0 position-relative" style={{zIndex: 1000}}>
            <strong>Crafted with Webpixels CSS:</strong> The design system for Bootstrap 5. Browse all components →
          </a>
          {/* Dashboard */}
          <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            {/* Vertical Navbar */}
            <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
              <div className="container-fluid">
                {/* Toggler */}
                <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                {/* Brand */}
                <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                  <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
                </a>
                {/* User menu (mobile) */}
                <div className="navbar-user d-lg-none">
                  {/* Dropdown */}
                  <div className="dropdown">
                    {/* Toggle */}
                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div className="avatar-parent-child">
                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                        <span className="avatar-child avatar-badge bg-success" />
                      </div>
                    </a>
                    {/* Menu */}
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                      <a href="#" className="dropdown-item">Profile</a>
                      <a href="#" className="dropdown-item">Settings</a>
                      <a href="#" className="dropdown-item">Billing</a>
                      <hr className="dropdown-divider" />
                      <a href="#" className="dropdown-item">Logout</a>
                    </div>
                  </div>
                </div>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="sidebarCollapse">
                  {/* Navigation */}
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-house" /> Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-bar-chart" /> Analitycs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-chat" /> Messages
                        <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-bookmarks" /> Collections
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-people" /> Users
                      </a>
                    </li>
                  </ul>
                  {/* Divider */}
                  <hr className="navbar-divider my-5 opacity-20" />
                  {/* Navigation */}
                  <ul className="navbar-nav mb-md-4">
                    <li>
                      <div className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide" href="#">
                        Contacts
                        <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">13</span>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="nav-link d-flex align-items-center">
                        <div className="me-4">
                          <div className="position-relative d-inline-block text-white">
                            <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar rounded-circle" />
                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                          </div>
                        </div>
                        <div>
                          <span className="d-block text-sm font-semibold">
                            Marie Claire
                          </span>
                          <span className="d-block text-xs text-muted font-regular">
                            Paris, FR
                          </span>
                        </div>
                        <div className="ms-auto">
                          <i className="bi bi-chat" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link d-flex align-items-center">
                        <div className="me-4">
                          <div className="position-relative d-inline-block text-white">
                            <span className="avatar bg-soft-warning text-warning rounded-circle">JW</span>
                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                          </div>
                        </div>
                        <div>
                          <span className="d-block text-sm font-semibold">
                            Michael Jordan
                          </span>
                          <span className="d-block text-xs text-muted font-regular">
                            Bucharest, RO
                          </span>
                        </div>
                        <div className="ms-auto">
                          <i className="bi bi-chat" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link d-flex align-items-center">
                        <div className="me-4">
                          <div className="position-relative d-inline-block text-white">
                            <img alt="..." src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar rounded-circle" />
                            <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle" />
                          </div>
                        </div>
                        <div>
                          <span className="d-block text-sm font-semibold">
                            Heather Wright
                          </span>
                          <span className="d-block text-xs text-muted font-regular">
                            London, UK
                          </span>
                        </div>
                        <div className="ms-auto">
                          <i className="bi bi-chat" />
                        </div>
                      </a>
                    </li>
                  </ul>
                  {/* Push content down */}
                  <div className="mt-auto" />
                  {/* User (md) */}
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-person-square" /> Account
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-box-arrow-left" /> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* Main content */}
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
              {/* Header */}
              <header className="bg-surface-primary border-bottom pt-6">
                <div className="container-fluid">
                  <div className="mb-npx">
                    <div className="row align-items-center">
                      <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                        {/* Title */}
                        <h1 className="h2 mb-0 ls-tight">Application</h1>
                      </div>
                      {/* Actions */}
                      <div className="col-sm-6 col-12 text-sm-end">
                        <div className="mx-n1">
                          <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                            <span className=" pe-2">
                              <i className="bi bi-pencil" />
                            </span>
                            <span>Edit</span>
                          </a>
                          <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                            <span className=" pe-2">
                              <i className="bi bi-plus" />
                            </span>
                            <span>Create</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Nav */}
                    <ul className="nav nav-tabs mt-4 overflow-x border-0">
                      <li className="nav-item ">
                        <a href="#" className="nav-link active">All files</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link font-regular">Shared</a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link font-regular">File requests</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
              {/* Main */}
              <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                  {/* Card stats */}
                  <div className="row g-6 mb-6">
                    <div className="col-xl-3 col-sm-6 col-12">
                      <div className="card shadow border-0">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <span className="h6 font-semibold text-muted text-sm d-block mb-2">Budget</span>
                              <span className="h3 font-bold mb-0">$750.90</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                <i className="bi bi-credit-card" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-success text-success me-2">
                              <i className="bi bi-arrow-up me-1" />13%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                      <div className="card shadow border-0">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <span className="h6 font-semibold text-muted text-sm d-block mb-2">New projects</span>
                              <span className="h3 font-bold mb-0">215</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                <i className="bi bi-people" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-success text-success me-2">
                              <i className="bi bi-arrow-up me-1" />30%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                      <div className="card shadow border-0">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total hours</span>
                              <span className="h3 font-bold mb-0">1.400</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                <i className="bi bi-clock-history" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-danger text-danger me-2">
                              <i className="bi bi-arrow-down me-1" />-5%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                      <div className="card shadow border-0">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <span className="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                              <span className="h3 font-bold mb-0">95%</span>
                            </div>
                            <div className="col-auto">
                              <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                <i className="bi bi-minecart-loaded" />
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-success text-success me-2">
                              <i className="bi bi-arrow-up me-1" />10%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow border-0 mb-7">
                    <div className="card-header">
                      <h5 className="mb-0">Applications</h5>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover table-nowrap">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Company</th>
                            <th scope="col">Offer</th>
                            <th scope="col">Meeting</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Robert Fox
                              </a>
                            </td>
                            <td>
                              Feb 15, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Dribbble
                              </a>
                            </td>
                            <td>
                              $3.500
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-success" />Scheduled
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Darlene Robertson
                              </a>
                            </td>
                            <td>
                              Apr 15, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Netguru
                              </a>
                            </td>
                            <td>
                              $2.750
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-warning" />Postponed
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Theresa Webb
                              </a>
                            </td>
                            <td>
                              Mar 20, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Figma
                              </a>
                            </td>
                            <td>
                              $4.200
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-success" />Scheduled
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Kristin Watson
                              </a>
                            </td>
                            <td>
                              Feb 15, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Mailchimp
                              </a>
                            </td>
                            <td>
                              $3.500
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-dark" />Not discussed
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Cody Fisher
                              </a>
                            </td>
                            <td>
                              Apr 10, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Webpixels
                              </a>
                            </td>
                            <td>
                              $1.500
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-danger" />Canceled
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Robert Fox
                              </a>
                            </td>
                            <td>
                              Feb 15, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Dribbble
                              </a>
                            </td>
                            <td>
                              $3.500
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-success" />Scheduled
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Darlene Robertson
                              </a>
                            </td>
                            <td>
                              Apr 15, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Netguru
                              </a>
                            </td>
                            <td>
                              $2.750
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-warning" />Postponed
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Theresa Webb
                              </a>
                            </td>
                            <td>
                              Mar 20, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Figma
                              </a>
                            </td>
                            <td>
                              $4.200
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-success" />Scheduled
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Kristin Watson
                              </a>
                            </td>
                            <td>
                              Feb 15, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Mailchimp
                              </a>
                            </td>
                            <td>
                              $3.500
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-dark" />Not discussed
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Cody Fisher
                              </a>
                            </td>
                            <td>
                              Apr 10, 2021
                            </td>
                            <td>
                              <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2" />
                              <a className="text-heading font-semibold" href="#">
                                Webpixels
                              </a>
                            </td>
                            <td>
                              $1.500
                            </td>
                            <td>
                              <span className="badge badge-lg badge-dot">
                                <i className="bg-danger" />Canceled
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer border-0 py-5">
                      <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      );
    }
export default AdminDashboard