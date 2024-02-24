---
description: >-
  Redução de delay em ataques, alterações nos textos de batalha, ajustes na
  precisão e hostilidade dos monstros, e correções em ataques críticos e erros
  de interface.
---

# 12-11-2023 | Versão 0.7

**Alterações:**

* delay para executar ataque normal caiu de 1.25 segundos para 0,5 segundos e foi adicionado a mesma quantidade de delay para ataque com skill (iremos analisar como isso vai refletir no servidor do jogo);
* algumas alterações de texto ao tentar iniciar batalha com mob:
  * "APENAS JOGADORES COM LEVEL MAIOR OU IGUAL A {N} PODEM ATACAR ESSE MOB" para "SEU NÍVEL DEVE SER MAIOR OU IGUAL A {N} PARA ATACAR";
  * "APENAS JOGADORES COM LEVEL MENOR OU IGUAL A {N} PODEM ATACAR ESSE MOB" para "SEU NÍVEL DEVE SER MENOR OU IGUAL A {N} PARA ATACAR";
  * "APENAS JOGADORES COM INTERVALO DE LEVEL ENTRE {N} E {N} PODEM ATACAR ESSE MOB" para "SEU NÍVEL DEVE SER ENTRE {N} E {N} PARA ATACAR".

**Mudanças nos monstros:**

* Chefes de Andar sempre irão acertar o ataque;
* a inteligência dos monstros agora afetam diretamente na precisão o que implica se vai acertar o ataque e também se teve acerto crítico;
* monstros agora tem atributo de hostilidade, existem 3 tipos:
  * Passivo: modo normal que te ataca após você atacar;
  * Agressivo: tem uma chance de 50% de executar ataque primeiro e sequencialmente um contra-ataque do seu personagem é executado;
  * Feróz: ao iniciar duelo você recebe um ataque inicial sem contra-atacar.

**Correções:**

* ataques críticos usando arma não estavam acontecendo desde a última atualização;
* algumas vezes quando batalhava pela primeira vez com algum monstro a lista de ações na batalha não aparecia e tinha que trocar de tela para batalhar novamente;
* algumas vezes ocorria de exibir que deu 0 de dano ao invés de informar que errou o ataque;
* algumas palavras sem acentuação correta.

Outras mudanças e correções também aplicadas para optimização e correção de bugs.
