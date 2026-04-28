# Component Manifest — Apex Detail Studio Premium

**Versão:** 1.0  
**Data:** 27 de Abril de 2026  
**Stack:** Next.js 15 + Tailwind CSS v4  
**Design System:** Premium Dark Mode

---

## 1. Visão Geral

Este documento define a estrutura de componentes para o projeto Apex Detail Studio, incluindo:
- Lista de componentes que precisam de atualização para o Premium Dark Mode
- Estrutura de arquivos completa para o ImageSlider (Antes/Depois)
- Tokens de design system baseados no PRD Seção 9.3

---

## 2. Arquitetura de Componentes

### 2.1 Estrutura de Diretórios

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # Componentes-base (atoms)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   └── Card.tsx
│   ├── layout/                # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/             # Seções da página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── AppointmentForm.tsx
│   │   ├── ContactForm.tsx
│   │   ├── GoogleMap.tsx
│   │   └── SocialProof.tsx
│   └── features/             # Componentes complexos
│       └── ImageSlider/
│           ├── ImageSlider.tsx
│           ├── ImageSlider.module.css
│           └── useImageSlider.ts
├── lib/
│   ├── utils.ts
│   ├── schemas.ts
│   └── constants.ts
├── content/
│   ├── services.ts
│   └── testimonials.ts
└── styles/
    └── tokens.css            # Design system tokens
```

---

## 3. Componentes para Atualização — Premium Dark Mode

### 3.1 Lista de Componentes

| Componente | Prioridade | Status | Critério de Aceite |
|-----------|-----------|--------|-------------------|
| **Header** | Alta | Pendente | Logo, navegação, sticky com backdrop blur |
| **Hero** | Alta | Pendente | Background image, headline, CTA |
| **ImageSlider (NEW)** | Crítica | Novo | Touch events, 60fps, categorias |
| **ServicesGrid** | Alta | Pendente | Cards consistentes |
| **SocialProof** | Alta | Pendente | Avaliações Google dinâmicas |
| **AppointmentForm** | Alta | Pendente | Campos otimizados |
| **GoogleMap** | Média | Pendente | Localização Pinhais |
| **WhatsAppButton** | Alta | Pendente | Link flutuante |
| **Footer** | Média | Pendente | Links atualizados |

### 3.2 Design System Tokens

#### 3.2.1 Tailwind CSS Config (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0a0a0a",
          secondary: "#141414",
          tertiary: "#1f1f1f",
        },
        accent: {
          gold: "#d4af37",
          goldLight: "#e5c158",
          goldDark: "#b8962f",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1a1",
          muted: "#6b6b6b",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      animation: {
        "slider-drag": "sliderDrag 0.1s ease-out",
      },
      transitionTimingFunction: {
        slider: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
```

#### 3.2.2 CSS Variables (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Background Colors */
  --background-primary: #0a0a0a;
  --background-secondary: #141414;
  --background-tertiary: #1f1f1f;

  /* Accent Colors */
  --accent-gold: #d4af37;
  --accent-gold-light: #e5c158;
  --accent-gold-dark: #b8962f;

  /* Text Colors */
  --text-primary: #fafafa;
  --text-secondary: #a1a1a1;
  --text-muted: #6b6b6b;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-background-primary text-text-primary font-body;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-semibold tracking-tight;
  }
}
```

---

## 4. ImageSlider — Componente Antes/Depois

### 4.1 Especificação Técnica

O componente **ImageSlider** é o núcleo do Visual Proof da plataforma. Deve seguir as especificações das seções 4.1 e 7.1 do PRD.

### 4.2 Arquivo Principal (ImageSlider.tsx)

```tsx
"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
}

export default function ImageSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  alt,
}: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return 50;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      const newPosition = calculatePosition(clientX);
      setSliderPosition(newPosition);
    },
    [calculatePosition]
  );

  // Mouse events
  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  // Touch events
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Imagem Depois (fundo) */}
      <div className={styles.imageWrapper}>
        <Image
          src={afterImage}
          alt={`${alt} - Depois`}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* Imagem Antes (sobreposta) */}
      <div
        className={styles.imageWrapper}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${alt} - Antes`}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* Linha divisória */}
      <div
        className={styles.divider}
        style={{ left: `${sliderPosition}%` }}
      >
        <div className={styles.dividerHandle}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.dividerIcon}
          >
            <path
              d="M8 5L3 12L8 19M16 5L21 12L16 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className={`${styles.label} ${styles.labelBefore}`}>{beforeLabel}</span>
      <span className={`${styles.label} ${styles.labelAfter}`}>{afterLabel}</span>
    </div>
  );
}
```

### 4.3 Estilos (ImageSlider.module.css)

```css
.container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  cursor: ew-resize;
  user-select: none;
  touch-action: none;
}

@media (min-width: 768px) {
  .container {
    height: 400px;
  }
}

@media (min-width: 1024px) {
  .container {
    height: 500px;
  }
}

.imageWrapper {
  position: absolute;
  inset: 0;
}

.image {
  object-fit: cover;
}

.divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--accent-gold);
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 10;
}

.dividerHandle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  background: var(--accent-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dividerIcon {
  color: var(--background-primary);
}

.label {
  position: absolute;
  top: 1rem;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  background: rgba(10, 10, 10, 0.7);
  border-radius: 4px;
  pointer-events: none;
}

.labelBefore {
  left: 1rem;
  color: var(--text-primary);
}

.labelAfter {
  right: 1rem;
  color: var(--text-primary);
}
```

