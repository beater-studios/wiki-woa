---
description: >-
  Entenda como funciona o sistema de batalha do World of Aincrad: turnos,
  ações disponíveis, dano, crítico, recompensas e as diferenças entre
  monstros comuns e Chefes de Andar.
---

# Sistema de Batalha

As batalhas do World of Aincrad são **por turnos**. A cada rodada você escolhe uma ação — atacar, usar uma habilidade ou consumir um item — e o resultado é processado imediatamente. O combate continua até que você ou o inimigo chegue a zero de vida.

---

## Estrutura de um Turno

1. O jogo exibe o número do turno atual e aguarda sua ação.
2. Você escolhe entre **Ataque Físico**, **Habilidade** ou **Item**.
3. O resultado (dano causado, dano recebido, status) é apresentado.
4. Se nenhuma das partes for derrotada, o próximo turno começa.

> A partir do 2º turno há um intervalo mínimo de **1 segundo** entre ações para evitar envios duplicados acidentais.

---

## Ações Disponíveis

### Ataque Físico

Você pode atacar com a **arma principal**, a **arma secundária** ou com os **punhos** (sem arma equipada).

**Chance de acerto do jogador**

| Arma | Precisão |
|---|---|
| Arma principal | Atributo **Precisão** da própria arma |
| Arma secundária | Sempre 80% |
| Punhos (sem arma) | Sempre 80% |
| vs Chefe de Andar | Sempre acerta — independente da arma |

Cada arma tem seu próprio valor de Precisão visível na descrição do item. Quando o ataque erra, nenhum dano é causado e o inimigo ainda pode contra-atacar naquele turno.

**Chance de acerto do inimigo**

Monstros comuns têm precisão base de 80%, que aumenta com o atributo de Magia do inimigo, chegando a no máximo 90%. Chefes de Andar sempre acertam o jogador.

**Dano**

O dano de cada ataque é calculado com base nos seus atributos de **Ataque** e **Magia**, além dos bônus de equipamentos. O valor final varia **±10%** em torno de um dano base, tornando o resultado previsível mas não idêntico a cada turno. Monstros comuns causam dano com multiplicador de 1.5×, enquanto Chefes de Andar causam 2.5× — tornando bosses significativamente mais perigosos.

**Golpe Crítico**

Críticos causam aproximadamente **40% mais dano** com uma variação muito pequena (±5%). A chance de crítico depende de:

| Fator | Contribuição máxima |
|---|---|
| Ataque (proporcional ao máximo) | Até +15 pontos |
| Magia (proporcional ao máximo) | Até +10 pontos |
| Bônus de Magia | Até +15 pontos |
| Vida perdida (penalidade) | Até -15 pontos |

A chance final é comparada com um valor aleatório de 0 a 100. Quanto mais próximos seus atributos do máximo e mais cheia sua vida, maior a probabilidade de crítico.

!!! warning "Restrição de crítico"
    Quando você ou o inimigo está com vida muito baixa (abaixo de ~10–20% do total), críticos ficam **desabilitados** para aquela parte. Aventureiros e monstros na iminência da derrota não conseguem desferir golpes precisos.

---

### Habilidades

Habilidades de combate oferecem ataques especiais com regras próprias:

- Cada habilidade tem um **cooldown em turnos** que diminui conforme você evolui o nível da habilidade e aumenta seu atributo de Magia.
- O cooldown restante aparece ao lado do nome da habilidade — quando chegar a zero, ela pode ser usada.
- Algumas habilidades possuem mecânicas únicas, como ataques duplos ou precisão aumentada — os efeitos específicos variam por classe.

---

### Uso de Item

Itens de cura podem ser usados durante a batalha. Ao usar um item:

1. A cura é aplicada imediatamente na sua vida.
2. O inimigo ainda executa seu ataque naquele turno.
3. Se o ataque do inimigo te atingir, a verificação de [Desarme](desarme.md) ocorre normalmente.

A quantidade de vida recuperada depende do valor base do item, do seu atributo de **Vigor** e do nível de habilidades passivas que afetem a regeneração — quanto maior a habilidade, maior a cura. Consulte [Itens de Regeneração](../personagem/itens-de-regeneracao.md) para detalhes.

---

## Quem Ataca Primeiro

A ordem do primeiro ataque é determinada pela **Natureza** do monstro. Consulte [Natureza dos Monstros](natureza-dos-monstros.md) para entender as três naturezas (**Passivo**, **Selvagem** e **Agressivo**) e como cada uma afeta o início da batalha.

---

## Vitória e Derrota

**Vitória** — A vida do inimigo chega a zero e você ainda está vivo.

**Derrota** — Sua vida chega a zero. Mesmo que ambos morram no mesmo turno, o resultado é sempre derrota para o jogador. Ao ser derrotado por um monstro, você sofre uma [penalidade de XP](perda-de-xp.md) proporcional ao seu nível e desempenho na luta.

---

## Recompensas por Vitória

Ao vencer um monstro comum, você recebe:

| Recompensa | Detalhes |
|---|---|
| **XP** | Baseado na experiência base do monstro, podendo ser aumentado por bônus ativos |
| **Moedas** | Valor aleatório dentro da faixa do monstro, podendo ser aumentado por bônus ativos |
| **Itens** | Chance de drop com base nos itens configurados para aquele monstro |

Ao **perder**, você perde uma porcentagem da sua experiência atual que escala com seu nível — de **~1%** no nível 1 até **~3%** no nível máximo. A penalidade é reduzida proporcionalmente ao dano que você causou ao monstro. Consulte [Perda de XP](perda-de-xp.md) para detalhes completos.

---

## Chefes de Andar

Chefes de Andar seguem regras diferentes das batalhas comuns:

- A **vida persiste** entre batalhas — vários jogadores atacam o mesmo chefe ao longo do tempo até ele ser derrotado.
- O ataque do chefe **sempre acerta** o jogador, sem chance de erro.
- **Múltiplos jogadores** podem batalhar simultaneamente contra o mesmo chefe.
- O limite para **golpes críticos** é mais restrito: abaixo de ~10% de vida (contra ~20% nos monstros comuns).

### Recompensas

As recompensas variam conforme a posição ao fim da batalha. Consulte [Chefes de Andar](chefes-de-andar.md) para a tabela completa de XP, Moedas e Discovery por posição (Top 2 em Dano, Último golpe e demais sobreviventes).

Em caso de **derrota**, não há perda de XP — pelo contrário, você recebe XP proporcional ao dano causado durante a batalha, limitado a **75% da XP base** do chefe. Veja mais detalhes em [Perda de XP](perda-de-xp.md).

!!! info "Chefe derrotado durante sua ação"
    Se outro jogador derrotar o Chefe enquanto sua ação está sendo processada, nenhuma derrota é registrada para você. Você recebe XP e Moedas proporcionais ao dano causado até aquele momento, conforme sua posição no ranking de dano.
