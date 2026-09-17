---
layout: post
title: "Lipid Biosynthesis"
date: 2023-12-15
permalink: /notes/biochemistry/lipid-biosynthesis/
description: "A completed chapter on fatty-acid, triacylglycerol, phospholipid, sphingolipid, cholesterol, lipoprotein, and steroid biosynthesis."
tags: [biochemistry, lipid-biosynthesis, cholesterol, fatty-acid-synthesis]
categories: [course-notes]
course: Biochemistry
part: "V. Biosynthesis and Metabolic Integration"
chapter: 21
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 21

> The original OneNote page contained only a date and a brief reminder. This chapter has therefore been reconstructed from the corresponding two-part course lecture, with corrected stoichiometry and a complete visual supplement.

## Why lipid synthesis is not reversed degradation

Fatty-acid synthesis and beta oxidation use chemically related oxidation-reduction steps, but they are independently organized.

| Feature             | Fatty-acid synthesis                       | Fatty-acid degradation                                 |
| ------------------- | ------------------------------------------ | ------------------------------------------------------ |
| Main location       | Cytosol in animals; plastids in plants     | Mitochondrial matrix; peroxisomes for very long chains |
| Acyl carrier        | Acyl carrier protein                       | Coenzyme A                                             |
| Two-carbon unit     | Malonyl-CoA                                | Acetyl-CoA released                                    |
| Redox cofactor      | NADPH as reductant                         | FAD and NAD+ as oxidants                               |
| Enzyme organization | Type I multifunctional synthase in animals | Separate or associated oxidation enzymes               |

This separation permits reciprocal regulation and prevents a futile cycle.

## Supplying cytosolic acetyl-CoA and NADPH

Acetyl-CoA is produced mainly in mitochondria but cannot cross the inner membrane. It condenses with oxaloacetate to form citrate, which is exported. ATP-citrate lyase then regenerates cytosolic acetyl-CoA:

$$
\mathrm{Citrate}+\mathrm{CoA}+\mathrm{ATP}+\mathrm{H_2O}
\rightarrow\mathrm{Acetyl\!\!-\!CoA}+\mathrm{Oxaloacetate}
+\mathrm{ADP}+\mathrm{P_i}.
$$

Oxaloacetate can become malate and then pyruvate through malic enzyme, producing NADPH. The oxidative pentose phosphate pathway supplies additional NADPH. In photosynthetic tissues, chloroplast light reactions provide reducing power and fatty-acid synthesis occurs in the stroma.

## Committed step: malonyl-CoA formation

Acetyl-CoA carboxylase uses biotin to carboxylate acetyl-CoA:

$$
\mathrm{Acetyl\!\!-\!CoA}+\mathrm{HCO_3^-}+\mathrm{ATP}
\rightarrow\mathrm{Malonyl\!\!-\!CoA}+\mathrm{ADP}+\mathrm{P_i}.
$$

First, biotin carboxylase uses ATP to attach carbon dioxide to enzyme-bound biotin. The biotin arm then moves to the carboxyltransferase site, where carbon dioxide is transferred to acetyl-CoA. The added carbon is later lost during condensation; decarboxylation provides the thermodynamic drive for carbon-carbon bond formation.

ACC1 supplies malonyl-CoA for synthesis in lipogenic tissues. ACC2 is associated with the mitochondrial outer membrane and produces a local malonyl-CoA pool that inhibits carnitine acyltransferase I, coordinating synthesis with oxidation.

## Fatty-acid synthase cycle

Mammalian type I fatty-acid synthase is a multifunctional dimer. Its acyl carrier protein contains a flexible 4'-phosphopantetheine arm; a cysteine in the ketoacyl synthase domain provides a second thiol.

### Loading

Malonyl/acetyl transferase loads an acetyl group and a malonyl group. The acetyl primer moves to ketoacyl synthase, while malonyl remains on ACP.

### Condensation

Malonyl-ACP decarboxylates and attacks the primer thioester, forming a beta-ketoacyl-ACP. The carbon dioxide added by ACC is released. This makes the condensation favorable and explains why synthesis uses malonyl units rather than directly joining two acetyl groups.

### Reduction, dehydration, and reduction

Beta-ketoacyl-ACP reductase uses NADPH to reduce the keto group. Dehydratase removes water to form a trans double bond. Enoyl-ACP reductase uses a second NADPH to produce a saturated acyl chain. The elongated chain returns to ketoacyl synthase, ACP is reloaded with malonyl, and the cycle repeats.

After seven cycles, thioesterase releases palmitate. The net reaction is

$$
8\mathrm{Acetyl\!\!-\!CoA}+7\mathrm{ATP}+14\mathrm{NADPH}
+14\mathrm{H^+}
\rightarrow\mathrm{Palmitate}+8\mathrm{CoA}+7\mathrm{ADP}
+7\mathrm{P_i}+14\mathrm{NADP^+}+6\mathrm{H_2O}.
$$

Seven acetyl-CoA molecules first become seven malonyl-CoA molecules; the eighth acetyl-CoA is the primer.

## Regulation of fatty-acid synthesis

ACC is the central control point. Citrate promotes polymerization and activation, signaling abundant mitochondrial carbon. Long-chain acyl-CoA inhibits. AMP-activated protein kinase phosphorylates and inhibits ACC when cellular energy is low. Insulin favors dephosphorylation and increases lipogenic gene expression; glucagon and epinephrine oppose synthesis.

Malonyl-CoA simultaneously supplies fatty-acid synthase and inhibits mitochondrial entry of long-chain fatty acids. This single metabolite coordinates pathway direction.

