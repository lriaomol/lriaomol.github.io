# Cambios aplicados al portafolio

## 1. Cambios de texto / framing (en EN y ES)

### Hero stats — corregidos
- ✅ `3+ Research institutions` → `3 Conference papers` (sin "+", el conteo es exacto).
- ✅ Añadido `3 Working languages` (English, Spanish, French) en lugar de la mención NASA destacada.
- ✅ `NASA · Safety Award · HERC` → `HERC` arriba, con label `NASA Safety Award · 2022`. La marca NASA ya no se usa como headline aislado.

### Experience / Projects
- ✅ Rover NASA HERC: descripción cambiada a `Led the structural design and FEA team for the rover transmission and frame...`, evitando "Led" sobre todo el rover.
- ✅ "Won NASA Safety Award 2022 (Artemis program)" → `Received the Safety Award at NASA's Human Exploration Rover Challenge 2022.` Se quitó la referencia a Artemis.
- ✅ Timeline: rol cambiado a `Structural Design Lead · NASA HERC Rover` (preciso, no inflado).
- ✅ Awards: la línea de NASA pasó de "Artemis Program" a `NASA HERC · Motion of congratulations from the Ministry of Education, Colombia`.

### Contact
- ✅ La frase contradictoria fue reformulada:
  - Antes: `Open to research collaborations, Ph.D. opportunities beyond Michigan, consulting on structural simulations, and aerospace projects.`
  - Ahora: `Open to research collaborations between Michigan and other groups — joint papers, computational mechanics projects, and aerospace work.`

## 2. Nuevas páginas

### Versión en español (cundiboyacense, sutil)
- `/es/` — landing en español.
- `/es/projects/hydrogen-embrittlement`
- `/es/projects/energetic-materials`
- `/es/projects/nasa-herc-rover`

Tono: profesional con marcadores regionales discretos (mención a Villapinzón, "sumercé" usado **una sola vez** en el contacto, "trabajo de grado" en lugar de "tesis", "promedio" en lugar de "GPA", etc.). Sin caricatura.

### Páginas de proyecto (rotas antes, ahora existen)
- `/projects/hydrogen-embrittlement`
- `/projects/energetic-materials`
- `/projects/nasa-herc-rover`

Cada una incluye: contexto, aproximación técnica, gallery (2 imágenes), outcome y reflexión. **Los enlaces "All projects →" del index ya no llevan a 404.** (Nota: el botón "All projects →" se removió del index porque no hay una página dedicada que liste todos; los enlaces de cada card sí funcionan.)

### Toggle EN/ES
Está en la barra de navegación de cada página, marcando el idioma activo en color primario.

## 3. Estructura técnica

### `Layout.astro` ahora es un layout real
Antes era un placeholder. Ahora carga las fuentes, el meta, y el `global.css` compartido para todas las páginas — esto evita duplicar 250 líneas de CSS por cada página nueva.

### `global.css` contiene TODOS los estilos compartidos
Incluye nuevos estilos para:
- `.project-thumb` (thumbnails con placeholder grid pattern)
- `.project-page` (páginas detalle de proyecto)
- `.project-gallery`, `.project-meta`, `.project-next`
- `.lang-toggle` (toggle EN/ES)
- `#hero-video` (video opcional en el hero)

## 4. Espacios para imágenes y video — DÓNDE PONER QUÉ

Todas las rutas relativas a `/public/` (acceso público en GitHub Pages).

### Logos institucionales (recomendado)
| Archivo | Origen sugerido |
|---|---|
| `/public/images/U-M_Logo-Hex.png` | (ya existe ✓) |
| `/public/images/purdue-logo.png` | https://brand.purdue.edu/visual-identity/marks-logos/ |
| `/public/images/unal-logo.png` | https://identidad.unal.edu.co/ |

**Importante:** los logos antiguos venían hotlinked desde Wikipedia. Ahora los carga desde `/images/` y si el archivo no existe, simplemente no se muestra (el placeholder queda elegante).

### Thumbnails de proyecto (HOME — cards)
Recomendado: `1280 × 800 px`, JPG o WebP, < 200 KB cada una.
- `/public/images/projects/hydrogen-thumb.jpg` — render de ParaView del campo de daño phase field
- `/public/images/projects/energetic-thumb.jpg` — contorno de temperatura tras la onda de choque
- `/public/images/projects/rover-thumb.jpg` — foto o render CAD del rover

Si no hay archivo, aparece un placeholder con rejilla técnica + label corto. No se rompe el diseño.

### Imágenes hero de cada página de proyecto
Recomendado: `1600 × 900 px`, JPG/WebP, < 400 KB.
- `/public/images/projects/hydrogen-hero.jpg`
- `/public/images/projects/energetic-hero.jpg`
- `/public/images/projects/rover-hero.jpg`

### Galería (2 imágenes por proyecto)
Recomendado: `1200 × 900 px` (aspect 4:3).
- `/public/images/projects/hydrogen-mesh.jpg`, `hydrogen-result.jpg`
- `/public/images/projects/energetic-mesh.jpg`, `energetic-temp.jpg`
- `/public/images/projects/rover-cad.jpg`, `rover-fea.jpg`

### Video (opcional, alta visibilidad)
Recomendado: MP4 H.264, 720p o 1080p, **muted**, loop de 8–20 s, sin audio, < 8 MB.

**Tres lugares donde puedes poner video:**

1. **Hero del index** — Reemplaza el canvas de nodos (más memorable). Archivo: `/public/videos/hero.mp4`. En `src/pages/index.astro` (y `src/pages/es/index.astro`), descomenta la línea:
   ```html
   <!-- <video id="hero-video" src="/videos/hero.mp4" autoplay muted loop playsinline></video> -->
   ```

2. **Thumbnail del rover en home** — En `src/pages/index.astro`, dentro de la card 03, reemplaza:
   ```html
   <img src="/images/projects/rover-thumb.jpg" ... />
   ```
   por:
   ```html
   <video src="/videos/rover-loop.mp4" autoplay muted loop playsinline></video>
   ```

3. **Hero de la página del proyecto rover** — Mismo cambio en `src/pages/projects/nasa-herc-rover.astro` (hay un comentario indicando exactamente la línea).

**Sugerencia de prioridad:** el primero más impactante sería un video del rover en la card 03 — pocas personas tienen un video propio en su portafolio, y un rover en movimiento es una imagen muy fuerte.

## 5. Otras mejoras menores

- `meta description` enriquecido con keywords técnicas (phase field, FEA, hydrogen embrittlement) en EN y ES.
- `lang="es-CO"` en la versión española.
- Comentarios en el código indicando exactamente dónde van imágenes y videos.
- Build verificado: las 8 páginas compilan sin errores con `npm run build`.

## Cómo verificar localmente
```bash
npm install
npm run dev
# Abrir http://localhost:4321/
```
