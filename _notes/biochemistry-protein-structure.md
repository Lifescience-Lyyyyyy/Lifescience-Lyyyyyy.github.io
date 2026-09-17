---
layout: post
title: "Three-Dimensional Structure of Proteins"
date: 2023-10-10
permalink: /notes/biochemistry/protein-structure/
description: "Backbone geometry, secondary and tertiary structure, folding, chaperones, collagen, and protein misfolding."
tags: [biochemistry, protein-structure, folding, chaperones]
categories: [course-notes]
course: Biochemistry
part: "I. Molecular Foundations"
chapter: 4
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 4

## Levels of protein structure

Primary structure is the amino-acid sequence and covalent connectivity. Secondary structure describes local regular backbone conformations. Tertiary structure is the complete three-dimensional arrangement of one polypeptide, and quaternary structure describes the assembly of multiple subunits.

This hierarchy is descriptive rather than a sequence of independent construction steps. Local and long-range interactions form cooperatively during folding.

## Backbone geometry and Ramachandran space

Peptide-bond resonance makes the C-N bond planar and usually trans. Backbone flexibility therefore comes mainly from rotation around $N-C_\alpha$ ($\phi$) and $C_\alpha-C$ ($\psi$). Steric collisions exclude most angle combinations. A Ramachandran plot displays the allowed regions and explains why glycine has broad conformational freedom while proline is strongly restricted.

Unusual angles are not automatically errors: active sites and tight turns sometimes stabilize strained conformations. However, extensive occupancy of disallowed regions is a warning sign in a structural model.

## Secondary structures

In an alpha helix, the carbonyl oxygen of residue $i$ hydrogen-bonds to the amide hydrogen of residue $i+4$. Side chains point outward, and the helix has a macrodipole. Proline can disrupt a helix because its ring restricts backbone geometry and its peptide nitrogen lacks an amide hydrogen; glycine can destabilize helices because its flexibility increases the entropy of the unfolded state.

Beta sheets contain extended strands connected by interstrand hydrogen bonds. Parallel and antiparallel sheets differ in strand direction and hydrogen-bond geometry. Turns and loops connect regular elements, frequently form recognition surfaces, and are often more mobile than the protein core.

## Motifs, domains, and quaternary assemblies

A motif is a recurring arrangement of secondary structures, such as a beta-alpha-beta unit. A domain is a compact unit that can often fold and function semi-independently. Multidomain proteins combine catalytic, regulatory, localization, and binding modules. Oligomerization can create new active sites, enable cooperativity, and permit regulation through subunit interfaces.

Fibrous proteins illustrate specialized architecture. Alpha keratin uses coiled coils and disulfide cross-links. Collagen forms a right-handed triple helix from three left-handed chains with a repeating Gly-X-Y sequence. Glycine fits the crowded center, while proline and hydroxyproline stabilize chain geometry. Vitamin C is required for prolyl hydroxylation; deficiency weakens collagen and causes scurvy.

## Forces that drive folding

The hydrophobic effect favors burial of nonpolar surface. Hydrogen bonds, ion pairs, van der Waals packing, metal coordination, and sometimes disulfides refine and stabilize the native ensemble. Folding is not a random search of every conformation. Local structure, cooperative collapse, and an energy landscape biased toward native-like states guide the process.

The native state is only modestly more stable than the unfolded ensemble. This small free-energy difference allows proteins to remain dynamic and regulatable, but also makes them sensitive to temperature, pH, solvents, mutation, and oxidation.

## Chaperones and quality control

Molecular chaperones prevent inappropriate aggregation and help proteins reach productive folding pathways. Hsp70 binds exposed hydrophobic segments in an ATP-dependent cycle. Chaperonins provide a protected chamber in which a captured chain can refold. Chaperones do not encode the final structure; they reshape the kinetic environment.

Proteins that fail quality control can be refolded, degraded by the ubiquitin-proteasome or lysosomal systems, or deposited as aggregates. Amyloid fibrils share a cross-beta architecture even when their precursor proteins are unrelated. In neurodegenerative disease, toxicity may arise from soluble oligomers, fibrils, disrupted proteostasis, or combinations of these states.

## Structure determination

X-ray crystallography provides electron-density maps for ordered crystals. Nuclear magnetic resonance probes structures and dynamics in solution. Cryo-electron microscopy is powerful for large complexes and heterogeneous assemblies. No method gives a context-free photograph: resolution, conformational heterogeneity, sample preparation, and model validation must all be considered.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="protein-structure" title="Three-Dimensional Structure of Proteins" %}

## Takeaways

- Peptide planarity and steric exclusion sharply constrain protein backbone conformations.
- Secondary structures are stabilized by backbone hydrogen bonds; tertiary structure depends strongly on hydrophobic packing.
- Domains and oligomers create modular function and regulation.
- Folding is assisted by cellular quality-control systems, and failure can lead to aggregation disease.
