# PRD — Apex Detail Studio Premium
## Plataforma de Conversão High-Ticket para Estética Automotiva

**Versão:** 2.0  
**Data:** 27 de Abril de 2026  
**Status:** Rascunho para Aprovação  
**Papel:** Product Manager & Tech Lead Sênior  
**Projeto:** Apex Detail Studio — Plataforma de Estética Automotiva Premium

---

## 1. Visão Geral do Produto

### 1.1 Resumo Executivo

O **Apex Detail Studio** é uma plataforma de conversão de alta performance para um estúdio de estética automotiva premium localizado em **Pinhais, Paraná**. O produto transcende um website institucional comum, oferecendo uma experiência premium de Visual Proof que demonstra resultados tangíveis do serviço de detalhamento, lavagem técnica e tratamento cosmético automotivo.

A plataforma visa posicionar a Apex como referência local em Pinhais, convertendo visitantes em leads qualificados via WhatsApp, formulário de contato e, principalmente, através de um sistema de agendamento ultra-acelerado (máximo 3 cliques).

### 1.2 Problema

Estúdios de estética automotiva no segmento premium enfrentam dificuldades críticas:

- **Transferir confiança** — Clientes potenciais não conseguem visualizar a qualidade real do trabalho antes de contratar. Fotos estáticas não demonstram o impacto transformador do serviço.
- **Agilizar o primeiro contato** — Processo de agendamento lento que abandona clientes para concorrentes. Cada clique adicional reduz a taxa de conversão em ~30%.
- **Demonstrar autoridade local** — Presença digital fraca que não reflete o posicionamento premium e não se conecta com a comunidade local de Pinhais.
- **Distinção competitiva** — Diferenciação impossível em um mercado onde todos oferecem serviços similares sem prova visual tangível.

### 1.3 Solução

Plataforma de conversão high-ticket com:

- **Image Comparison Slider** — Componente interativo Antes/Depois com suporte a touch events, permitindo que o usuário deslize para ver a transformação real do veículo. Foco na Persona P1 (proprietários de carros premium).
- **Integração Google Business Profile** — Busca dinâmica de avaliações reais e exibição da localização estratégica em Pinhais via Google Maps API.
- **Agendamento em 3 Cliques** — Da home, o usuário pode concluir o agendamento em no máximo 3 cliques: Home → Formulário → Confirmação.
- **Design System Premium Dark Mode** — Tipografia refinada, espaçamentos consistentes e paleta escura que comunica exclusividade.

### 1.4 Públicos-Alvo

| Persona | Descrição | Necessidade Primária | Comportamento |
|---------|-----------|----------------------|---------------|
| **P1: Proprietário de carro premium** | Homem/mulher, 30-55 anos, renda alta, possui SUV/sedan de luxo (BMW, Mercedes, Audi, Jeep) | Visualizar resultados REAIS de detalhamento, agendar com poucos cliques, sentir-se valorizado | Valoriza tempo, quer ver provas concretas, prefere渠道 diretas (WhatsApp) |
| **P2: Entusiasta automotive** | Homem, 22-40 anos, paixão por carros, mantém o veículo conservado com detalhamento regular | Ver portfólio detalhado, conhecer serviços específicos, ver transformações | Gosta de detalhes técnicos, pesquisa muito, valoriza comunidade |
| **P3: Manager de frotas** | Profissional responsável de veículos corporativos (frota de 5-50 carros) | Agendar múltiplos veículos, obter orçamento rápido, gestão de récorrências | Quer eficiência, proses, relatórios, relacionamento comercial |

---

## 2. Objetivos do Projeto

### 2.1 Objetivos SMART

