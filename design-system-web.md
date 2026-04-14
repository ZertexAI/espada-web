# 🎨 Design System & Guía de Estilo: La Espada

**Documento de uso interno** | **Proyecto**: Web B2C y Captación | **Cliente**: Bar La Espada (Aranjuez)

---

## 1. Identidad Visual 
**El núcleo de la marca: Premium, apetecible y confiable.**
- **Qué transmite la marca:** Profesionalidad extrema, dominio del producto (hamburguesas de calidad/smash) y ser el restaurante de referencia en Aranjuez.
- **Sensaciones que debe generar:**  
  - *Claridad*: Que la oferta gastronómica y el proceso de reserva/pedido dejen cero dudas.
  - *Confianza*: Calidad fotográfica impecable y diseño limpio que refleja control en cocina.  
  - *Deseo*: Que el producto sea el "héroe" absoluto de la web.
- **Qué NO debe transmitir:**  Una imagen genérica ("plantilla por defecto"), elementos de franquicia de comida rápida, sobrecarga visual o aspecto rústico descuidado. Queremos un aire moderno y contundente.

---

## 2. Paleta de Colores
*Nota: La paleta se apoya en el contraste y respetará la base que indica el branding oficial.*

![Logo La Espada](./imagenes/logo.png)

- **Fondo principal:** **Oscuro** (Elegante y realza la comida).  
  - *Sugerencia:* `Carbón Intenso #121212` o `Gris Pizarra #1A1A1A`. 
  - *Motivo:* Los fondos oscuros (estilo Dark Mode Premium) hacen que los colores cálidos de la carne, el queso fundido y las salsas destaquen de manera espectacular.
- **Colores principales (Acción y Énfasis):**  
  - *Sugerencia:* Colores cálidos y enérgicos, como un **Naranja Tierra** (`#FF6B35`) o **Rojo Intenso** (extraído del branding o entorno del local).  
  - *Uso enfocado:* Reservado **solo** para botones principales, precios o etiquetas ("El top ventas").
- **Colores secundarios (Superficies de apoyo):**  
  - Tonos grises cálidos para fondos de tarjetas (Cards) y menús modales: `#2A2A2A`.
- **Colores de texto:**  
  - Titulares principales: **Blanco puro** (`#FFFFFF` o `#FAFAFA`).
  - Textos descriptivos de los platos: **Gris Plata** (`#A0A0A0`).
- **Ejemplos de uso:** El body de la web es `#121212`, las tarjetas del menú tienen fondo `#2A2A2A`. El texto descriptivo en `#A0A0A0` y el botón de "Hacer Pedido" destacando en `#FF6B35`.

---

