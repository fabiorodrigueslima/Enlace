export const viewportOnce = {
  once: true,
  // Dispara a animação assim que qualquer parte da seção entra na tela.
  // Em telas pequenas, exigir 18% deixava seções altas permanentemente
  // no estado "hidden" em alguns navegadores.
  amount: 0,
};

export const fadeUp = {
  // O conteúdo continua visível mesmo se o IntersectionObserver do
  // navegador não disparar. A animação passa a ser apenas de movimento.
  hidden: { opacity: 1, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const slideLeft = {
  hidden: { opacity: 1, x: 42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight = {
  hidden: { opacity: 1, x: -42 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 1, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const cardItem = {
  hidden: { opacity: 1, y: 26, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const refinedHover = {
  y: -8,
  scale: 1.015,
  transition: { duration: 0.25, ease: "easeOut" },
};
