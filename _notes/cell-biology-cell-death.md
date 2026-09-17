---
layout: post
title: "Cell Death"
date: 2024-05-14
permalink: /notes/cell-biology/cell-death/
description: "Apoptosis, pyroptosis, necroptosis, ferroptosis, necrosis, and their developmental and disease roles."
tags: [cell-biology, apoptosis, pyroptosis, ferroptosis]
categories: [course-notes]
course: Cell Biology
part: "III. Information, Signaling, and Cell Fate"
chapter: 14
related_posts: false
---

[Cell Biology]({{ '/notes/cell-biology/' | relative_url }}) / Chapter 14

## Why cells die

Programmed death removes transient developmental structures, adjusts cell number, eliminates irreparably damaged cells, and maintains adult tissue homeostasis. Death mechanisms differ in membrane integrity and immune effect. Apoptosis is usually contained and weakly inflammatory; lytic pathways release intracellular material and often activate immunity.

## Apoptosis

Apoptotic cells shrink, condense chromatin, fragment nuclei, form membrane blebs, and separate into apoptotic bodies. Phosphatidylserine appears on the outer leaflet and marks the cell for phagocytosis before membrane rupture. Caspases are cysteine proteases that cleave after selected aspartates. Initiator caspases activate executioner caspases 3, 6, and 7, which dismantle the cytoskeleton, nuclear lamina, DNA-repair machinery, and the inhibitor of the CAD nuclease.

In the extrinsic pathway, trimeric death receptors such as Fas assemble an adaptor platform that activates caspase-8. FLIP and decoy mechanisms can inhibit this step. In the intrinsic pathway, Bax and Bak permeabilize the mitochondrial outer membrane, releasing cytochrome c. Cytochrome c and Apaf-1 assemble the apoptosome, which activates caspase-9.

Bcl-2-family proteins set the mitochondrial threshold. Anti-apoptotic members bind pro-apoptotic BH3 helices; BH3-only proteins sense stress and release or activate Bax/Bak. Severe DNA damage stabilizes p53, inducing factors such as PUMA and NOXA. Cleavage of Bid by caspase-8 links death receptors to mitochondria. Inhibitor-of-apoptosis proteins restrain caspases, while anti-IAP proteins antagonize them.

## Pyroptosis and inflammasomes

Pattern-recognition receptors detect pathogen-associated or damage-associated signals. Inflammasome sensors such as NLRP3, NLRC4, and AIM2 assemble platforms for caspase-1. Caspase-1 matures interleukin-1 beta and cleaves gasdermin D. The liberated gasdermin N-terminal domain forms membrane pores, causing swelling, lysis, and inflammatory mediator release. Cytosolic bacterial LPS can activate noncanonical caspases 4 and 5 in humans or caspase-11 in mice.

Other proteases connect death programs: caspase-3 cleavage of gasdermin E can convert an apoptotic stimulus into pyroptosis, and cytotoxic lymphocyte granzymes can activate gasdermins in target cells.

## Necroptosis, ferroptosis, and accidental necrosis

When death-receptor signaling occurs without sufficient caspase-8 activity, RIPK1 and RIPK3 can assemble a necrosome. RIPK3 phosphorylates MLKL, whose oligomers disrupt the plasma membrane. Necroptosis is therefore regulated but lytic.

Ferroptosis results from iron-dependent phospholipid peroxidation. Polyunsaturated membrane lipids are vulnerable; glutathione peroxidase 4 normally reduces lipid hydroperoxides using glutathione. Iron availability, lipid composition, cystine uptake, glutathione synthesis, and GPX4 activity jointly determine susceptibility.

Accidental necrosis follows overwhelming injury, with ion imbalance, swelling, rupture, and inflammation. Real tissues may show mixed mechanisms, so morphology alone is insufficient; pathway-specific molecular evidence is needed.

## Illustrated reference

{% include cell-biology-gallery.liquid slug="cell-death" title="Cell Death" %}

## Takeaways

- Apoptosis packages cellular material for quiet removal through a caspase cascade.
- Mitochondrial permeabilization is controlled by opposing Bcl-2-family proteins.
- Pyroptosis and necroptosis are regulated lytic deaths with inflammatory consequences.
- Ferroptosis is driven by iron-dependent lipid peroxidation rather than caspases.
