---
layout: post
title: "Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway"
date: 2023-11-17
permalink: /notes/biochemistry/glycolysis/
description: "The reactions and energetics of glycolysis, fermentation, gluconeogenic bypasses, and pentose-phosphate metabolism."
tags: [biochemistry, glycolysis, gluconeogenesis, pentose-phosphate]
categories: [course-notes]
course: Biochemistry
part: "IV. Central and Oxidative Metabolism"
chapter: 14
related_posts: false
---

[Biochemistry]({{ '/notes/biochemistry/' | relative_url }}) / Chapter 14

## Overall logic

Glycolysis converts one glucose into two pyruvate molecules in the cytosol. The investment phase spends two ATP to trap and destabilize glucose; the payoff phase produces four ATP and two NADH. Net reaction:

$$
\mathrm{Glucose}+2\mathrm{ADP}+2\mathrm{P_i}+2\mathrm{NAD^+}
\rightarrow2\mathrm{Pyruvate}+2\mathrm{ATP}+2\mathrm{NADH}
+2\mathrm{H^+}+2\mathrm{H_2O}.
$$

## Investment phase

1. **Hexokinase or glucokinase:** glucose is phosphorylated to glucose 6-phosphate, consuming ATP and trapping carbon in the cell.
2. **Phosphoglucose isomerase:** an aldose becomes fructose 6-phosphate, positioning a carbonyl for symmetric cleavage.
3. **Phosphofructokinase-1:** a second ATP forms fructose 1,6-bisphosphate. This is the committed and strongly regulated step.
4. **Aldolase:** the six-carbon sugar splits into glyceraldehyde 3-phosphate and dihydroxyacetone phosphate.
5. **Triose phosphate isomerase:** dihydroxyacetone phosphate becomes a second glyceraldehyde 3-phosphate.

The isomerase steps are essential chemical preparation: they arrange equivalent three-carbon products so the payoff pathway can operate twice per glucose.

## Payoff phase

6. **Glyceraldehyde 3-phosphate dehydrogenase:** aldehyde oxidation drives attachment of inorganic phosphate, producing 1,3-bisphosphoglycerate and NADH.
7. **Phosphoglycerate kinase:** the high-energy acyl phosphate donates a phosphoryl group to ADP. This is substrate-level phosphorylation.
8. **Phosphoglycerate mutase:** phosphate moves from C3 to C2.
9. **Enolase:** dehydration creates phosphoenolpyruvate, whose high transfer potential arises from favorable enol-to-keto tautomerization after phosphate transfer.
10. **Pyruvate kinase:** phosphoenolpyruvate phosphorylates ADP and forms pyruvate.

## Regulation

Hexokinase is inhibited by glucose 6-phosphate in many tissues. Liver glucokinase has higher $K_M$ and high capacity, helping the liver process glucose after a meal.

PFK-1 integrates energy state and biosynthetic demand. ATP and citrate inhibit; AMP and ADP activate. Fructose 2,6-bisphosphate is a potent activator that links glycolysis to hormonal regulation. Pyruvate kinase is activated by fructose 1,6-bisphosphate and inhibited by high-energy signals; liver pyruvate kinase is also inhibited by phosphorylation during glucagon signaling.

## Regenerating NAD+

Glycolysis requires oxidized NAD+. Under aerobic conditions, cytosolic NADH transfers reducing equivalents into mitochondria. Without sufficient respiratory oxidation, lactate dehydrogenase reduces pyruvate:

$$
\mathrm{Pyruvate}+\mathrm{NADH}+\mathrm{H^+}
\rightleftharpoons\mathrm{Lactate}+\mathrm{NAD^+}.
$$

Yeast instead converts pyruvate to acetaldehyde and then ethanol. Fermentation does not add ATP beyond glycolysis; its purpose is redox balance.

## Gluconeogenesis

Gluconeogenesis shares reversible reactions with glycolysis but bypasses three strongly favorable steps:

- pyruvate carboxylase and phosphoenolpyruvate carboxykinase bypass pyruvate kinase;
- fructose 1,6-bisphosphatase bypasses PFK-1;
- glucose 6-phosphatase bypasses hexokinase and is expressed mainly in liver and kidney.

Making one glucose from two pyruvate consumes four ATP, two GTP, and two NADH. Reciprocal control of PFK-1 and fructose 1,6-bisphosphatase prevents wasteful simultaneous cycling.

## Pentose phosphate pathway

The oxidative phase converts glucose 6-phosphate to ribulose 5-phosphate and generates two NADPH. The nonoxidative phase interconverts sugar phosphates through transketolase and transaldolase, producing ribose 5-phosphate for nucleotides or returning carbon to glycolysis as fructose 6-phosphate and glyceraldehyde 3-phosphate.

Flux adapts to demand: rapidly dividing cells need ribose; lipogenic cells need NADPH; erythrocytes need NADPH to maintain reduced glutathione. Glucose 6-phosphate dehydrogenase deficiency can therefore make red cells vulnerable to oxidative stress.

## Clinical and systems perspectives

Cancer cells frequently show high glucose uptake and lactate production even in oxygen, the Warburg effect. This supports biosynthetic intermediates and redox management but varies across tumors. Fluorodeoxyglucose positron-emission tomography exploits elevated glucose uptake rather than proving a single universal metabolic program.

## Illustrated reference

{% include biochemistry-gallery.liquid slug="glycolysis" title="Glycolysis, Gluconeogenesis, and the Pentose Phosphate Pathway" %}

## Takeaways

- Glycolysis couples glucose oxidation to ATP and NADH production through ten ordered steps.
- Fermentation restores NAD+ when respiratory reoxidation is limited.
- Gluconeogenesis uses dedicated bypasses rather than reversing irreversible glycolytic steps.
- The pentose phosphate pathway supplies NADPH, ribose, and flexible carbon rearrangement.
