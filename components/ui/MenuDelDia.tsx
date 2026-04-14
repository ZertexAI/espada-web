'use client';

import { useEffect, useState } from 'react';

interface PlatoMenu {
  tipo: string;   // Primero / Segundo / Postre / Bebida
  nombre: string;
  precio: string;
}

interface MenuData {
  fecha: string;
  platos: PlatoMenu[];
  nota: string;
}

export default function MenuDelDia() {
  const [menu, setMenu] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/menu')
      .then(r => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json();
      })
      .then(data => {
        if (!data.platos || data.platos.length === 0) throw new Error('sin datos');
        setMenu(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="menu-dia" className="menu-dia-section">
        <div className="section-inner">
          <div className="section-label">Menú del Día</div>
          <div className="menu-dia-loading">
            <div className="menu-dia-spinner" />
            <span>Cargando menú de hoy…</span>
          </div>
        </div>
      </section>
    );
  }

  if (error || !menu || menu.platos.length === 0) {
    return (
      <section id="menu-dia" className="menu-dia-section">
        <div className="section-inner">
          <div className="section-label">Menú del Día</div>
          <h2>Menú del Día</h2>
          <p className="menu-dia-no-data">
            Hoy no hay menú publicado todavía. Consulta en el local o en nuestro Instagram.
          </p>
        </div>
      </section>
    );
  }

  // Agrupa por tipo
  const grupos: Record<string, PlatoMenu[]> = {};
  menu.platos.forEach(p => {
    if (!grupos[p.tipo]) grupos[p.tipo] = [];
    grupos[p.tipo].push(p);
  });

  const iconos: Record<string, string> = {
    'Primero':  '🥗',
    'Segundo':  '🍖',
    'Postre':   '🍮',
    'Bebida':   '🥤',
    'Pan':      '🍞',
  };

  return (
    <section id="menu-dia" className="menu-dia-section">
      <div className="section-inner">
        <div className="section-label">Hoy en La Espada</div>
        <h2>Menú del Día</h2>
        {menu.fecha && (
          <p className="section-subtitle">{menu.fecha}</p>
        )}

        <div className="menu-dia-grid">
          {Object.entries(grupos).map(([tipo, platos]) => (
            <div key={tipo} className="menu-dia-grupo">
              <div className="menu-dia-tipo-header">
                <span className="menu-dia-icono">{iconos[tipo] ?? '🍽️'}</span>
                <span className="menu-dia-tipo-nombre">{tipo}</span>
              </div>
              <ul className="menu-dia-lista">
                {platos.map((p, i) => (
                  <li key={i} className="menu-dia-item">
                    <span className="menu-dia-plato">{p.nombre}</span>
                    {p.precio && (
                      <span className="menu-dia-precio">{p.precio}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {menu.nota && (
          <div className="menu-dia-nota">
            <span>📌</span> {menu.nota}
          </div>
        )}

        <p className="menu-dia-aviso">
          Menú actualizado diariamente · Sujeto a disponibilidad
        </p>
      </div>
    </section>
  );
}
