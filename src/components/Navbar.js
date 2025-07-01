import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

// Local images from src/assets
import logoImg from '../assets/logo.png';
import womenImg from '../assets/women.avif';
import menImg from '../assets/men.avif';
import collectionsImg from '../assets/collections.avif';
import closeButton from '../assets/closeButton.png';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dropdown menu content
  const menuItems = {
    Women: {
      image: womenImg,
      links: ['Tops', 'Dresses', 'Shoes', 'Accessories'],
    },
    Men: {
      image: menImg,
      links: ['Shirts', 'Pants', 'Shoes', 'Watches'],
    },
    Collections: {
      image: collectionsImg,
      links: ['New Arrivals', 'Bestsellers', 'Limited Editions', 'Sale'],
    }
  };

  // Search results data
  const articles = [
    {
      title: "Quiet Mornings: On the Beauty of Doing Nothing",
      excerpt: "There's a kind of magic in the early morning. Before the inbox pings...",
    },
    {
      title: "The Art of Seasonal Transitioning: How to Refresh Your Wardrobe",
      excerpt: "There's something quietly beautiful about the change of seasons...",
    },
    {
      title: "How to Care for Your Clothes Like They’re Works of Art",
      excerpt: "In a world of disposability, taking care of what you own is a quiet form of protest...",
    },
    {
      title: "The Evolution of Streetwear: From Urban Roots to Global Influence",
      excerpt: "In a world where fashion trends are constantly evolving...",
    },
    {
      title: "The Magic of Minimalism: Finding Elegance in Simplicity",
      excerpt: "In a world where fashion is often defined by excess and extravagance...",
    },
    {
      title: "The Future of Fashion: Embracing Sustainability and Crafts",
      excerpt: "More designers are returning to sustainable practices...",
    },
  ];

  const filteredResults = articles.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const renderDropdown = (item) => {
    const data = menuItems[item];
    if (!data) return null;

    return (
      <div className="custom-dropdown-content">
        <img
          src={data.image}
          alt={`${item} dropdown`}
          className="dropdown-image"
        />
        <ul className="dropdown-links">
          {data.links.map((link, index) => (
            <li key={index}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-overlay sticky-top navbar-transparent">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-1 order-lg-0" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Object.keys(menuItems).map((item) => (
                <li
                  className="nav-item dropdown"
                  key={item}
                  onMouseEnter={() => setOpenDropdown(item)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdown(item);
                    }}
                  >
                    {item}
                  </a>
                  <div className={`custom-dropdown ${openDropdown === item ? 'show' : ''}`}>
                    {renderDropdown(item)}
                  </div>
                </li>
              ))}
            </ul>
          <a className="navbar-brand order-1 order-lg-1 text-center geist" href="/">
            {/* <img src={logoImg} alt="Logo" className="navbar-logo" /> */}
            Brockap - Designs
          </a>
          </div>

          <div className="d-flex align-items-center order-2">
            <FaSearch className="me-3" onClick={() => setIsSearchOpen(true)} />
            <div className="d-flex align-items-center">
              <FaShoppingCart />
              <span className="ms-1">(0)</span>
            </div>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-box d-inline">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-link" onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}><img src={closeButton} alt="close" className="close" /></button>

            {searchQuery && (
              <div className="search-results">
                {filteredResults.length === 0 && <div className="search-item">No results found.</div>}
                {filteredResults.map((result, idx) => (
                  <div key={idx} className="search-item">
                    <strong>{result.title}</strong>
                    <div className="search-excerpt">{result.excerpt}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