### 4.4 Hook Personalizado (useImageSlider.ts)

```typescript
"use client";

import { useState, useCallback, useRef, RefObject } from "react";

interface UseImageSliderOptions {
  containerRef: RefObject<HTMLElement>;
}

export function useImageSlider({ containerRef }: UseImageSliderOptions) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const calculatePosition = useCallback((clientX: number): number => {
    if (!containerRef.current) return 50;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    return Math.min(Math.max(percentage, 0), 100);
  }, [containerRef]);

  const handleMove = useCallback(
    (clientX: number) => {
      const newPosition = calculatePosition(clientX);
      setPosition(newPosition);
    },
    [calculatePosition]
  );

  const handleDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    position,
    isDragging,
    handleMove,
    handleDragStart,
    handleDragEnd,
  };
}
```

### 4.5 Componente com Categorias (ImageSliderGroup.tsx)

```tsx
"use client";

import { useState } from "react";
import ImageSlider from "./ImageSlider";

type Category = {
  id: string;
  name: string;
  beforeImage: string;
  afterImage: string;
  title: string;
};

interface ImageSliderGroupProps {
  categories: Category[];
}

const CATEGORIES: Category[] = [
  {
    id: "lavagem",
    name: "Lavagem Técnica",
    beforeImage: "/images/portfolio/lavagem/antes.jpg",
    afterImage: "/images/portfolio/lavagem/depois.jpg",
    title: "Lavagem Técnica",
  },
  {
    id: "polimento",
    name: "Polimento",
    beforeImage: "/images/portfolio/polimento/antes.jpg",
    afterImage: "/images/portfolio/polimento/depois.jpg",
    title: "Polimento",
  },
  {
    id: "ceramica",
    name: "Proteção Cerâmica",
    beforeImage: "/images/portfolio/ceramica/antes.jpg",
    afterImage: "/images/portfolio/ceramica/depois.jpg",
    title: "Proteção Cerâmica",
  },
  {
    id: "interna",
    name: "Limpeza Interna",
    beforeImage: "/images/portfolio/interna/antes.jpg",
    afterImage: "/images/portfolio/interna/depois.jpg",
    title: "Limpeza Interna",
  },
];

export default function ImageSliderGroup() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <section className="py-8">
      {/* Navigation Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category)}
            className={`
              px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all
              ${
                activeCategory.id === category.id
                  ? "bg-accent-gold text-background-primary"
                  : "bg-background-secondary text-text-secondary hover:text-text-primary"
              }
            `}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Active Slider */}
      <ImageSlider
        beforeImage={activeCategory.beforeImage}
        afterImage={activeCategory.afterImage}
        beforeLabel="Antes"
        afterLabel="Depois"
        alt={activeCategory.title}
      />
    </section>
  );
}
```

---

## 5. Componentes UI Base

### 5.1 Button.tsx

```tsx
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center font-medium rounded-lg transition-all
          focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background-primary
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variant === "primary" && "bg-accent-gold text-background-primary hover:bg-accent-goldLight"}
          ${variant === "secondary" && "bg-background-secondary text-text-primary hover:bg-background-tertiary"}
          ${variant === "outline" && "border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background-primary"}
          ${variant === "ghost" && "text-text-secondary hover:text-text-primary hover:bg-background-secondary"}
          ${size === "sm" && "px-3 py-1.5 text-sm"}
          ${size === "md" && "px-4 py-2 text-base"}
          ${size === "lg" && "px-6 py-3 text-lg"}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
```

### 5.2 Input.tsx

```tsx
import { InputHTMLAttributes, forwardRef, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const id = useId();

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-sm text-text-secondary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-background-secondary border border-background-tertiary
            text-text-primary placeholder:text-text-muted
            focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold
            transition-colors
            ${error && "border-red-500 focus:border-red-500 focus:ring-red-500"}
            ${className}
          `}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
```

---

## 6. Resumo de Arquivos

### 6.1 Arquivos a Criar

| Caminho | Descrição |
|---------|----------|
| `src/components/ui/Button.tsx` | Componente Button base |
| `src/components/ui/Input.tsx` | Componente Input base |
| `src/components/ui/Label.tsx` | Componente Label base |
| `src/components/ui/Card.tsx` | Componente Card base |
| `src/components/layout/Header.tsx` | Header com sticky |
| `src/components/layout/Footer.tsx` | Footer |
| `src/components/layout/Container.tsx` | Container responsivo |
| `src/components/features/ImageSlider/ImageSlider.tsx` | Componente principal |
| `src/components/features/ImageSlider/ImageSlider.module.css` | Estilos CSS modules |
| `src/components/features/ImageSlider/useImageSlider.ts` | Hook personalizado |
| `src/components/features/ImageSlider/ImageSliderGroup.tsx` | Grupo com abas |
| `src/styles/tokens.css` | CSS variables |

### 6.2 Dependências Necessárias

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  }
}
```

---

*Documento preparado para desenvolvimento — Apex Detail Studio Premium*