| ID | Objetivo | Métrica | Meta (MVP) |
|----|----------|--------|------------|
| **O1** | Converter visitantes em leads qualificados | Taxa de conversão (visitante → lead) | ≥ 5% |
| **O2** | Agendamento ultra-acelerado | Número de cliques do CTA na home até confirmação do formulário | ≤ 3 cliques |
| **O3** | Demonstrar Visual Proof impactante | Tempo médio de interação no Image Comparison Slider | ≥ 15 segundos |
| **O4** | Construir autoridade local | Avaliação Google Business Profile exibida | ≥ 4.5 estrelas |
| **O5** | Garantir performance Mobile | Lighthouse Performance Score (mobile) | ≥ 90 |
| **O6** | Rankings em buscas locais | Posicionamento para "estética automotiva Pinhais" | Top 3 |

### 2.2 Objetivos Não-Funcionais Prioritários

- **Tempo de carregamento (LCP):** ≤ 1.8s em conexão 4G (meta premium)
- **SEO Local Avançado:** Schema markup LocalBusiness + integração Google Business Profile
- **Acessibilidade:** WCAG 2.1 AA compliance
- **Segurança:** HTTPS obrigatório, CSP strict, dados criptografados
- **Design System:** Premium Dark Mode consistente em todos os componentes (Tailwind CSS)

---

## 3. Arquitetura de Informação

### 3.1 Estrutura de Página

```
┌─────────────────────────────────────────────────────────────────┐
│                      HEADER                        │
│              (Sticky + Logo + Nav)              │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                         HERO                                      │
│       (H1 Premium + Subhead + CTA "Agendar Agora")                 │
│              + Background Video/Img High-Q                      │
└────────────────────┬────────────────────────────┘
                     │
          ┌──────────┼──────────┐
          ▼          ▼          ▼
┌─────────────┐ ┌────────┐ ┌─────────────┐
│  IMAGE     │ │  SERVIÇOS│ │   SOCIAL   │
│ COMPARISON │ │  GRID  │ │   PROOF    │
│  SLIDER    │ │        │ │ (Reviews)  │
│ (Antes/   │ │        │ │            │
│  Depois)  │ │        │ │            │
└─────┬─────┘ └────────┘ └─────┬─────┘
      │                        │
      ▼                        ▼
┌─────────────────────────────────────────────────────────────────┐
│                      AGENDAMENTO                           │
│        (Formulário em 3 passos ou 1 passo)              │
│            + Google Calendar Integration                  │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                      LOCALIZAÇÃO                          │
│        (Google Maps + Endereço + Como Chegar)           │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
���─��───────────────────────────────────────────────────────────────┐
│                       FOOTER                          │
│      (Nav + Contato + Redes Sociais + Copyright)         │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Jornada do Usuário

```
VISITANTE
    │
    ├── [Origem: Google Buscas Locais / Instagram / Indicação]
    │
    ▼
LANDING PAGE (Home)
    │
    ├── 1. Visualiza Hero (vídeo/imagem high-quality)
    │       └── Decisão: Continuar ou sair? (< 3s)
    │
    ├── 2. Scroll → Image Comparison Slider
    │       └── Interage com arrastar (touch/mouse)
    │       └── Decisão: "Preciso disso!" ou "Não é pra mim"
    │
    ├── 3. Scroll → Serviços Grid
    │       └── Identifica serviço necessário
    │
    ├── 4. Scroll → Social Proof (Reviews Google)
    │       └── Valida confiabilidade
    │
    ▼
AGENDAMENTO
    │
    ├── 5. CTA "Agendar Agora" → Scroll suave até formulário
    │
    ├── 6. Preenche formulário (nome, telefone, veículo, serviço, data)
    │       └── Validação em tempo real
    │
    ├── 7. Clica "Solicitar Agendamento"
    │       └── Loading spinner
    │       └── Sucesso: "Recebemos sua solicitação!"
    │
    └── 8. Evento criado no Google Agenda (Admin)
            └── Admin inicia contato via WhatsApp
