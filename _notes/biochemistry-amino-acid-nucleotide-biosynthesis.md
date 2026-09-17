---
layout: post
title: "Biosynthesis of Amino Acids, Nucleotides, and Related Molecules"
date: 2023-12-22
permalink: /notes/biochemistry/amino-acid-nucleotide-biosynthesis/
description: "Nitrogen fixation and assimilation, amino-acid families, porphyrins, purines, pyrimidines, deoxyribonucleotides, and pathway regulation."
tags: [biochemistry, amino-acid-biosynthesis, nucleotide-biosynthesis, nitrogen]
categories: [course-notes]
course: Biochemistry
part: "V. Biosynthesis and Metabolic Integration"
chapter: 22
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 22

## Nitrogen fixation and assimilation

Atmospheric nitrogen is abundant but chemically inert. Nitrogenase reduces it to ammonia:

$$
\mathrm{N_2}+8\mathrm{H^+}+8e^-+16\mathrm{ATP}
\rightarrow2\mathrm{NH_3}+\mathrm{H_2}+16\mathrm{ADP}+16\mathrm{P_i}.
$$

The Fe protein uses ATP to deliver electrons to the MoFe protein, whose metal cluster reduces nitrogen. Oxygen damages the system, so organisms protect nitrogenase through temporal separation, specialized cells, high respiration, or symbiotic nodules.

Ammonia is assimilated mainly through glutamine synthetase and glutamate synthase. Glutamine synthetase uses ATP to add ammonia to glutamate. Glutamate synthase transfers the amide nitrogen to alpha-ketoglutarate, producing two glutamates. These molecules donate most biosynthetic nitrogen.

Glutamine synthetase is regulated by cumulative feedback and, in bacteria, covalent adenylylation. Its control integrates the abundance of many nitrogen-containing end products.

## Carbon-skeleton families

Amino-acid biosynthesis is organized by central-metabolic precursors:

- alpha-ketoglutarate gives glutamate, glutamine, proline, and arginine;
- 3-phosphoglycerate gives serine, glycine, and cysteine;
- oxaloacetate gives aspartate, asparagine, methionine, threonine, lysine, and isoleucine;
- pyruvate gives alanine, valine, leucine, and part of isoleucine;
- phosphoenolpyruvate plus erythrose 4-phosphate gives phenylalanine, tyrosine, and tryptophan;
- ribose 5-phosphate contributes to histidine.

Humans cannot synthesize every member of these families at sufficient rates, creating essential amino-acid requirements. Plants and microorganisms carry the longer pathways, which are frequent antibiotic and herbicide targets.

## Feedback design

Branched pathways use several control patterns. The final product may inhibit the first committed enzyme; different isoenzymes may be inhibited by different branch products; or concerted and cumulative feedback may integrate several signals. This prevents one abundant product from shutting down synthesis of all others.

The pathways also illustrate common chemistry: PLP-dependent transamination, ATP-dependent activation, NADPH reduction, sulfur transfer, one-carbon transfer, and rearrangement.

## Specialized products

Glycine and succinyl-CoA initiate porphyrin synthesis. Repeated condensation and modification create protoporphyrin IX, which receives iron to form heme. Defects or pathway inhibition can cause porphyrias or lead toxicity.

Arginine supports nitric-oxide synthesis; glycine, arginine, and S-adenosylmethionine form creatine; glutamate, cysteine, and glycine form glutathione. Tryptophan, tyrosine, and histidine give neurotransmitters and hormones. These branches show that amino-acid metabolism supplies signaling and cofactors as well as protein monomers.

## Purine synthesis

Purines are assembled directly on phosphoribosyl pyrophosphate. Ribose 5-phosphate is activated to PRPP, and glutamine donates nitrogen in the committed reaction. Glycine, glutamine, aspartate, carbon dioxide, and two one-carbon units from tetrahydrofolate build the ring. The first complete nucleotide is IMP, which branches to AMP and GMP.

AMP synthesis uses GTP and aspartate; GMP synthesis uses ATP and glutamine. This cross-use helps balance the two products. AMP, GMP, and IMP feed back on early steps, while branch products inhibit their own branches.

Salvage pathways attach free bases to PRPP. They conserve energy and are especially important in tissues with limited de novo capacity. Defects in hypoxanthine-guanine phosphoribosyltransferase cause Lesch-Nyhan syndrome; excessive uric acid from purine degradation can cause gout.

## Pyrimidine synthesis

Pyrimidine rings are assembled first and then attached to PRPP. Cytosolic carbamoyl phosphate synthetase II uses glutamine, bicarbonate, and ATP. Aspartate transcarbamylase adds aspartate, and subsequent reactions produce orotate. Attachment to PRPP and decarboxylation yield UMP.

UMP is phosphorylated to UTP, and CTP synthetase adds glutamine-derived nitrogen to form CTP. Carbamoyl phosphate synthetase II is inhibited by UTP and stimulated by PRPP and ATP, linking supply to demand. In animals, early activities reside in the multifunctional CAD protein.

## Deoxyribonucleotides and thymidylate

Ribonucleotide reductase converts ribonucleoside diphosphates to deoxy forms using radical chemistry and reducing equivalents ultimately supplied by NADPH. Activity sites control overall rate, while specificity sites balance the four dNTP pools. Imbalanced pools increase mutation risk.

Thymidylate synthase converts dUMP to dTMP using 5,10-methylene-THF, producing dihydrofolate. Dihydrofolate reductase regenerates tetrahydrofolate with NADPH. This cycle is targeted by methotrexate, trimethoprim, and related drugs; fluoropyrimidines inhibit thymidylate synthase after metabolic activation.

## Energetic balancing and degradation

Nucleoside monophosphate kinases exchange phosphate between ATP and other nucleotides, while nucleoside diphosphate kinase equilibrates diphosphate and triphosphate pools. Purines degrade to uric acid in humans; pyrimidines degrade to soluble products that can enter central metabolism. Salvage and degradation together regulate both base availability and waste production.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="amino-acid-nucleotide-biosynthesis" title="Biosynthesis of Amino Acids, Nucleotides, and Related Molecules" %}

## Takeaways

- Nitrogenase makes ammonia available, while glutamine and glutamate distribute it through metabolism.
- Amino-acid pathways are organized into precursor families and controlled by feedback at branch points.
- Purines are built on PRPP; pyrimidine rings are built before attachment to PRPP.
- Ribonucleotide reductase and the folate-dependent thymidylate cycle create balanced DNA precursors.
