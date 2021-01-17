## avoiding_common_attacks.md


Les différents smart contracts présnet dans cette DAPP utilisent les librairies fournies par OpenZeppelin afin de se prémunir contre les attaques les plus communes :


Access Restriction -  Avec la librairie Ownable nous sommes assurés que les appels de fonctions se font uniquement que par l'addresse ayant déployé le contrat.

Reentrancy Protection - La MAJ du le blockchain ethereum sur la version Istanbul permet una attaque de réentrance. NOus nous sommes assurés de pouvoir eviter cela.