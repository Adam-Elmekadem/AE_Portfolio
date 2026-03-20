export const FONT_PRODUCTS = [
  {
    id: "montserrat-charter",
    title: "Montserrat + Charter",
    heading: "Font combinations for your website",
    description:
      "Modern editorial font pairing with strong contrast and readability.",
    preview: [
      {
        sample: "The quick brown fox jumps over the lazy dog",
        family: "Montserrat, sans-serif",
      },
      {
        sample: "The quick brown fox jumps over the lazy dog",
        family: "Charter, serif",
      },
    ],
    files: [
      {
        name: "Montserrat.zip",
        url: "https://example.com/fonts/montserrat.zip",
      },
      { name: "Charter.zip", url: "https://example.com/fonts/charter.zip" },
    ],
    tags: ["Fonts"],
    image:
      "https://images.unsplash.com/photo-1581092330863-7273766d294a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "crimson-oxygen",
    title: "Crimson + Oxygen",
    heading: "Font combinations for your website",
    description:
      "High contrast elegant heading + clean sans serif body pairing.",
    preview: [
      {
        sample: "The quick brown fox jumps over the lazy dog",
        family: "Crimson Text, serif",
      },
      {
        sample: "The quick brown fox jumps over the lazy dog",
        family: "Oxygen, sans-serif",
      },
    ],
    files: [
      {
        name: "CrimsonText.zip",
        url: "https://example.com/fonts/crimsontext.zip",
      },
      { name: "Oxygen.zip", url: "https://example.com/fonts/oxygen.zip" },
    ],
    tags: ["Fonts"],
    image:
      "https://images.unsplash.com/photo-1489844091495-1edb2a9b1f56?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "satisfy-basekerville",
    title: "Satisfy + Baskerville",
    heading: "Font combinations for your website",
    description:
      "A playful script plus classic serif combination for dynamic typographic hierarchy.",
    preview: [
      {
        sample: "The quick brown fox jumps over the lazy dog",
        family: "Satisfy, cursive",
      },
      {
        sample: "The quick brown fox jumps over the lazy dog",
        family: "Baskerville, serif",
      },
    ],
    files: [
      { name: "Satisfy.zip", url: "https://example.com/fonts/satisfy.zip" },
      {
        name: "Baskerville.zip",
        url: "https://example.com/fonts/baskerville.zip",
      },
    ],
    tags: ["Fonts"],
    image:
      "https://images.unsplash.com/photo-1482863476958-2dddd0bf6a02?auto=format&fit=crop&w=1200&q=80",
  },
];

export const RESOURCES = [
  {
    id: "studio-ui-kit",
    title: "Studio UI Kit",
    subtitle: "Tailored components and layouts for cinematic creative sites",
    category: "design",
    price: "Free",
    description:
      "A complete Figma + React snippet kit built for creative studios: hero sections, gallery grids, animated CTA blocks, and hero motion patterns.",
    examples: ["Figma files", "React components", "usage notes"],
    tags: [
      "Fonts",
      "Mockups",
      "Templates",
      "Logos",
      "Brand identity guideline",
    ],
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506034814620-c5713e4adf92?auto=format&fit=crop&w=1200&q=80",
    ],
    tools: ["Figma", "React", "TailwindCSS", "Vite"],
    library: ["framer-motion"],
    fontCombinations: [
      {
        label: "01 - Modern editorial",
        title: "Montserrat + Charter",
        details: "Bold display heading with classic serif body.",
        demo: "The quick brown fox jumps over the lazy dog.",
      },
      {
        label: "02 - High contrast",
        title: "Crimson + Oxygen",
        details: "Elegant serif heading with clean sans body for readability.",
        demo: "The quick brown fox jumps over the lazy dog.",
      },
      {
        label: "03 - Script balance",
        title: "Satisfy + Baskerville",
        details: "Decorative script accent with high-legibility serif body.",
        demo: "The quick brown fox jumps over the lazy dog.",
      },
      {
        label: "04 - Minimal type",
        title: "Raleway + Roboto Slab",
        details: "Modern geometric heading with sturdy slab-serif body.",
        demo: "The quick brown fox jumps over the lazy dog.",
      },
      {
        label: "05 - Editorial rhythm",
        title: "Nanum Myeongjo + Nanum Gothic",
        details: "Warm editorial headline with crisp readable text body.",
        demo: "The quick brown fox jumps over the lazy dog.",
      },
    ],
    deepLink: "/resources/studio-ui-kit",
  },
  {
    id: "mozart-beat-kit",
    title: "Mozart Beat Kit",
    subtitle:
      "Dark textures, punchy drums, and melodic loops for modern hip hop",
    category: "beatmaking",
    price: "Free",
    description:
      "A set of 20 premium stems and presets including synth loops, drum one-shots, bass lines, and transitions for quick beat creation.",
    examples: ["Ableton project", "FL Studio patterns", "preset guide"],
    images: [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508387022731-a840f9df1abb?auto=format&fit=crop&w=1200&q=80",
    ],
    tools: ["Ableton Live", "FL Studio", "Serum"],
    library: ["samples", "presets"],
    tags: ["Drum kits"],
    deepLink: "/resources/mozart-beat-kit",
  },
  {
    id: "code-visual-story",
    title: "Code Visual Story",
    subtitle: "Animated scroll-based layout patterns for storytelling websites",
    category: "webdev",
    price: "Free",
    description:
      "React + CSS patterns for scroll-triggered narrative pages with split panels, pinned sections, and context-aware transitions.",
    examples: ["Landing page demo", "blog template", "project showreel"],
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    ],
    tools: ["React", "Framer Motion", "IntersectionObserver"],
    library: ["React Router", "clsx"],
    tags: ["Courses", "Practice Exercises", "Best Channels"],
    deepLink: "/resources/code-visual-story",
  },
];
