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
            },},{id: "notes-introduction-to-macroeconomics",
          title: 'Introduction to Macroeconomics',
          description: "The origins of macroeconomics, core economic principles, taxation, efficiency and equity, and the paradox of thrift.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/introduction/";
            },},{id: "notes-income-wages-and-discrimination",
          title: 'Income, Wages, and Discrimination',
          description: "Compensating differentials, human capital, superstar markets, wage-setting institutions, discrimination, and labor supply.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/income-wages-discrimination/";
            },},{id: "notes-measuring-the-cost-of-living",
          title: 'Measuring the Cost of Living',
          description: "Consumer price indexes, inflation, alternative deflators, indexation, real interest rates, substitution bias, and quality adjustment.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/measuring-cost-of-living/";
            },},{id: "notes-measuring-national-income",
          title: 'Measuring National Income',
          description: "GDP, circular flows, expenditure and income accounting, real output, national income, and the limits of aggregate production measures.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/measuring-national-income/";
            },},{id: "notes-production-and-growth-i-malthus-and-solow",
          title: 'Production and Growth I: Malthus and Solow',
          description: "Growth measurement, compound growth, the Malthusian trap, capital accumulation, and the Solow steady state.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/production-growth-malthus-solow/";
            },},{id: "notes-production-and-growth-ii-growth-accounting-and-endogenous-growth",
          title: 'Production and Growth II: Growth Accounting and Endogenous Growth',
          description: "Growth accounting, total factor productivity, convergence, intertemporal choice, AK growth, and knowledge production.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/growth-accounting-endogenous-growth/";
            },},{id: "notes-saving-investment-and-the-financial-system",
          title: 'Saving, Investment, and the Financial System',
          description: "Loanable funds, equity and debt, present value, mutual funds, banks, liquidity, and financial fragility.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/saving-investment-financial-system/";
            },},{id: "notes-risk-return-and-asset-markets",
          title: 'Risk, Return, and Asset Markets',
          description: "Expected return, risk aversion, insurance, information asymmetry, market efficiency, and rational or behavioral bubbles.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/risk-return-asset-markets/";
            },},{id: "notes-income-inequality-and-poverty",
          title: 'Income Inequality and Poverty',
          description: "Inequality and poverty measures, mobility, distributive philosophies, antipoverty programs, and incentive effects.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/income-inequality-poverty/";
            },},{id: "notes-money-and-the-monetary-system",
          title: 'Money and the Monetary System',
          description: "The definition and functions of money, monetary aggregates, bank money, money demand, interest rates, and liquidity traps.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/money-monetary-system/";
            },},{id: "notes-unemployment-and-labor-market-search",
          title: 'Unemployment and Labor-Market Search',
          description: "Labor-force measurement, unemployment flows, wage rigidity, Okun&#39;s law, search models, matching, and employment policy.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/unemployment-labor-market-search/";
            },},{id: "notes-money-demand-inflation-and-monetary-neutrality",
          title: 'Money Demand, Inflation, and Monetary Neutrality',
          description: "Baumol–Tobin money demand, quantity theory, classical dichotomy, seigniorage, inflation costs, disinflation, and deflation.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/money-demand-inflation-neutrality/";
            },},{id: "notes-the-income-expenditure-model",
          title: 'The Income–Expenditure Model',
          description: "Planned expenditure, inventory adjustment, the Keynesian cross, fiscal multipliers, and open-economy leakages.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/income-expenditure-model/";
            },},{id: "notes-open-economy-macroeconomics",
          title: 'Open-Economy Macroeconomics',
          description: "Balance-of-payments accounting, net foreign investment, exchange rates, purchasing-power and interest parity, and exchange-rate regimes.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/open-economy-macroeconomics/";
            },},{id: "notes-aggregate-demand-and-aggregate-supply",
          title: 'Aggregate Demand and Aggregate Supply',
          description: "Potential output, short- and long-run aggregate supply, sticky wages and prices, demand and supply shocks, and self-correction.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/aggregate-demand-supply/";
            },},{id: "notes-monetary-and-fiscal-policy",
          title: 'Monetary and Fiscal Policy',
          description: "Interest-rate transmission, quantitative easing, financial stability, policy rules, budgets, fiscal multipliers, crowding out, and automatic stabilizers.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/monetary-fiscal-policy/";
            },},{id: "notes-inflation-and-unemployment",
          title: 'Inflation and Unemployment',
          description: "The Phillips curve, inflation expectations, supply shocks, disinflation, the sacrifice ratio, rational expectations, and hysteresis.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/inflation-unemployment/";
            },},{id: "notes-six-debates-over-macroeconomic-policy",
          title: 'Six Debates over Macroeconomic Policy',
          description: "A balanced evaluation of stabilization, fiscal stimulus, monetary rules, zero inflation, balanced budgets, and saving incentives.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/macroeconomics/six-policy-debates/";
            },},{id: "notes-introduction-to-biochemistry",
          title: 'Introduction to Biochemistry',
          description: "The chemical logic of living systems, energy flow, information flow, and the organization of metabolism.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/introduction/";
            },},{id: "notes-water-weak-interactions-and-buffers",
          title: 'Water, Weak Interactions, and Buffers',
          description: "Hydrogen bonding, the hydrophobic effect, acid-base equilibria, buffers, osmosis, and water in biochemical reactions.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/water/";
            },},{id: "notes-amino-acids-peptides-and-proteins",
          title: 'Amino Acids, Peptides, and Proteins',
          description: "Amino-acid chemistry, ionization, peptide bonds, sequence, disulfides, and spectroscopic properties.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/amino-acids-peptides-proteins/";
            },},{id: "notes-three-dimensional-structure-of-proteins",
          title: 'Three-Dimensional Structure of Proteins',
          description: "Backbone geometry, secondary and tertiary structure, folding, chaperones, collagen, and protein misfolding.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/protein-structure/";
            },},{id: "notes-protein-function-oxygen-binding-proteins",
          title: 'Protein Function: Oxygen-Binding Proteins',
          description: "Ligand binding, myoglobin, hemoglobin cooperativity, allosteric regulation, oxygen transport, and hemoglobin disorders.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/oxygen-binding-proteins/";
            },},{id: "notes-protein-function-immunoglobulins-myosin-and-actin",
          title: 'Protein Function: Immunoglobulins, Myosin, and Actin',
          description: "Antibody architecture and diversity followed by the molecular mechanics of actin-myosin contraction.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/immunoglobulins-myosin-actin/";
            },},{id: "notes-protein-function-membrane-proteins-and-transport",
          title: 'Protein Function: Membrane Proteins and Transport',
          description: "Membrane-protein architecture, electrochemical gradients, channels, carriers, pumps, and receptor signaling.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/membrane-proteins/";
            },},{id: "notes-enzyme-mechanisms-and-regulation",
          title: 'Enzyme Mechanisms and Regulation',
          description: "Transition-state stabilization, catalytic strategies, specificity, cofactors, and multiple layers of enzyme regulation.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/enzyme-mechanisms-regulation/";
            },},{id: "notes-enzyme-kinetics",
          title: 'Enzyme Kinetics',
          description: "Michaelis-Menten kinetics, derivation, parameter interpretation, inhibition, multisubstrate reactions, and allostery.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/enzyme-kinetics/";
            },},{id: "notes-carbohydrates-and-glycobiology",
          title: 'Carbohydrates and Glycobiology',
          description: "Monosaccharide stereochemistry, ring formation, glycosidic bonds, polysaccharides, glycoconjugates, and extracellular matrices.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/carbohydrates-glycobiology/";
            },},{id: "notes-nucleotides-and-nucleic-acids",
          title: 'Nucleotides and Nucleic Acids',
          description: "Nucleotide chemistry, DNA and RNA structure, base pairing, higher-order conformations, melting, and nucleic-acid catalysis.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/nucleotides-nucleic-acids/";
            },},{id: "notes-lipids",
          title: 'Lipids',
          description: "Fatty acids, storage lipids, membrane lipids, sterols, lipid signals, vitamins, and analytical methods.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/lipids/";
            },},{id: "notes-principles-of-metabolism",
          title: 'Principles of Metabolism',
          description: "Free energy, ATP, phosphoryl transfer, redox cofactors, pathway organization, and metabolic control.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/metabolism-principles/";
            },},{id: "notes-glycolysis-gluconeogenesis-and-the-pentose-phosphate-pathway",
          title: 'Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway',
          description: "The reactions and energetics of glycolysis, fermentation, gluconeogenic bypasses, and pentose-phosphate metabolism.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/glycolysis/";
            },},{id: "notes-metabolic-regulation-and-glycogen-metabolism",
          title: 'Metabolic Regulation and Glycogen Metabolism',
          description: "Hormonal control of glycolysis and gluconeogenesis, glycogen synthesis and breakdown, and tissue-specific regulation.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/metabolic-regulation-glycogen/";
            },},{id: "notes-pyruvate-oxidation-and-the-citric-acid-cycle",
          title: 'Pyruvate Oxidation and the Citric Acid Cycle',
          description: "Pyruvate dehydrogenase, the eight reactions of the citric acid cycle, regulation, amphibolic function, and anaplerosis.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/citric-acid-cycle/";
            },},{id: "notes-fatty-acid-catabolism",
          title: 'Fatty Acid Catabolism',
          description: "Lipid mobilization, mitochondrial entry, beta oxidation, unsaturated and odd-chain fatty acids, ketone bodies, and pathway regulation.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/fatty-acid-catabolism/";
            },},{id: "notes-amino-acid-oxidation-and-the-urea-cycle",
          title: 'Amino Acid Oxidation and the Urea Cycle',
          description: "Protein turnover, transamination, ammonia transport, oxidative deamination, and the complete urea cycle.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/amino-acid-oxidation-urea/";
            },},{id: "notes-amino-acid-degradation-and-one-carbon-metabolism",
          title: 'Amino Acid Degradation and One-Carbon Metabolism',
          description: "Carbon-skeleton entry points, glucogenic and ketogenic amino acids, folate and SAM chemistry, and selected metabolic disorders.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/amino-acid-degradation/";
            },},{id: "notes-oxidative-phosphorylation",
          title: 'Oxidative Phosphorylation',
          description: "Electron-transfer complexes, proton-motive force, ATP synthase, transport shuttles, inhibitors, uncoupling, and reactive oxygen species.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/oxidative-phosphorylation/";
            },},{id: "notes-lipid-biosynthesis",
          title: 'Lipid Biosynthesis',
          description: "A completed chapter on fatty-acid, triacylglycerol, phospholipid, sphingolipid, cholesterol, lipoprotein, and steroid biosynthesis.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/lipid-biosynthesis/";
            },},{id: "notes-biosynthesis-of-amino-acids-nucleotides-and-related-molecules",
          title: 'Biosynthesis of Amino Acids, Nucleotides, and Related Molecules',
          description: "Nitrogen fixation and assimilation, amino-acid families, porphyrins, purines, pyrimidines, deoxyribonucleotides, and pathway regulation.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/amino-acid-nucleotide-biosynthesis/";
            },},{id: "notes-hormonal-regulation-and-integration-of-mammalian-metabolism",
          title: 'Hormonal Regulation and Integration of Mammalian Metabolism',
          description: "Insulin, glucagon, epinephrine, tissue specialization, feeding, fasting, starvation, exercise, diabetes, and adipose signaling.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/biochemistry/hormonal-metabolic-integration/";
            },},{id: "notes-cellular-unity-and-diversity",
          title: 'Cellular Unity and Diversity',
          description: "Cell theory, the three domains of life, genome evolution, endosymbiosis, and the logic of model organisms.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cellular-unity-diversity/";
            },},{id: "notes-techniques-in-cell-biology",
          title: 'Techniques in Cell Biology',
          description: "Specimen preparation, fluorescence and electron microscopy, molecular localization, live-cell measurements, and flow cytometry.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cell-biology-techniques/";
            },},{id: "notes-analyzing-cells-molecules-and-systems",
          title: 'Analyzing Cells, Molecules, and Systems',
          description: "Protein analysis, structural biology, DNA manipulation, sequencing, genetics, and functional perturbation.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/analyzing-cells-molecules-systems/";
            },},{id: "notes-the-cytoskeleton",
          title: 'The Cytoskeleton',
          description: "Actin, microtubules, intermediate filaments, molecular motors, cell polarity, and migration.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cytoskeleton/";
            },},{id: "notes-biomembranes",
          title: 'Biomembranes',
          description: "Lipid bilayer organization, membrane asymmetry and fluidity, membrane proteins, domains, and curvature.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/biomembranes/";
            },},{id: "notes-membrane-transport",
          title: 'Membrane Transport',
          description: "Channels, carriers, pumps, electrochemical gradients, action potentials, synaptic transmission, and patch clamp.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/membrane-transport/";
            },},{id: "notes-intracellular-compartments-and-protein-sorting",
          title: 'Intracellular Compartments and Protein Sorting',
          description: "Organelle topology and protein targeting to the nucleus, mitochondria, chloroplasts, and peroxisomes.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/intracellular-compartments-protein-sorting/";
            },},{id: "notes-intracellular-membrane-traffic",
          title: 'Intracellular Membrane Traffic',
          description: "Coats, Rab and SNARE specificity, ER–Golgi transport, lysosomes, autophagy, endocytosis, and regulated secretion.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/intracellular-membrane-traffic/";
            },},{id: "notes-the-nucleus-and-chromosomes",
          title: 'The Nucleus and Chromosomes',
          description: "Nuclear organization, nucleosomes, chromatin remodeling, epigenetic inheritance, chromosome folding, and genome evolution.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/nucleus-chromosomes/";
            },},{id: "notes-the-endoplasmic-reticulum",
          title: 'The Endoplasmic Reticulum',
          description: "ER translocation, membrane-protein topology, glycosylation, folding quality control, the unfolded-protein response, and lipid synthesis.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/endoplasmic-reticulum/";
            },},{id: "notes-control-of-gene-expression",
          title: 'Control of Gene Expression',
          description: "Transcription, RNA processing, regulatory DNA, cell memory, post-transcriptional control, and small RNAs.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/control-gene-expression/";
            },},{id: "notes-cell-signaling",
          title: 'Cell Signaling',
          description: "Signal modes, molecular switches, GPCRs, RTKs, MAPK, PI3K, JAK–STAT, TGF-β, Notch, Wnt, Hedgehog, and NF-κB.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cell-signaling/";
            },},{id: "notes-the-cell-cycle",
          title: 'The Cell Cycle',
          description: "Cyclin–CDK control, DNA replication, mitosis, checkpoints, cytokinesis, and extracellular control of proliferation.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cell-cycle/";
            },},{id: "notes-cell-death",
          title: 'Cell Death',
          description: "Apoptosis, pyroptosis, necroptosis, ferroptosis, necrosis, and their developmental and disease roles.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cell-death/";
            },},{id: "notes-cell-junctions-and-the-extracellular-matrix",
          title: 'Cell Junctions and the Extracellular Matrix',
          description: "Cadherins, tight and gap junctions, extracellular-matrix architecture, integrins, mechanotransduction, and plant cell walls.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cell-junctions-extracellular-matrix/";
            },},{id: "notes-cancer",
          title: 'Cancer',
          description: "Tumor evolution, cancer genes, heterogeneity, metastasis, metabolism, targeted treatment, immunotherapy, and experimental models.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/cancer/";
            },},{id: "notes-development-and-stem-cells",
          title: 'Development and Stem Cells',
          description: "Pattern formation, morphogens, morphogenesis, neural development, pluripotency, and cellular reprogramming.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/development-stem-cells/";
            },},{id: "notes-the-immune-system",
          title: 'The Immune System',
          description: "Innate recognition, inflammation, lymphocyte development, antigen receptors, germinal centers, affinity maturation, and T-cell help.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/immune-system/";
            },},{id: "notes-stem-cells-and-tissue-renewal",
          title: 'Stem Cells and Tissue Renewal',
          description: "Intestinal stem cells, connective tissue, bone and muscle renewal, angiogenesis, hematopoiesis, and regeneration.",
          section: "Notes",handler: () => {
              window.location.href = "/notes/cell-biology/stem-cells-tissue-renewal/";
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
