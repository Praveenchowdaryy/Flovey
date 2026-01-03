
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS, Product } from './constants';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(PRODUCTS);
    } else {
      setFilteredProducts(PRODUCTS.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-brand-pastel selection:bg-brand-pink/50 selection:text-brand-rose">
      <header>
        <Navbar />
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>

        <Features />

        <section id="shop" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-rose font-semibold tracking-[0.2em] text-xs uppercase mb-4 block">Handcrafted with Love</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-slate-800 mb-6">
              Our Floral Collections
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic text-lg">
              Soft textures and gentle hues. Explore our handpicked selections for life's most beautiful chapters.
            </p>
          </div>
          
          <Categories 
            categories={CATEGORIES} 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
          
          <ProductGrid products={filteredProducts} />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
