// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Research across computational neuroscience, machine learning, and molecular biology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-notes",
          title: "Notes",
          description: "Structured learning notes on neuroscience, machine learning, physics, mathematics, and biology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Reflections on research, learning, and life at the intersection of biology and AI.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Yao Lu — Curriculum Vitae. Download the full PDF or browse structured information below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-theoretical-neuroscience-computational-and-mathematical-modeling-of-neural-systems",
          title: 'Theoretical Neuroscience: Computational And Mathematical Modeling of Neural Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "notes-linear-and-logistic-regression",
          title: 'Linear and Logistic Regression',
          description: "Least squares, regularization, probabilistic classification, softmax regression, and the bias-variance trade-off.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/machine-learning/linear-and-logistic-regression/";
            },},{id: "notes-constrained-optimization-svms-and-kernels",
          title: 'Constrained Optimization, SVMs, and Kernels',
          description: "KKT conditions, maximum-margin classification, duality, soft-margin SVMs, kernels, RKHSs, and the representer theorem.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/machine-learning/optimization-svm-and-kernels/";
            },},{id: "notes-learning-theory-and-gaussian-processes",
          title: 'Learning Theory and Gaussian Processes',
          description: "PAC-style generalization bounds, growth functions, VC dimension, Gaussian process regression, and Bayesian optimization.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/machine-learning/learning-theory-and-gaussian-processes/";
            },},{id: "notes-decision-trees-ensembles-and-graphical-models",
          title: 'Decision Trees, Ensembles, and Graphical Models',
          description: "Tree splitting criteria, bagging, random forests, boosting, Bayesian networks, naive Bayes, and hidden Markov models.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/machine-learning/trees-ensembles-and-graphical-models/";
            },},{id: "notes-unsupervised-learning-and-generative-models",
          title: 'Unsupervised Learning and Generative Models',
          description: "PCA, k-means, Gaussian mixtures, EM, variational autoencoders, and denoising diffusion models.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/machine-learning/unsupervised-and-generative-models/";
            },},{id: "notes-probability-and-kinetic-theory",
          title: 'Probability and Kinetic Theory',
          description: "Probability distributions, information entropy, phase-space averages, and the Maxwell-Boltzmann velocity distribution.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/probability-and-kinetic-theory/";
            },},{id: "notes-thermodynamics-and-heat-engines",
          title: 'Thermodynamics and Heat Engines',
          description: "The laws of thermodynamics, reversible processes, ideal-gas paths, entropy, Carnot cycles, and heat-engine limits.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/thermodynamics-and-heat-engines/";
            },},{id: "notes-thermodynamic-potentials-stability-and-phase-equilibrium",
          title: 'Thermodynamic Potentials, Stability, and Phase Equilibrium',
          description: "Legendre transforms, Maxwell relations, response functions, stability criteria, chemical potential, and phase coexistence.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/thermodynamic-potentials-and-stability/";
            },},{id: "notes-statistical-ensembles-and-quantum-statistics",
          title: 'Statistical Ensembles and Quantum Statistics',
          description: "Microcanonical, canonical, and grand-canonical ensembles; partition functions; ideal gases; Bose-Einstein and Fermi-Dirac statistics.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/statistical-ensembles-and-quantum-statistics/";
            },},{id: "notes-origins-of-quantum-theory-and-matter-waves",
          title: 'Origins of Quantum Theory and Matter Waves',
          description: "Blackbody radiation, photons, the photoelectric effect, atomic spectra, the Bohr model, and de Broglie matter waves.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/origins-of-quantum-theory/";
            },},{id: "notes-hilbert-space-operators-and-measurement",
          title: 'Hilbert Space, Operators, and Measurement',
          description: "Quantum states, inner products, Hermitian operators, eigenbasis expansions, measurement, commutators, and uncertainty.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/hilbert-space-operators-and-measurement/";
            },},{id: "notes-schrödinger-dynamics-and-one-dimensional-potentials",
          title: 'Schrödinger Dynamics and One-Dimensional Potentials',
          description: "Time evolution, stationary states, probability current, wave packets, infinite wells, delta potentials, barriers, and tunnelling.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/schrodinger-dynamics-and-one-dimensional-potentials/";
            },},{id: "notes-scattering-oscillators-angular-momentum-and-identical-particles",
          title: 'Scattering, Oscillators, Angular Momentum, and Identical Particles',
          description: "Reflection and transmission, the harmonic oscillator, three-dimensional central potentials, hydrogen, and exchange symmetry.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/introduction-to-modern-physics/scattering-oscillator-angular-momentum-and-identical-particles/";
            },},{id: "projects-closed-loop-active-learning-for-sparse-neural-encoding",
          title: 'Closed-Loop Active Learning for Sparse Neural Encoding',
          description: "Reinforcement learning for efficient discovery of rare high-response features in macaque AIT cortex.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_closed_loop_active_learning/";
            },},{id: "projects-brain-inspired-representation-learning-via-resnet-jepa",
          title: 'Brain-Inspired Representation Learning via ResNet-JEPA',
          description: "Studying predictive coding and visual representations through a self-supervised ResNet-JEPA architecture.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_resnet_jepa/";
            },},{id: "projects-equivariant-graph-neural-networks-for-3d-atomistic-systems",
          title: 'Equivariant Graph Neural Networks for 3D Atomistic Systems',
          description: "Exploring an efficient EGNN variant that retains higher-degree geometric information.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_pro_egnn/";
            },},{id: "projects-rna-editing-and-trna-biology",
          title: 'RNA Editing and tRNA Biology',
          description: "Engineering natural and artificial tRNA modifications for programmable RNA editing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_rna_editing/";
            },},{id: "projects-tcp-gene-regulation-in-arabidopsis-and-soybean",
          title: 'TCP Gene Regulation in Arabidopsis and Soybean',
          description: "Investigating how TCP transcription factors regulate plant leaf development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_tcp_genes/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6F%6C%75%31%32%33@%73%74%75.%70%6B%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Lifescience-Lyyyyyy", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
