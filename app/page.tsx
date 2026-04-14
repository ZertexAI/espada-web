'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuDelDia from '@/components/ui/MenuDelDia';

export default function Home() {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <nav style={{ background: navBackground ? 'rgba(17,17,17,0.97)' : 'rgba(17,17,17,0.85)' }}>
        <Link href="#" className="nav-logo">
          <Image 
            src="/imagenes/logo.png" 
            alt="Logo Bar La Espada" 
            width={48} 
            height={48} 
            priority
          />
          <span>La Espada</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="#menu-dia">Menú del Día</Link></li>
          <li><Link href="#menu">Carta</Link></li>
          <li><Link href="#local">El Local</Link></li>
          <li><Link href="#galeria">Galería</Link></li>
          <li><Link href="#reviews">Reseñas</Link></li>
          <li>
            <Link 
              href="https://www.instagram.com/barlaespada/" 
              target="_blank" 
              rel="noopener" 
              className="nav-cta"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <div id="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/imagenes/burger-classic.png')" }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Restaurante en Aranjuez</div>
          <h1>AUTÉNTICO CULTO<br />A LA <em>BURGER</em><br />EN ARANJUEZ</h1>
          <p className="hero-subtitle">
            Smash y medallón espectacular. Cocinamos técnica, pasión y muchísimo fuego para darte la burger de tu vida.
          </p>
          <div className="hero-actions">
            <Link href="#menu" className="btn-primary">Ver Carta Completa →</Link>
            <Link href="#local" className="btn-secondary">Dónde estamos</Link>
          </div>
        </div>
        <div className="hero-scroll">Desplázate</div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="stat"><span className="stat-number">100%</span><span className="stat-label">Carne Madurada</span></div>
        <div className="stat"><span className="stat-number">+5★</span><span className="stat-label">Reseñas Google</span></div>
        <div className="stat"><span className="stat-number">Aranjuez</span><span className="stat-label">Madrid</span></div>
        <div className="stat"><span className="stat-number">Pan</span><span className="stat-label">Brioche Artesano</span></div>
      </div>

      {/* ── MENÚ DEL DÍA ── */}
      <MenuDelDia />

      {/* ── MENÚ ── */}
      <section id="menu">
        <div className="section-inner fade-up">
          <div className="section-label">Nuestra Carta</div>
          <h2>Deseadas por todos.</h2>
          <p className="section-subtitle">Las que nunca fallan. Elegidas una a una por nuestros clientes.</p>
          <div className="cards-grid">

            <div className="card">
              <div className="card-img-wrap">
                <Image 
                  src="/imagenes/burger-classic.png" 
                  alt="Smash Burger La Clásica" 
                  className="card-img" 
                  width={400} 
                  height={240}
                  loading="lazy" 
                />
                <div className="card-badges"><span className="badge badge-top">Top Ventas</span></div>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-title">La Clásica Salvaje</span>
                  <span className="card-price">12,50€</span>
                </div>
                <p className="card-desc">Dos discos smash de vaca madurada, doble cheddar, bacon crujiente y nuestra salsa secreta en pan brioche artesano.</p>
                <div className="card-divider"></div>
                <button className="card-btn">Añadir al Pedido</button>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrap">
                <Image 
                  src="/imagenes/burger-trufa.png" 
                  alt="Burger Trufada Extreme" 
                  className="card-img" 
                  width={400} 
                  height={240}
                  loading="lazy" 
                />
                <div className="card-badges"><span className="badge badge-new">Nuevo</span></div>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-title">Trufada Extreme</span>
                  <span className="card-price">13,90€</span>
                </div>
                <p className="card-desc">Doble smash, crema de trufa negra, champiñones portobello confitados, queso gouda y rúcula fresca.</p>
                <div className="card-divider"></div>
                <button className="card-btn">Añadir al Pedido</button>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrap">
                <Image 
                  src="/imagenes/burger-spicy.png" 
                  alt="Burger Spicy Inferno" 
                  className="card-img" 
                  width={400} 
                  height={240}
                  loading="lazy" 
                />
                <div className="card-badges"><span className="badge badge-spicy">Picante 🌶️</span></div>
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-title">Spicy Inferno</span>
                  <span className="card-price">12,90€</span>
                </div>
                <p className="card-desc">Medallón 200g, jalapeños asados, queso monterey jack, cebolla frita y mayo sriracha explosiva.</p>
                <div className="card-divider"></div>
                <button className="card-btn">Añadir al Pedido</button>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrap">
                <Image 
                  src="/imagenes/burger-signature.png" 
                  alt="Burger La Espada Signature" 
                  className="card-img" 
                  width={400} 
                  height={240}
                  loading="lazy" 
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-title">La Espada Signature</span>
                  <span className="card-price">14,50€</span>
                </div>
                <p className="card-desc">Nuestra obra maestra. Triple smash, queso brie fundido, mermelada de cebolla y mostaza dijon en pan pretzel.</p>
                <div className="card-divider"></div>
                <button className="card-btn">Añadir al Pedido</button>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrap">
                <Image 
                  src="/imagenes/burger-bacon.png" 
                  alt="Burger Doble Bacon Crispy" 
                  className="card-img" 
                  width={400} 
                  height={240}
                  loading="lazy" 
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-title">Doble Bacon Crispy</span>
                  <span className="card-price">13,20€</span>
                </div>
                <p className="card-desc">El clásico elevado: doble cheddar, triple bacon crujiente, lechuga iceberg y salsa ahumada de la casa.</p>
                <div className="card-divider"></div>
                <button className="card-btn">Añadir al Pedido</button>
              </div>
            </div>

            <div className="card">
              <div className="card-img-wrap">
                <Image 
                  src="/imagenes/burger-veggie.png" 
                  alt="Burger Veggie Gold" 
                  className="card-img" 
                  width={400} 
                  height={240}
                  loading="lazy" 
                />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-title">Veggie Gold</span>
                  <span className="card-price">11,90€</span>
                </div>
                <p className="card-desc">Medallón de portobello y garbanzos a la plancha, aguacate, tomate asado, queso de cabra y alioli de lima.</p>
                <div className="card-divider"></div>
                <button className="card-btn">Añadir al Pedido</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EL LOCAL · FACHADA A ANCHO COMPLETO ── */}
      <div id="local">
        <Image 
          src="/imagenes/espada.png" 
          alt="Fachada del Bar La Espada en Aranjuez" 
          className="local-img" 
          width={1920} 
          height={680}
          loading="lazy" 
        />
        <div className="local-content fade-up">
          <div className="section-label">Nuestra Casa</div>
          <h2>Encuéntranos<br />en Aranjuez</h2>
          <p>Más que un restaurante, un templo del sabor. Desde el primer día apostamos por la calidad sin compromisos: la mejor materia prima, con técnica real y servida con orgullo.</p>
          <div className="local-details">
            <div className="local-detail">
              <div className="local-detail-icon">📍</div>
              <span>Aranjuez, Madrid</span>
            </div>
            <div className="local-detail">
              <div className="local-detail-icon">🕐</div>
              <span>Mar – Dom: 13:00–16:00 · 20:00–23:30</span>
            </div>
            <div className="local-detail">
              <div className="local-detail-icon">📱</div>
              <span>@barlaespada en Instagram</span>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link 
              href="https://www.instagram.com/barlaespada/" 
              target="_blank" 
              rel="noopener" 
              className="btn-primary"
            >
              Ver en Instagram →
            </Link>
          </div>
        </div>
      </div>

      {/* ── GALERÍA ── */}
      <section id="galeria">
        <div className="section-inner fade-up">
          <div className="section-label">Galería</div>
          <h2>El arte en el plato.</h2>
          <p className="section-subtitle">Cada burger es una obra. Aquí te lo demostramos.</p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image src="/imagenes/gallery1.png" alt="Burger premium" width={800} height={440} loading="lazy" />
            </div>
            <div className="gallery-item">
              <Image src="/imagenes/gallery2.png" alt="Detalle burger" width={400} height={220} loading="lazy" />
            </div>
            <div className="gallery-item">
              <Image src="/imagenes/gallery3.png" alt="Ingredientes frescos" width={400} height={220} loading="lazy" />
            </div>
            <div className="gallery-item">
              <Image src="/imagenes/gallery4.png" alt="Burger spicy" width={400} height={220} loading="lazy" />
            </div>
            <div className="gallery-item">
              <Image src="/imagenes/gallery5.png" alt="Burger especial" width={400} height={220} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="reviews">
        <div className="section-inner fade-up">
          <div className="section-label">Reseñas</div>
          <h2>Lo que dicen nuestros clientes.</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Resultados reales. Satisfacción garantizada.</p>
          <div className="reviews-grid">

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">"Sin duda la mejor burger que he comido en toda la zona. El pan brioche, la carne... todo impecable. Repetiré mil veces más."</p>
              <div className="reviewer">
                <div className="reviewer-avatar c1">MG</div>
                <div>
                  <div className="reviewer-name">María G.</div>
                  <div className="reviewer-date">Google Reviews · hace 2 semanas</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">"Fui con expectativas altas y las superaron. La Clásica Salvaje es un espectáculo. El local tiene un ambiente genial, muy recomendable."</p>
              <div className="reviewer">
                <div className="reviewer-avatar c2">JR</div>
                <div>
                  <div className="reviewer-name">Javier R.</div>
                  <div className="reviewer-date">Google Reviews · hace 1 mes</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">"Llevaba tiempo buscando una burger de verdad cerca de Aranjuez. La encontré en La Espada. Los cocineros saben exactamente lo que hacen."</p>
              <div className="reviewer">
                <div className="reviewer-avatar c3">LC</div>
                <div>
                  <div className="reviewer-name">Laura C.</div>
                  <div className="reviewer-date">Google Reviews · hace 3 semanas</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">"Venimos en familia y quedamos todos encantados. Las patatas estaban perfectas y las burgers jugosísimas. El trato del personal, 10/10. Volvemos seguro."</p>
              <div className="reviewer">
                <div className="reviewer-avatar c4">PM</div>
                <div>
                  <div className="reviewer-name">Pablo M.</div>
                  <div className="reviewer-date">Google Reviews · hace 5 días</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">"Probé la Spicy Inferno y casi me pide matrimonio. Brutal la combinación de sabores, el jalapeño asado marca la diferencia. Ya la he recomendado a todos mis amigos."</p>
              <div className="reviewer">
                <div className="reviewer-avatar c5">SR</div>
                <div>
                  <div className="reviewer-name">Sergio R.</div>
                  <div className="reviewer-date">Google Reviews · hace 1 semana</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p className="review-text">"Nunca había visto tanto mimo en una hamburguesa. La carne huele y sabe diferente, se nota que es de calidad. El local es pequeño pero acogedor. Sitio de referencia en Aranjuez ya."</p>
              <div className="reviewer">
                <div className="reviewer-avatar c6">AT</div>
                <div>
                  <div className="reviewer-name">Ana T.</div>
                  <div className="reviewer-date">Google Reviews · hace 2 meses</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="cta-section fade-up">
        <div className="section-label">¿Qué esperas?</div>
        <h2>Ven a probar<br />la diferencia.</h2>
        <p>La parrilla está al máximo. Tu mesa, esperándote.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="https://www.instagram.com/barlaespada/" target="_blank" className="btn-primary">Síguenos en Instagram →</Link>
          <Link href="#local" className="btn-secondary">Dónde estamos</Link>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-brand">
          <Image 
            src="/imagenes/logo.png" 
            alt="Logo La Espada" 
            width={42} 
            height={42} 
          />
          <span>Bar La Espada</span>
        </div>
        <ul className="footer-links">
          <li><Link href="#menu">Carta</Link></li>
          <li><Link href="#local">Ubicación</Link></li>
          <li><Link href="#reviews">Reseñas</Link></li>
          <li>
            <Link 
              href="https://www.instagram.com/barlaespada/" 
              target="_blank" 
              rel="noopener"
            >
              Instagram
            </Link>
          </li>
        </ul>
        <span className="footer-copy">© 2026 Bar La Espada · Aranjuez, Madrid</span>
      </footer>
    </>
  );
}
