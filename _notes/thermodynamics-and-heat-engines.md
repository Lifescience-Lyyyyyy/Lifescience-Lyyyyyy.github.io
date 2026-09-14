---
layout: post
title: "Thermodynamics and Heat Engines"
date: 2025-02-25
permalink: /notes/introduction-to-modern-physics/thermodynamics-and-heat-engines/
description: "The laws of thermodynamics, reversible processes, ideal-gas paths, entropy, Carnot cycles, and heat-engine limits."
tags: [modern-physics, thermodynamics, entropy]
categories: [course-notes]
course: Introduction to Modern Physics
part: Thermal and Statistical Physics
chapter: 2
related_posts: false
---

[Introduction to Modern Physics]({{ '/notes/introduction-to-modern-physics/' | relative_url }}) / Chapter 2

> These notes reorganize the lectures on thermodynamic processes and heat engines. Sign conventions are fixed throughout: $\delta Q>0$ denotes heat absorbed by the system and $\delta W>0$ denotes work done by the system.

## State functions and process quantities

Internal energy $U$, entropy $S$, pressure $P$, volume $V$, temperature $T$, and particle number $N$ describe equilibrium states. Heat and work are path-dependent transfers, so their differentials are written $\delta Q$ and $\delta W$ rather than $dQ$ and $dW$.

For quasistatic pressure-volume work,

$$
\delta W=P\,dV.
$$

The first law is

$$
dU=\delta Q-P\,dV.
$$

For a reversible process,

$$
\delta Q_{\mathrm{rev}}=T\,dS,
$$

so the fundamental thermodynamic relation for a simple compressible system is

$$
dU=T\,dS-P\,dV+\mu\,dN.
$$

## Ideal-gas processes

For an ideal gas,

$$
PV=Nk_BT.
$$

In an isothermal process, $\Delta U=0$ for an ideal gas and

$$
W=Nk_BT\log\frac{V_f}{V_i},
\qquad
Q=W.
$$

In a reversible adiabatic process, $\delta Q=0$ and

$$
PV^\gamma=\text{constant},
\qquad
TV^{\gamma-1}=\text{constant},
$$

where $\gamma=C_P/C_V$.

## The second law

For any process,

$$
dS\ge\frac{\delta Q}{T},
$$

with equality for a reversible process. For an isolated system,

$$
\Delta S\ge0.
$$

The second law can be stated in equivalent ways:

- **Clausius statement:** heat cannot spontaneously flow from a colder body to a hotter body.
- **Kelvin-Planck statement:** no cyclic engine can convert all heat absorbed from a single reservoir into work.

The equivalence follows because violating either statement allows construction of a device that violates the other.

## Carnot cycle

A reversible Carnot engine operates between reservoirs at $T_h>T_c$ through two isothermal and two adiabatic steps. Its efficiency is

$$
\eta
=\frac{W}{Q_h}
=1-\frac{Q_c}{Q_h}
=1-\frac{T_c}{T_h}.
$$

{% include figure.liquid path="assets/img/notes/modern-physics/carnot-cycle.png" class="img-fluid rounded z-depth-1" alt="Handwritten pressure-volume diagram and equations for a Carnot cycle" caption="The original pressure-volume sketch of a Carnot cycle, combining isothermal and adiabatic branches." %}

No engine operating between the same two reservoirs can be more efficient than a reversible Carnot engine. Otherwise, coupling it to a reversed Carnot device would violate the second law.

## Refrigerators and heat pumps

A refrigerator uses work $W$ to extract heat $Q_c$ from the cold reservoir. Its coefficient of performance is

$$
\mathrm{COP}_{\mathrm{ref}}
=\frac{Q_c}{W}.
$$

For a reversible refrigerator,

$$
\mathrm{COP}_{\mathrm{ref}}^{\mathrm{Carnot}}
=\frac{T_c}{T_h-T_c}.
$$

A heat pump is evaluated by $Q_h/W$, which is one larger than the refrigerator coefficient of performance.

{% include figure.liquid path="assets/img/notes/modern-physics/heat-engine-statements.png" class="img-fluid rounded z-depth-1" alt="Handwritten heat-engine diagrams used to compare Clausius and Kelvin-Planck statements" caption="Heat-engine constructions used in the handwritten proof that the Clausius and Kelvin-Planck statements are equivalent." %}

## Entropy change of an ideal gas

Using $dU=NC_V\,dT$ and the ideal-gas equation,

$$
dS=\frac{NC_V}{T}\,dT+\frac{Nk_B}{V}\,dV.
$$

Therefore

$$
\Delta S
=NC_V\log\frac{T_f}{T_i}
+Nk_B\log\frac{V_f}{V_i}.
$$

Entropy is a state function even when the actual path is irreversible; its change may be computed along any convenient reversible path connecting the same endpoints.

## Takeaways

- Heat and work depend on the path, while internal energy and entropy are state functions.
- Reversibility is an ideal limit that maximizes engine efficiency.
- Carnot efficiency depends only on the reservoir temperatures.
- Entropy production quantifies irreversibility.