## 3. Tipografía
Revisando la comunicación en su Instagram ([@barlaespada](https://www.instagram.com/barlaespada/)), usamos jerarquías potentes de alto impacto visual para titulares y un estilo neutro para los textos largos.

- **Estilo de fuente principal (Titulares):** **Sans-serif geométrica y de trazo duro**.  
  - *Recomendación:* `Inter`, `Outfit` o `Montserrat`.
- **Estilo de fuente secundaria (Descripciones):** Sans-serif súper limpia.  
  - *Recomendación:* `Roboto` o `Inter`.
- **Jerarquías y Pesos:**
  - H1/Titulares grandes: Pesos **ExtraBold** (800) o **Black** (900). Letra contundente (ej. 4rem a 5rem en desktop) para afirmar solidez.
  - H2/Nombres de Hamburguesas: **Bold** (700).
  - Cuerpo del texto (Body): **Regular** (400) o **Medium** (500).
- **Qué evitar:** Fuentes tipo cursivas, *scripts* informales o pesos muy ligeros (light/thin) que resten "fuerza" y presencia al concepto del restaurante.

---

## 4. Estilo Visual e Inspiración
El estilo es un *Premium Dark UI*, fusionando el aspecto de un restaurante top y la limpieza moderna del software.

- **Inspiración base:** El feed de su perfil en Instagram. Gran protagonismo fotográfico, centrado de producto con mucha limpieza de distracciones en los fondos.
- **Uso del espacio:** **White space (espacio en blanco/oscuro) muy generoso**. En un entorno Premium, el producto necesita respirar. Márgenes amplios que dirigen la mirada 100% al plato para transmitir estatus "gourmet" en contraposición al de "comida masiva".
- **Qué evitar:**  
  - Exceso de degradados irreales de varios colores.
  - Sombras tipo mancha borrosa masiva. 
  - Texturas añadidas de madera o "manteles" rústicos por debajo. Mejor texturas nulas: oscuro liso e inmaculado.

---

## 5. Componentes UI

### Botones (CTAs)
- Formas geométricas con un ligero radio de borde (ej. `border-radius: 6px` a `12px`). 
- **Primario:** Totalmente opaco usando el Color Principal. Texto en blanco fuerte. Puede incluir un ícono de flecha `->`.
- **Secundario:** Fondo transparente pero con recuadro perimetral (Outline). Para acciones como "Ver Alérgenos".

### Cards (Tarjetas de Producto en Carta)
- Fondo gris oscuro limpio con apenas un leve borde semi-transparente (`border: 1px solid rgba(255, 255, 255, 0.08)`).
- La imagen se lleva mínimo el 65% del área vertical de la tarjeta.
- **Etiquetas flotantes:** Rectángulos pequeños en la esquina de la foto para indicar "Picante 🌶️" o "Nuevo".

### Formularios (Contacto / Reservas)
- Inputs elegantes con fondo oscuro (`#1E1E1E`), sin borde exterior hasta que el usuario hace *focus/clic* sobre él (ahí se ilumina de blanco o del color primario sutil). 
- Texto en blanco, marcadores (placeholders) en gris atenuado. 

---

## 6. Imágenes y Gráficos
- **Estilo de Fotografías:** Es vital el estilo *"Dark Food Photography"*: Fondos que se fundan en negro, iluminación concentrada casi cenital o lateral buscando la textura dorada de la parrilla, el brillo de la salsa y del pan. La cámara muy cerca (Macro o medio plano).
- Puedes usar de referencia cualquier imagen dentro de nuestra propia carpeta de `/imagenes` para orientar este look final.
- **Iconografía:** Línea plana monolínea (lineal), fina y muy minimalista. Íconos simples y directos, sin detalles caricaturescos de hamburguesas.

---

## 7. Animaciones (Interacciones)
- **Tipo de animaciones:** "Micro-interacciones" dirigidas siempre a la fluidez, para que la web parezca moderna y *viva*.
  - *Parallax sutil* al hacer scroll en portadas.
  - Al poner el cursor sobre la foto de una hamburguesa, la imagen de la card crece suavemente un 2% o 3% (`transform: scale()`).
- **Velocidad:** Sensación casi instantánea (Snappy) pero elástica. Transiciones de `150ms a 300ms` y curvas `ease-out`. 
- **Qué evitar:** Que el contenido baile (giros 3D o rebotes prolongados), pre-loaders invasivos que hagan esperar visualizando el menú. Las animaciones deben sumar a la usabilidad, no frenarla.

---

## 8. Diseño y Estructura de la Landing Ideal
Diseño mental para la portada de inicio:

1. **El Hero (Cabecera Principal):**  
   - Fotografía del producto estrella a pantalla completa, fundiéndose en oscuro sobre el lado izquierdo.
   - Titular masivo apoyado a la izquierda: **"AUTÉNTICO CULTO A LA BURGER EN ARANJUEZ".**
   - Subtexto: *Smash y medallón espectacular. Cocinamos técnica, pasión y muchísimo fuego.*
   - Botón Primario: **[ Ver Carta Abierta ]** 

2. **Sección de Ventajas y Valores (Opcional rápida):**  
   - Línea horizonal minimalista con 3 íconos y 3 textos breves: "Ingredientes top", "Servicio Excepcional" y "Doble Smashed".

3. **Exposición Cárnica (Lo Más Vendido):**  
   - Fondo totalmente oscuro. Titular H2: **Deseadas por todos.**
   - Un Grid (o carrusel horizontal) tipo galería mostrando los 3 o 4 hits más pedidos, con su tarjeta de diseño Premium. 

4. **El Impacto Social y Confianza:**  
   - *Testimoniales limpios.* Carrusel de reseñas en Google Reviews reales con estrellas doradas (`#FFC107`) o referencias positivas compartidas en Instagram por clientes locales. (Transmite esa deseada confianza).

5. **El Cierre Resolutivo (Footer):**  
   - Una franja final (Caja de acción antes de cerrar web) muy clara: 
   - "¿Pensando en probarlas?" -> CTA **[Dónde Encontrarnos]** 
   - Abajo en el footer: Datos básicos de ubicación precisa (Calle, número de Aranjuez), Horarios actualizados, y enlaces con íconos vectoriales a Instagram y contacto.

---
*Fin del documento guía interno. Emplear como regla estricta para futuras adaptaciones en Vistas/Componentes del código de la página web.*