```

---

## 4. Requisitos Funcionais

### 4.1 Módulo Image Comparison Slider (Visual Proof)

| ID | Requisito | Descrição | Prioridade |
|----|-----------|-----------|------------|
| **RF01** | Componente Slider | two Imagens (antes/depois) em um único container com divisor ajustável. Posição inicial: 50%. | Obrigatório |
| **RF02** | Suporte Touch | Eventos de touchstart/touchmove para arrastar o divisor em dispositivos móveis. Suporte a gestos de deslize. | Obrigatório |
| **RF03** | Animações Smooth | Transição animada ao mover o divisor. Easing: cubic-bezier(0.4, 0, 0.2, 1). Frame rate: 60fps. | Obrigatório |
| **RF04** | Responsividade | Adaptável a mobile (altura: 300px), tablet (400px), desktop (500px). | Obrigatório |
| **RF05** | Lazy Loading | Imagens carregadas sob demanda quando o componente entra no viewport. | Obrigatório |
| **RF06** | Categorização | Múltiplos sliders por categoria: Lavagem Técnica, Polimento, Proteção Cerâmica, Limpeza Interna. Navegação por abas. | Obrigatório |
| **RF07** | Indicador Visual | Labels "Antes" e "Depois" sobre as imagens, com estilo premium (fonte thin, tracking wide). | Obrigatório |
| **RF08** | Fallback | Imagem estática única para browsers sem suporte a canvas/JS. | Obrigatório |

### 4.2 Módulo Landing Page

| ID | Requisito | Descrição | Prioridade |
|----|-----------|-----------|------------|
| **RF09** | Seção Hero | Banner full-width com imagem de background de veículo de alta qualidade, headline principal, subheadline e CTA "Agendar Agora". Altura mínima de 80vh em mobile, 100vh em desktop. | Obrigatório |
| **RF10** | Seção Sobre | Container com texto institucional (história, missão, valores), foto do studio ou equipe, lista de diferenciais (3-4 itens). | Obrigatório |
| **RF11** | Grade de Serviços | Grid responsivo (1 coluna mobile, 2 tablet, 3 desktop) listando serviços: Lavagem Técnica, Polimento, Proteção Cerâmica, Limpeza Interna. Cada card com: ícone, título, descrição breve, preço ou "sob consulta". | Obrigatório |
| **RF12** | Seção Depoimentos | Grid com mínimo 5 depoimentos dinâmicos (puxados da API Google Business Profile). Cada item: foto do cliente, nome, veículo, texto e avaliação stars. | Obrigatório |
| **RF13** | Rodapé (Footer) | Links de navegação, endereço completo, horários de funcionamento, links para redes sociais, copyright. | Obrigatório |

### 4.3 Módulo Agendamento (3 Cliques)

| ID | Requisito | Descrição | Prioridade |
|----|-----------|-----------|------------|
| **RF14** | Formulário de Agendamento Ultra-Rápido | Campos: nome (texto), telefone (tel), modelo do veículo (texto), serviço (select), data preferida (date). Máx 5 campos obrigatórios. Validação HTML5 + JS. | Obrigatório |
| **RF15** | Otimização de Entrada | Autofill ativo, máscara de telefone automática, sugestões de veículos populares. | Obrigatório |
| **RF16** | Integração Google Agenda | Ao submeter formulário, criar evento no Google Agenda do administrador via Google Calendar API. Evento contém: título (Cliente - Veículo), descrição (todos os dados), data/hora configurada. | Obrigatório |
| **RF17** | Feedback de Submit | Mensagem de sucesso exibida inplace do formulário, confirmando recebimento e informando próximos passos. | Obrigatório |
| **RF18** | Botão Flutuante WhatsApp | Botão fixo position:fixed no canto inferior direito, z-index alto. Abre wa.me/ com mensagem pré-configurada. Ícone WhatsApp verde. | Obrigatório |

### 4.4 Módulo Local SEO + Social Proof

| ID | Requisito | Descrição | Prioridade |
|----|-----------|-----------|------------|
| **RF19** | Google Business Profile API | Integração via Google Places API ou Google My Business API para buscar avaliações em tempo real. | Obrigatório |
| **RF20** | Avaliações Dinâmicas | Seção que exibe as 5+ avaliações mais recentes do Google Business Profile da Apex. Atualização em cache (máx 24h). | Obrigatório |
| **RF21** | Google Maps Embed | Mapa integrado via Google Maps Embed API (modo place) exibindo localização do studio em Pinhais. API key configurada no GCP. | Obrigatório |
| **RF22** | Endereço Textual | Endereço completo: Rua, Número, Bairro, Cidade, CEP. Link "Como Chegar" abre Google Maps em nova aba. | Obrigatório |
| **RF23** | Schema Markup LocalBusiness | JSON-LD com: name, address, telephone, geo coordinates, openingHours, priceRange, aggregateRating. | Obrigatório |
| **RF24** | Formulário de Contato | Campos: nome, e-mail, telefone, mensagem. Submit envía email transacional via EmailJS/Formspree. | Obrigatório |

### 4.5 Módulo Responsividade + Design System

| ID | Requisito | Descrição | Prioridade |
|----|-----------|-----------|------------|
| **RF25** | Mobile-First CSS | Estilos baseados em mobile, com media queries para tablet (≥768px) e desktop (≥1024px). Breakpoints claros. | Obrigatório |
| **RF26** | Touch-Friendly | Alvos de toque mínimos de 44x44px. Espaçamento adequado entre elementos clicáveis. | Obrigatório |
| **RF27** | Imagens Otimizadas | Formatos WebP com fallbacks JPG. srcset para carregamento responsivo. Lazy loading nativo. | Obrigatório |
| **RF28** | Design System Premium Dark Mode | Tailwind CSS com variáveis customizadas: cores escuras (bg: #0a0a0a, #141414), acentos (gold: #d4af37), tipografia (Montserrat/Inter). | Obrigatório |
| **RF29** | Componentes Consistentes | Todos os componentes (Header, Footer, Cards, Forms) seguem o design system com espaçamentos tokens. | Obrigatório |

---

## 5. Requisitos Não-Funcionais

| ID | Requisito | Critério | Prioridade |
|----|-----------|----------|------------|
| **RNF01** | Performance Premium | LCP ≤ 1.8s (mobile 4G). First Input Delay ≤ 100ms. CLS ≤ 0.1. | Alta |
| **RNF02** | SEO Técnico Avançado | Meta tags (title, description, og:*). Canonical URL. robots.txt. sitemap.xml. Schema.org LocalBusiness completo. | Alta |
| **RNF03** | Acessibilidade WCAG 2.1 AA | Contraste mínimo 4.5:1 para texto. Labels em todos os campos. Navegação por teclado funcional. ARIA labels no slider. | Alta |
| **RNF04** | CompatibilidadeBrowser | Chrome (últimas 2 versões), Firefox, Safari, Edge. Android Chrome, Safari iOS. | Alta |
| **RNF05** | Segurança | HTTPS forçado. CSP strict. X-Frame-Options: DENY. HSTS. Dados nunca expostos em URL. | Alta |
| **RNF06** | Manutenibilidade | Código modular, componentizado. Tailwind CSS com variáveis de tema. Documentação de deployment. | Alta |
| **RNF07** | Analytics | GA4 configurado: pageviews, eventos (CTA click, form submit, slider interaction, scroll depth), conversions. | Alta |
| **RNF08** | Monitoramento | Sentry para捕获 de JS exceptions. Lighthouse CI no deploy. | Média |

---

## 6. Stack Tecnológica

### 6.1 Visão Geral

| Camada | Tecnologia | Justificativa |
|--------|------------|----------------|
| **Hospedagem** | Vercel | CDN global, edge functions, deploy automático, Lighthouse 95-100 |
| **Frontend** | Next.js 14 (App Router + Static Export) | LCP excepcional,image optimization, server components |
| **Estilização** | Tailwind CSS + CSS Modules | Utility-first, dark mode native, consistent design system |
| **Formulários** | React Hook Form + Zod | Performance, validation type-safe |
| **Backend Forms** | Google Apps Script + Vercel Functions | Sem custo, CalendarApp nativo, fallback serverless |
| **Maps** | Google Maps Embed API | Localização Pinhais, integração Google Business |
| **Reviews** | Google Business Profile API | Social proof dinâmico |
| **Analytics** | Google Analytics 4 | Events, conversions, audience |
| **Fonts** | next/font (Google Fonts) | Montserrat (headings), Inter (body) |
| **Images** | @next/image + Sharp | WebP, srcset, lazy loading |

### 6.2 Arquitetura de Integração

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND (Next.js)                    │
│                                                             │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────────┐  │
│  │   Hero    │  │  Slider   │  │   Appointment Form     │  │
│  │           │  │ (Antes/   │  │                        │  │
│  │           │  │  Depois) │  │                        │  │
│  └─────┬─────┘  └────┬─────┘  └──────────┬───────────┘  │
│        │             │                       │              │
│        └────────────┼─────────────────────┘              │
│                     ▼                                      │
│            ┌──────────────────┐                           │
│            │    API Layer    │                           │
│            │  (GScript /    │                           │
│            │  Vercel Func)  │                           │
│            └────────┬────────┘                           │
│                     │                                      │
│        ┌───────────┼───────────┐                          │
│        ▼           ▼           ▼                          │
│  ┌──────────┐ ┌─────────┐ ┌────────────┐                │
│  │ Google   │ │Email    │ │Google      │                │
│  │Calendar  │ │Service  │ │Business    │                │
│  │          │ │(EmailJS)│ │Profile API │                │
│  └──────────┘ ���─���───────┘ └────────────┘                │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. User Stories

### 7.1 EP01 — Visual Proof (Image Comparison)

| ID | User Story | Critério de Aceitação |
|----|------------|---------------------|
| **US01** | Como proprietário de carro premium (P1), eu quero deslizar para comparar antes/depois do detalhamento, para avaliar a qualidade real do serviço. | Slider funcional com touch events. Arrastar move o divisor entre as imagens. Animação smooth a 60fps. |
| **US02** | Como visitante, eu quero navegar entre categorias de serviços no slider, para ver resultados específicos do tipo de serviço que preciso. | Abas/navegação por categoria: Lavagem, Polimento, Cerâmica, Interna. Clique altera as imagens exibidas. |

### 7.2 EP02 — Agendamento Ultra-Rápido

| ID | User Story | Critério de Aceitação |
|----|------------|---------------------|
| **US03** | Como cliente potencial, eu quero agendar em no máximo 3 cliques da home, para evitar fricção e abandono. | 1º clique: CTA na Hero. 2º clique: Scroll até formulário. 3º clique: Preencher (autofill) +Enviar. |
| **US04** | Como administrador, eu quero receber solicitações no Google Agenda, para não perder nenhum lead e gerenciar minha agenda. | Cada submissão cria evento no Google Agenda com todos os dados do cliente. |

### 7.3 EP03 — Autoridade Local

| ID | User Story | Critério de Aceitação |
|----|------------|---------------------|
| **US05** | Como visitante, eu quero ver avaliações reais do Google, para validar a confiabilidade do serviço. | Seção de avaliações puxa dados do Google Business Profile. Exibe mínimo 5 avaliações recentes. |
| **US06** | Como visitante, eu quero visualizar a localização exata do studio em Pinhais no mapa, para planejar minha visita. | Mapa interativo do Google Maps integrado. Endereço textual com link para rotas. |

---

## 8. Cronograma

| Semana | Entrega | Funcionalidade |
|--------|---------|--------------|
| **Sem 1** | Setup + Design System | Configuração Next.js + Tailwind, Design System Premium Dark, Hero, Sobre |
| **Sem 2** | Image Comparison Slider | Componente Slider responsivo, categorias, touch events |
| **Sem 3** | Agendamento + Google Calendar | Formulário 3 cliques, integração Calendar API, feedback |
| **Sem 4** | Local SEO + Social Proof | Google Business Profile API, Reviews dinâmicos, Maps |
| **Sem 5** | Contato + WhatsApp + Footer | Formulário contato, botão flutuante, footer, polish geral |
| **Sem 6** | SEO + Performance + QA | Meta tags, Schema.org, GA4, otimização Lighthouse, testes |

**Total:** 6 semanas  
**Carga:** 80-100 horas

---

## 9. Plano de Manutenção de Componentes

### 9.1 Visão Geral

A manutenção ensures que todos os componentes mantenham consistência com o Design System Premium Dark Mode ao longo do tempo.

### 9.2 Componentes e Frequência de Manutenção

| Componente | Responsabilidade | Frequência | Critério de Aceite |
|------------|------------------|------------|-------------------|
| **Header** | Logo, navegação, sticky em scroll | Mensal | Logo atualizado, links funcional, backdrop blur effect |
| **Hero** | Background, headline, CTA | Quinzenal | Imagem de background atualizada (novos carros), CTA funcional |
| **Image Comparison Slider** | Imagens antes/depois, touch | Semanal | Novas fotos de projetos adicionadas, performance slider ≥60fps |
| **Services Grid** | Cards de serviço | Mensal | Informações de preços atualizadas, ícones consistentes |
| **Social Proof** | Avaliações Google | Diário (cache 24h) | Avaliações recentes visíveis, rating ≥4.5 |
| **Appointment Form** | Campos,validação, integração | Mensal | Validação funcionando, eventos no Calendar |
| **Google Maps** | Localização Pinhais | Trimestral |API key válida, coordenadas corretas |
| **WhatsApp Button** |Link flutuante | Mensal | Número correto, link wa.me funcional |
| **Footer** | Links, endereço, redes | Trimestral | Links atualizados, endereço correto |

### 9.3 Design System Tokens (Tailwind CSS)

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Premium Dark Mode Palette
        background: {
          primary: '#0a0a0a',
          secondary: '#141414',
          tertiary: '#1f1f1f',
        },
        accent: {
          gold: '#d4af37',
          goldLight: '#e5c158',
          goldDark: '#b8962f',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1a1',
          muted: '#6b6b6b',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        // Consistente spacing system
        xs: '0.25rem',   // 4px
        sm: '0.5rem',    // 8px
        md: '1rem',      // 16px
        lg: '1.5rem',   // 24px
        xl: '2rem',      // 32px
        '2xl': '3rem',  // 48px
        '3xl': '4rem',  // 64px
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
}
```

