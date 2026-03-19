---
description: Como funciona a perda de XP ao ser derrotado em batalha — monstros e bosses.
---

# Perda de XP por Morte

Ao ser derrotado em batalha, o jogador sofre uma penalidade de XP. O cálculo varia entre monstros comuns e Chefes de Andar (Bosses).

## Morte contra Monstros (MOB)

A perda de XP contra monstros é calculada com base em 3 fatores:

### 1. Base escalada pelo nível

Jogadores de nível baixo perdem menos, jogadores de nível alto perdem mais:

| Nível do jogador | Percentual base |
|---|---|
| 1 | ~1% |
| 50 | ~1.4% |
| 100 | ~1.8% |
| 150 | ~2.2% |
| 200 | ~2.6% |
| 255 | ~3% |

### 2. Cap pelo XP do monstro

A perda nunca ultrapassa o XP que o monstro concederia em caso de vitória. Isso significa que morrer contra um monstro fraco sempre resulta em uma perda pequena, independente do nível do jogador.

### 3. Fator de desempenho (dano causado)

Quanto mais dano o jogador causou na batalha, menos XP perde. Se quase venceu o monstro (causou 90% do dano), a penalidade é mínima. Se mal conseguiu lutar (causou 10% do dano), a penalidade é maior.

| Dano causado (% da vida do mob) | Redução da perda |
|---|---|
| 90% | Perde apenas 10% da penalidade |
| 70% | Perde apenas 30% da penalidade |
| 50% | Perde 50% da penalidade |
| 20% | Perde 80% da penalidade |
| 0% | Perde 100% da penalidade (máximo) |

### Exemplo prático

Um jogador **nível 100** com **500.000 XP** morre contra um monstro que dá **5.000 XP** e causou **70% de dano**:

1. Base: 500.000 × 1.8% = **9.000**
2. Cap pelo mob: min(9.000, 5.000) = **5.000**
3. Fator de dano: 5.000 × (1 - 0.70) = **1.500**
4. Perda final: **1.500 XP**

Se o mesmo jogador tivesse causado apenas **10% de dano**:

1. Base: **9.000** → Cap: **5.000** → Fator: 5.000 × 0.90 = **4.500 XP**

### Proteções

* O XP nunca fica negativo (mínimo 0)
* O nível do jogador nunca diminui — mesmo que o XP caia abaixo do threshold do nível atual, o nível permanece

## Morte contra Boss

Ao morrer contra um Chefe de Andar, o jogador **não perde XP**. Em vez disso, **recebe XP proporcional ao dano causado** como recompensa de consolação:

* O XP recebido é proporcional à porcentagem de vida do boss que o jogador tirou (máximo 75%)
* Aplica bônus de XP ativo (se houver evento de XP em dobro, por exemplo)

Isso incentiva jogadores a lutarem contra bosses mesmo sabendo que podem perder — todo dano causado é recompensado.
