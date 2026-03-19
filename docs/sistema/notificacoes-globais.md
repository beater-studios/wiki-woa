---
description: Sistema de notificações globais em tempo real — popups e tickers para todos os jogadores online.
---

# Notificações Globais

O sistema de notificações globais permite comunicar mensagens para todos os jogadores online. Existem dois tipos de notificação:

## Tipos

### Popup (Modal)

Mensagens importantes exibidas como um modal do WOA que o jogador precisa confirmar clicando em "Entendido". Ideal para:

* Avisos de manutenção programada
* Anúncios de eventos
* Comunicados importantes

O popup aparece **uma única vez** para cada jogador — após confirmar, não volta a ser exibido.

### Ticker (Banner)

Mensagens exibidas como um banner no centro da tela (a 25% do topo), com animação estilo "vitória/derrota":

* Linhas douradas horizontais que expandem do centro
* Texto com efeito de letter-spacing animado
* Fundo escuro semi-transparente que não bloqueia a tela
* O jogador pode continuar jogando normalmente enquanto o ticker aparece

O ticker é exibido por **6 segundos** (padrão), mas pode ser configurado para durar mais ou menos tempo.

## Notificações Automáticas

Algumas ações no jogo geram tickers automaticamente para todos os jogadores online:

### Boss Derrotado

Quando um jogador dá o golpe final em um Chefe de Andar:

> **Jogador [Lv. X]** derrotou **Nome do Boss**!

* O nome do jogador e nível aparecem em azul
* O nome do boss aparece em vermelho
* Expira em 3 minutos

### Reset de Conta

Quando um jogador reseta a conta:

> **Jogador** resetou! (Reset **#N**)

* O nome do jogador aparece em azul
* O número do reset aparece em dourado
* Expira em 2 minutos

### Respawn de Bosses

Quando o sistema revive os bosses mortos (via cron):

> Todos os **Chefes de Andar** derrotados foram **renascidos**!

* "Chefes de Andar" aparece em vermelho
* "renascidos" aparece em verde
* Expira em 10 minutos

## Como Funciona

As notificações são verificadas a cada **10 segundos** junto com o heartbeat do jogo (o mesmo mecanismo que atualiza "Jogadores Online"). Não há tráfego de rede extra.

* **Popups** são rastreados pelo navegador — ao confirmar, o ID da notificação é salvo localmente. Se trocar de navegador ou limpar dados, o popup pode aparecer novamente.
* **Tickers** são exibidos em sequência — se houver múltiplos tickers na fila, eles são mostrados um após o outro.
* Quando a aba do navegador está em segundo plano, as notificações não são processadas (evita popups inesperados ao retornar).

## Expiração

Todas as notificações possuem um tempo de expiração. Após expirar, a notificação deixa de ser enviada aos jogadores. Notificações automáticas expiram em poucos minutos — são relevantes apenas para quem está online no momento do evento.
