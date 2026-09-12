// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research across computational neuroscience, machine learning, and molecular biology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-notes",
          title: "notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/notes/index.html";
          },
        },{id: "nav-cv",
          title: "cv",
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
