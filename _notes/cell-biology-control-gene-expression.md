---
layout: post
title: "Control of Gene Expression"
date: 2024-04-16
permalink: /notes/cell-biology/control-gene-expression/
description: "Transcription, RNA processing, regulatory DNA, cell memory, post-transcriptional control, and small RNAs."
tags: [cell-biology, gene-expression, transcription, rna]
categories: [course-notes]
course: Cell Biology
part: "III. Information, Signaling, and Cell Fate"
chapter: 11
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 11

## From DNA to RNA

RNA polymerase reads the DNA template 3′ to 5′ and synthesizes RNA 5′ to 3′. Promoter asymmetry determines the template strand and direction. Bacterial sigma factors help one polymerase recognize promoter classes. Eukaryotes use RNA polymerase I for most rRNA, polymerase II for mRNA and many regulatory RNAs, and polymerase III for tRNA, 5S rRNA, and other small RNAs.

RNA polymerase II requires general transcription factors. TFIID recognizes core promoter elements, TFIIB positions the polymerase, and TFIIH opens DNA and phosphorylates the polymerase tail. Activators at enhancers recruit coactivators, chromatin regulators, and Mediator. Transcription creates positive supercoiling ahead and negative supercoiling behind, relieved by topoisomerases.

## RNA processing

The polymerase II tail coordinates processing with transcription. A 7-methylguanosine cap is added early through an unusual 5′–5′ linkage. The spliceosome uses small nuclear ribonucleoproteins to perform two transesterification reactions: the branch-point 2′-OH attacks the 5′ splice site to form a lariat, then the released exon attacks the 3′ splice site. Cleavage and polyadenylation factors recognize the 3′ signal, cut the transcript, and add a poly(A) tail.

Alternative splicing, alternative cleavage, and RNA editing let one locus produce distinct products. Errors have direct clinical effects; many disease-causing point mutations disrupt splice sites or regulatory elements.

## Sequence-specific regulation

DNA-binding proteins recognize sequence patterns mainly through chemical features in the major groove. Binding sites are better represented by position-weight matrices than by one exact consensus. Cooperative binding can convert graded factor concentration into a sharper response. Nucleosome breathing transiently exposes DNA; once one factor binds, remodeling or neighboring interactions can facilitate additional binding.

Enhancers act across long distances through looping, while insulators and domain boundaries restrict inappropriate communication. Multiple activators often act synergistically because they recruit complementary steps. Repressors can compete for DNA, mask activators, recruit histone deacetylases, or block productive initiation.

## Cell identity and memory

Combinatorial regulation lets a limited set of factors specify many cell states. Positive-feedback loops maintain a regulator after the initiating signal disappears. DNA methylation, stable chromatin states, and chromosome-wide systems such as X-chromosome inactivation reinforce memory. Reprogramming to induced pluripotency demonstrates that differentiated states are stable regulatory attractors, not irreversible DNA changes.

## Post-transcriptional control

Untranslated regions regulate localization, translation initiation, and decay. Deadenylation often begins mRNA turnover, making poly(A)-tail length part of a molecular timer. RNA-binding proteins can expose or hide translation sites; riboswitches change structure after binding metabolites.

MicroRNAs guide Argonaute-containing complexes to partially complementary targets, reducing translation and accelerating decay. Small interfering RNAs usually pair more extensively and can direct cleavage. Because one small RNA can influence many transcripts, these pathways reshape networks rather than acting as isolated switches.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="control-gene-expression" title="Control of Gene Expression" %}

## Takeaways

- Gene output is controlled at transcription, processing, export, translation, and decay.
- Enhancers act combinatorially and in the context of chromatin.
- Feedback and epigenetic mechanisms stabilize cell identity.
- Alternative processing and regulatory RNAs greatly expand the information produced from a genome.
