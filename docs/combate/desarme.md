---
description: >-
  Como funciona o sistema de desarme: quando acontece, o que influencia
  a chance e como seus atributos ajudam a se proteger.
---

# Desarme

Durante uma batalha, o inimigo pode desarmar uma das suas armas equipadas. A arma desarmada fica inutilizada pelo resto daquela batalha. Se todas as suas armas forem desarmadas, você é forçado a lutar com **Soco**.

---

## Quando Acontece

O desarme só pode ocorrer quando **todas as condições** são atendidas:

- O inimigo causa dano maior que zero no turno.
- Você tem pelo menos uma arma equipada.
- O inimigo **não é passivo** (monstros passivos nunca desarmam).
- O cooldown de desarme não está ativo.

Se ambas as armas estiverem equipadas, a arma desarmada é escolhida aleatoriamente.

---

## Chance Máxima

A chance de desarme é limitada a **15% por turno**, independente dos fatores. Isso garante que mesmo no pior cenário o desarme não seja constante.

---

## O Que Aumenta a Chance

### Natureza do Inimigo

A natureza define o bônus base de desarme:

| Natureza | Bônus (MOB) | Bônus (Boss) |
|---|---|---|
| Passivo | 0 (não desarma) | +15 |
| Selvagem | +5 | +20 (5 + 15) |
| Agressivo | +10 | +25 (10 + 15) |

Chefes de Andar sempre recebem **+15 extra** sobre o bônus de natureza.

Consulte [Natureza dos Monstros](natureza-dos-monstros.md) para detalhes sobre cada tipo.

### Vida do Inimigo

Quanto mais cheia a barra de vida do inimigo, maior o peso — até **+7** quando está com vida cheia. Conforme o inimigo perde vida, esse bônus diminui proporcionalmente.

---

## O Que Reduz a Chance

As reduções são **multiplicativas** (percentuais), ou seja, cada fator reduz uma porcentagem da chance restante. Isso significa que a chance diminui gradualmente mas **nunca chega a zero** — sempre há uma pequena possibilidade de desarme.

### Nível

Quanto maior o seu nível, menor a chance. No nível máximo, a chance é reduzida pela **metade** (multiplicador ×0.5).

### Atributos

Cada atributo reduz a chance proporcionalmente ao quão próximo está do máximo. A redução combinada dos três atributos pode chegar a **85%**:

| Atributo | Contribuição |
|---|---|
| Força | Até 1/3 da redução total |
| Inteligência | Até 1/3 da redução total |
| Vigor | Até 1/3 da redução total |

**Exemplo**: com todos os atributos no máximo, a chance de desarme é multiplicada por ×0.15 (redução de 85%).

### Vida Atual

Quanto mais cheia a sua barra de vida, menor a chance — redução de até **40%** com vida cheia. Se sua vida estiver baixa, essa proteção diminui.

---

## Cooldown

Após ser desarmado, o inimigo precisa esperar um número de turnos antes de poder desarmar novamente. O cooldown varia conforme o tipo de inimigo:

| Tipo de inimigo | Cooldown | Mínimo para perder 2 armas |
|---|---|---|
| MOB Selvagem | 4 turnos | 5 turnos |
| MOB Agressivo | 3 turnos | 4 turnos |
| Boss Selvagem | 3 turnos | 4 turnos |
| Boss Agressivo | 2 turnos | 3 turnos |

**Exemplo**: se um MOB Selvagem desarma sua arma no turno 1, os turnos 2, 3, 4 e 5 são protegidos. O próximo desarme só pode acontecer no turno 6.

O cooldown é **por batalha** — ao iniciar uma nova batalha, o cooldown é resetado.

---

## Reequipar Automático

Ao **vencer** uma batalha, todas as armas que foram desarmadas durante o combate são **reequipadas automaticamente**. Você não precisa ir ao inventário para colocar as armas de volta.

Em caso de **derrota**, as armas permanecem desequipadas e precisam ser reequipadas manualmente pelo inventário.

---

## Exceções

A chance de desarme é **zero** quando o inimigo está com pouca vida:

- **Monstros comuns**: abaixo de 25% de vida.
- **Chefes de Andar**: abaixo de 15% de vida.

---

## Exemplos Práticos

Todas as probabilidades abaixo assumem vida cheia do inimigo e sua vida cheia.

### MOB Selvagem (cooldown: 4 turnos)

| Seu progresso | Chance por turno |
|---|---|
| Iniciante (~10%) | ~10% |
| Intermediário (~30%) | ~5% |
| Intermediário (~50%) | ~3% |
| Avançado (~70%) | ~2% |
| Máximo (100%) | ~1% |

### MOB Agressivo (cooldown: 3 turnos)

| Seu progresso | Chance por turno |
|---|---|
| Iniciante (~10%) | 15% (teto) |
| Intermediário (~30%) | ~8% |
| Intermediário (~50%) | ~4% |
| Avançado (~70%) | ~2% |
| Máximo (100%) | ~1% |

### Boss Selvagem (cooldown: 3 turnos)

| Seu progresso | Chance por turno |
|---|---|
| Iniciante (~10%) | 15% (teto) |
| Intermediário (~30%) | ~11% |
| Intermediário (~50%) | ~6% |
| Avançado (~70%) | ~3% |
| Máximo (100%) | ~1% |

### Boss Agressivo (cooldown: 2 turnos)

| Seu progresso | Chance por turno |
|---|---|
| Iniciante (~10%) | 15% (teto) |
| Intermediário (~30%) | ~13% |
| Intermediário (~50%) | ~7% |
| Avançado (~70%) | ~5% |
| Máximo (100%) | ~2% |