---

## 10. Riscos e Mitigações

| Risco | Prob. | Impacto | Mitigação |
|-------|------|---------|-----------|
| **Atraso em aprovação de design** | Alta | Alto | Wireframes baixa fidelidade na Sem 1 |
| **Google Business API quota** | Média | Médio | Cache local + fallback estático |
| **Performance Slider mobile** | Média | Médio | Teste Lighthouse desde Sem 2, otimização de imagens |
| **Imagens portfólio baixa qualidade** | Alta | Médio | Fotografia profissional dedicada |
| **Deploy GAS falhar** | Média | Alto | Vercel Functions como fallback |

---

## 11. Glossário

| Termo | Definição |
|-------|-----------|
| **CTA** | Call-to-Action — Elemento que orienta ação (ex: "Agendar Agora") |
| **High-Ticket** | Produto/serviço de alto valor (R$500+) |
| **Image Comparison Slider** | Componente interativo que mostra duas imagens com divisor ajustável |
| **LCP** | Largest Contentful Paint — Métrica de carregamento |
| **Local SEO** | Otimização para buscas geolocalizadas |
| **Social Proof** | Prova social — avaliações, depoimentos |
| **Touch Events** | Eventos de toque em dispositivos móveis |
| **Visual Proof** | Prova visual tangível do resultado |
| **WCAG** | Web Content Accessibility Guidelines |

---

## 12. Próximos Passos

1. Revisão do PRD pelo stakeholder — 3 dias úteis
2. Aprovação ou feedback detalhado
3. Wireframes Mobile/Desktop — Designer inicia
4. Setup de projeto — Tech Lead inicia
5. Kick-off desenvolvimento — Semana 1

---

*Documento preparado por Product Manager & Tech Lead Sênior — Apex Detail Studio Premium*