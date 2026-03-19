---
description: >-
  Como funciona o sistema de duelos: como desafiar, regras de combate,
  iniciativa e recompensas.
---

# Duelos (PvP)

Duelos são combates entre dois jogadores. Você pode desafiar outro jogador pelo **ranking de personagem** ou pela **busca de oponentes**.

---

## Como Desafiar

1. Encontre um oponente pelo ranking ou pela busca.
2. Clique em **Iniciar Duelo** — moedas são cobradas ao enviar o desafio.
3. O oponente tem **20 segundos** para aceitar ou recusar.
4. Se aceito, o duelo é simulado automaticamente e o resultado é exibido.

---

## Restrições

- A diferença de nível entre os jogadores não pode ser **maior que 5**.
- Não é possível desafiar um jogador com **menos resets** que você.
- Ambos os jogadores devem estar com a vida acima do nível crítico.
- Após desafiar um jogador, é preciso aguardar **1 hora** para desafiá-lo novamente.

---

## Combate

### Iniciativa

Quem ataca primeiro é determinado pelo maior valor entre **Força** e **Inteligência** de cada jogador, com um fator aleatório. Após o primeiro ataque, os turnos se alternam.

### Turnos

O duelo dura no máximo **10 rodadas** (cada jogador ataca uma vez por rodada). A vida nunca chega a zero — o mínimo é 1 HP.

### Resultado

- Se um jogador começa o turno com **10% de vida ou menos**, o oponente vence imediatamente.
- Se o duelo chegar ao fim das rodadas: vence quem causou **mais dano total**.

---

## Recompensas e Penalidades

Duelos agora envolvem risco real. O resultado depende de quem é **mais forte** (comparando nível e resets):

### Cenários

| Cenário | Vencedor | Perdedor |
|---|---|---|
| Igual ou mais fraco vence | +XP + rouba moedas | -XP - moedas (roubadas) |
| Mais forte vence | +XP | -XP |

### XP do Vencedor

O vencedor recebe XP baseado no nível do oponente:

* Vencer jogador de **nível mais alto** → mais XP (bônus por desafio)
* Vencer jogador de **mesmo nível** → XP padrão
* Vencer jogador de **nível mais baixo** → menos XP

### XP Perdido pelo Perdedor

A perda de XP escala com o nível do perdedor (1% a 3%) e é reduzida por desempenho:

* Quanto mais **dano causou** no duelo, menos XP perde (lutou bem, perde menos)
* A perda máxima é limitada ao XP que o vencedor ganhou (cap)
* XP nunca fica negativo (mínimo 0)
* O nível nunca diminui, mesmo que o XP caia abaixo do threshold

### Moedas Roubadas

O roubo de moedas **só acontece quando o vencedor não é mais forte**. Isso evita que jogadores fortes farmem moedas de jogadores mais fracos.

* Valor: **0.5%** das moedas do perdedor
* Cap por nível: máximo de **nível × 100** moedas (ex: lv255 = máx 25.500)
* As moedas são transferidas diretamente do perdedor para o vencedor

---

## Balanceamento de Combate

A fórmula de dano em duelos foi ajustada para tornar os combates mais decisivos:

* **Defesa a 50%** — a absorção de dano opera com metade da eficácia comparado a batalhas contra monstros. Isso reduz a frequência de rounds onde o dano é totalmente absorvido.
* **Dano mínimo por nível** — o dano mínimo por round escala com o nível do atacante (`nível / 10`). Um jogador lv255 sempre causa no mínimo 25 de dano por round, mesmo quando a absorção supera o ataque.

Essas mudanças fazem com que duelos entre jogadores de nível alto terminem de forma mais rápida e agressiva, em vez de se arrastarem por 20 turnos com dano mínimo.

---

## Notificações

Quando um jogador é desafiado e **não responde a tempo**, ele recebe uma mensagem de sistema pelo correio com:

* Quem o desafiou
* Resultado do duelo (vitória ou derrota)
* XP ganho ou perdido
* Moedas roubadas (se houve)
