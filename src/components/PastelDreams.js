import React, { useEffect, useRef } from 'react';
import './PastelDreams.css';
import { gsap } from 'gsap';

import skirtImg from '../assets/products/skirt.avif';
import ruffleImg from '../assets/products/ruffle.avif';
import knitImg from '../assets/products/knit.avif';
import hoodieImg from '../assets/products/hoodie.avif';

function PastelDreams() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  useEffect(() => {
    gsap.to('.pastel-section', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.pastel-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);
  

  const products = [
    {
      id: 1,
      name: 'Coral Curve Skirt',
      price: 100,
      oldPrice: 177,
      image: skirtImg,
      inStock: false
    },
    {
      id: 2,
      name: 'Mist Ruffle Top',
      price: 113,
      oldPrice: 160,
      image: ruffleImg,
      inStock: true
    },
    {
      id: 3,
      name: 'Willow Knit Top',
      price: 94,
      oldPrice: null,
      image: knitImg,
      inStock: true
    },
    {
      id: 4,
      name: 'Midnight Hoodie',
      price: 97,
      oldPrice: null,
      image: hoodieImg,
      inStock: true
    }
  ];

  return (
    <section className="pastel-section" ref={sectionRef}>
      <div className="pastel-header">
        <h2>Pastel Dreams</h2>
        <p>Soft hues, bold styles — embrace the pastel aesthetic.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <button
                className={`buy-button ${product.inStock ? '' : 'disabled'}`}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Buy Now' : 'Out of Stock'}
              </button>
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <div className="price">
                <span>${product.price}</span>
                {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all">
        <a href="#">View All →</a>
      </div>
    </section>
  );
}

export default PastelDreams;