---
layout: post
title: "Cancer"
date: 2024-05-21
permalink: /notes/cell-biology/cancer/
description: "Tumor evolution, cancer genes, heterogeneity, metastasis, metabolism, targeted treatment, immunotherapy, and experimental models."
tags: [cell-biology, cancer, oncogenes, tumor-suppressors]
categories: [course-notes]
course: Cell Biology
part: "IV. Multicellular Systems, Disease, and Renewal"
chapter: 16
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 16

## Cancer as somatic evolution

One mutation is rarely sufficient for malignancy. A clone acquires heritable genetic or epigenetic changes, expands if they confer advantage, diversifies, and undergoes further selection. Drivers promote disease; passengers accompany the expanding clone without causing it. Selection occurs in a changing microenvironment shaped by fibroblasts, immune cells, extracellular matrix, vessels, oxygen, and therapy.

Cancer cells sustain proliferative signaling, evade growth suppression and death, maintain replicative capacity, induce blood vessels, alter metabolism, avoid immune destruction, and eventually invade. Aerobic glycolysis supplies biosynthetic intermediates as well as ATP; high glucose uptake enables fluorodeoxyglucose PET imaging. Telomerase is reactivated in most cancers, while a minority use recombination-based alternative lengthening of telomeres.

## Oncogenes and tumor suppressors

Oncogenic mutations are typically dominant at the cellular level: one activated allele can drive signaling. Tumor-suppressor loss is often recessive and may require two hits, although dosage and dominant-negative effects complicate this rule. Retroviral studies revealed that viral oncogenes originated from captured cellular genes such as _src_.

Cancer genes become abnormal through point mutation, deletion, amplification, translocation, promoter switching, or epigenetic silencing. The Philadelphia chromosome joins _BCR_ and _ABL_, creating a constitutive kinase in chronic myeloid leukemia. In Burkitt lymphoma, an immunoglobulin enhancer drives _MYC_. Loss of _RB_ releases E2F and cell-cycle entry; loss of _TP53_ weakens arrest, repair, senescence, and apoptosis.

## Progression, heterogeneity, and metastasis

Colorectal tumorigenesis illustrates stepwise selection: loss of APC activates Wnt/beta-catenin signaling and expands crypt progenitors, followed by additional pathway alterations. Tumors branch into genetically and phenotypically distinct subclones, so one biopsy cannot always represent the whole disease. The cell of origin also matters because the same mutation acts differently in different regulatory states.

Metastasis requires local invasion, entry into circulation, survival under physical and immune stress, arrest at a distant site, exit from vessels, and colonization. Most disseminated cells fail. Epithelial-to-mesenchymal programs can aid motility, but metastatic cells often occupy partial or reversible states rather than executing one fixed transition.

## Treatment logic

Chemotherapy targets vulnerabilities associated with division; radiation creates DNA damage. Targeted drugs exploit specific drivers—for example, imatinib inhibits BCR–ABL. Resistance can arise by target mutation, pathway reactivation, bypass signaling, phenotype switching, or selection of pre-existing clones, motivating rational combinations.

Synthetic lethality kills cells only when two pathways are impaired. BRCA1/2-deficient tumors are unusually dependent on PARP-mediated repair, creating a therapeutic window for PARP inhibitors. Immune-checkpoint blockade releases inhibitory PD-1 or CTLA-4 signaling; response is influenced by antigenicity, immune infiltration, and suppressive microenvironment. Chimeric-antigen-receptor T cells combine an antibody-derived binding domain with T-cell activation and costimulation.

Organoids, engineered mice, xenografts, and patient-derived xenografts each preserve different aspects of disease. Liquid biopsy measures circulating tumor DNA, cells, proteins, or vesicles, but sensitivity and interpretation depend on tumor shedding and background noise.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="cancer" title="Cancer" %}

## Takeaways

- Cancer develops through mutation, selection, ecological interaction, and clonal diversification.
- Oncogenes activate growth programs; tumor suppressors remove constraints and repair safeguards.
- Metastasis is a multistep bottleneck rather than an automatic property of every tumor cell.
- Effective treatment must account for pathway dependence, heterogeneity, and evolutionary resistance.