Longer chains are produced mainly by endoplasmic-reticulum elongation systems. Desaturases introduce cis double bonds using oxygen and electron-transfer partners. Vertebrates cannot introduce double bonds beyond the delta-9 position, making linoleate and alpha-linolenate essential dietary fatty acids.

## Eicosanoids and specialized lipid mediators

Phospholipase A2 releases arachidonic acid and related polyunsaturated fatty acids from membranes. Cyclooxygenases produce prostaglandins and thromboxanes; lipoxygenases produce leukotrienes, lipoxins, and other mediators. These products regulate inflammation, vascular tone, platelet activity, smooth muscle, and resolution.

Aspirin irreversibly acetylates cyclooxygenase. Traditional nonsteroidal anti-inflammatory drugs inhibit COX enzymes reversibly, while selective COX-2 inhibition changes the balance between anti-inflammatory benefit and cardiovascular risk.

## Triacylglycerol synthesis and glyceroneogenesis

Glycerol 3-phosphate comes mainly from reduction of the glycolytic intermediate dihydroxyacetone phosphate. Sequential acyltransferases produce lysophosphatidic acid and then phosphatidic acid. Phosphatidate phosphatase removes phosphate to form diacylglycerol, and a third acyltransferase produces triacylglycerol.

Phosphatidic acid is therefore a branch point between storage lipid and membrane phospholipid synthesis. Insulin promotes substrate uptake and lipogenesis. During fasting, adipose lipolysis releases fatty acids, yet a large fraction is re-esterified. Glyceroneogenesis, a shortened gluconeogenic route from pyruvate to dihydroxyacetone phosphate, supplies glycerol 3-phosphate when glycolysis is low.

## Glycerophospholipid synthesis

Cells synthesize phospholipids by activating either phosphatidate-derived diacylglycerol or the polar head group with cytidine diphosphate. Nucleophilic attack then forms the phosphodiester bond.

Bacteria commonly make phosphatidylserine, phosphatidylethanolamine, phosphatidylglycerol, and cardiolipin from CDP-diacylglycerol. Eukaryotes use related routes plus head-group exchange and salvage. The Kennedy pathway activates choline or ethanolamine and transfers phosphocholine or phosphoethanolamine to diacylglycerol. Phosphatidylserine can be decarboxylated to phosphatidylethanolamine; repeated methylation can convert phosphatidylethanolamine to phosphatidylcholine in some tissues and organisms.

## Sphingolipid synthesis

Serine condenses with palmitoyl-CoA, followed by reduction and acylation to produce ceramide. Ceramide is the branch point for sphingomyelin, glycosphingolipids, gangliosides, and signaling metabolites. Synthesis is distributed between endoplasmic reticulum and Golgi, so transport and organelle topology determine which leaflet receives each head group.

## Cholesterol synthesis

All 27 carbons of cholesterol derive from acetyl-CoA.

1. Three acetyl-CoA molecules form HMG-CoA, which HMG-CoA reductase reduces to mevalonate using NADPH.
2. ATP-dependent phosphorylation and decarboxylation convert mevalonate to activated five-carbon isoprene units.
3. Head-to-tail condensations form geranyl and farnesyl pyrophosphate; two farnesyl groups join head-to-head to form squalene.
4. Squalene monooxygenase forms an epoxide that cyclizes to lanosterol. Further demethylation, reduction, and double-bond rearrangement produce cholesterol.

HMG-CoA reductase is rate limiting. Cholesterol and oxysterols suppress its transcription through the SREBP-SCAP-Insig system, promote degradation, and reduce activity. AMPK phosphorylation inhibits the enzyme, while insulin favors synthesis. Statins act as competitive inhibitors.

## Lipoprotein transport and cholesterol homeostasis

Hydrophobic lipids circulate in lipoprotein particles. Chylomicrons carry dietary triacylglycerol from intestine. VLDL carries liver-derived triacylglycerol; lipolysis produces IDL and LDL. LDL delivers cholesterol through apoB-100 binding to the LDL receptor and receptor-mediated endocytosis.

HDL accepts cholesterol from peripheral cells, esterifies it through lecithin-cholesterol acyltransferase, and supports return to liver directly or through exchange with apoB-containing particles. Density reflects the lipid-to-protein ratio, not particle quality by itself.

Intracellular cholesterol suppresses synthesis and LDL-receptor production while increasing esterification. Familial hypercholesterolemia can arise from defective LDL receptors or related uptake machinery. PCSK9 promotes lysosomal degradation of LDL receptors; inhibiting PCSK9 increases receptor recycling and lowers plasma LDL cholesterol.

## Steroids and other isoprenoids

Cholesterol supplies bile acids, vitamin D, and steroid hormones. Mitochondrial side-chain cleavage produces pregnenolone, after which tissue-specific enzymes generate mineralocorticoids, glucocorticoids, and sex steroids. The isoprenoid pathway also supplies protein prenyl groups, dolichol, ubiquinone, and other essential molecules, so blocking mevalonate synthesis affects more than cholesterol alone.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="lipid-biosynthesis" title="Lipid Biosynthesis" %}

## Takeaways

- Fatty-acid synthesis uses cytosolic acetyl-CoA, malonyl-CoA, ACP, and NADPH rather than reversing beta oxidation.
- ACC commits acetyl-CoA to synthesis and coordinates synthesis with mitochondrial fatty-acid entry.
- Phosphatidic acid and ceramide are central branch points for complex lipid synthesis.
- The mevalonate pathway produces cholesterol and many nonsterol isoprenoids.
- Lipoprotein trafficking and receptor regulation are integral parts of cholesterol homeostasis.
