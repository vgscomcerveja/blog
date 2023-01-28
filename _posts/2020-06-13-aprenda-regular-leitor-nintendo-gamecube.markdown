---
layout: post
title: "Aprenda a regular o leitor do Nintendo GameCube"
date: 2020-06-13 10:30
author: felipebbarbosa
session: Faça Você Mesmo
categories: games jogando
tags: [serie-faca-voce-mesmo, categoria-utilidade-publica, nintendo, game-cube]
thumbnail: /imgs/posts/utilidade_publica/11_leitor_gc/post_thumbnail.jpg
cover: /imgs/posts/utilidade_publica/11_leitor_gc/post_header.jpg
---

Você aí que tem um **Nintendo GameCube** lindão, mas que está com dificuldades de jogá-lo, pois seu leitor não lê os jogos? Seus problemas acabaram! Esse post é para você! Saiba como calibrar o leitor e trazê-lo de volta à vida em apenas alguns passos! 
{% include emoji.html url="/imgs/emojis/happy-1.svg" %}

<!--more-->

Depois de um tempo sem jogá-lo, meu GC começou a apresentar indícios que iria parar de ler jogos, pois eles não pegavam de primeira como de costume. Até que um dia, ele simplesmente parou de ler e apresentou a seguinte mensagem erro:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_error.jpg" %}

A mensagem diz basicamente o seguinte: "um erro ocorreu, desligue o videogame e cheque o manual para mais informações". Pois bem, fiz isso e lá consta:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_erro_manual.jpg" %}

Ou seja, em resumo diz para você verificar se o disco está riscado ou limpar caso esteja sujo. Caso o problema persista, é um problema interno do console, você deverá levá-lo à uma assistência. 

Putz, era isso que eu temia, pois já tinha limpado tudo e testado com vários jogos diferentes, foi então que recorri à internet. E descobri que, felizmente, a solução é relativamente fácil, só é preciso calibrar/regular o leitor, porém tem que se atentar a alguns detalhes que direi abaixo. Entretanto, pode ser que esta solução não resolva seu caso, sendo necessário levar à uma assistência técnica. Mas não custa tentar, né?

#### Ferramentas necessárias

Antes de mais nada você irá precisar de algumas ferramentas: Multímetro, [Chave Gamebit de 4,5 mm](https://lista.mercadolivre.com.br/chave-gamebit#D[A:chave%20gamebit]), Chave Philips Nº 1, Chave Philips Nº 0 e um Chave de Fenda ou Philips bem pequena (opcional).

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_required_tools.jpg" %}

{% include warning-alert.html 
  msg="1. Gostaria de enfatizar que esse tutorial, apesar de ser simples e de risco mínimo, pode causar danos ao seu videogame se não tomar os devidos cuidados e não me responsabilizo por isso. A partir daqui é por sua conta em risco, beleza?"
  msg2="<b>2. INFELIZMENTE essa não é uma solução definitiva e pode ser que seu leitor volte a parar de ler os discos novamente.</b>" %}

#### 1º passo - Remover a carcaça superior

Com a chave Gamebit, remova os quatros parafusos da parte inferior do console, desta forma:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_chave_nintendo.jpg" %}

{% include image-gif.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_open_1.gif" %}

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_chave_nintendo_parafusos.jpg" %}

Vire com cuidado o console para a posição normal (não de ponta cabeça) e remova a carcaça superior.

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_open_cover.jpg" %}

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_opened.jpg" %}

#### 2º passo - Remover o módulo do leitor

Agora, com a chave Philips, vamos remover do módulo do leitor. São diversos parafusos por toda a lateral. Começando pela direita com 5 parafusos:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_second_step_1.jpg" %}

Na parte de trás, não esqueça de remover a tampa traseira:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_second_step_2_back_cover.jpg" %}

E depois, remova mais 4 parafusos:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_second_step_2.jpg" %}

Na parte esquerda, você precisará remover o cooler antes, para isto, solte estes 2 parafusos:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_second_step_3.jpg" %}

Para facilitar, desconecte também a alimentação do cooler:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_second_step_4.jpg" %}

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_second_step_5.jpg" %}

Embaixo, onde estava o cooler, temos mais 3 parafusos, remova-os:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_second_step_6.jpg" %}

Na parte da frente, tombe com cuidado o módulo de conexão dos controles. Não é necessário desconectar o cabo flat, mas fica a seu critério. E por fim, remova mais 4 parafusos:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_third_step_1.jpg" %}

Note que estes são diferentes e vem com uma "chapinha" junto:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_third_step_2.jpg" %}

Pronto, o módulo está solto!

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_third_step_3.jpg" %}

#### 3º passo - Remover a estrutura metálica do módulo do leitor

Agora, precisamos remover a estrutura metálica que fica embaixo do módulo para termos acesso ao resistor ajustável, também conhecido como potenciômetro, que na qual utilizaremos para fazer o ajuste do leitor.

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_fourth_step_1.jpg" %}

Para isto, remova estes 6 parafusos com a chave Philips menor:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_fourth_step_2.jpg" %}

#### 4º passo - Regular o potenciômetro

Pronto! Chegamos a parte principal, é agora que vamos regular o leitor. Antes disso, precisamos esclarecer uns detalhes importantes.

Basicamente, temos apenas dois modelos de Nintendo GameCube: o **DOL-001** e o **DOL-101**. Em ambos, existem **dois resistores** que ajustam a impedância (resistência) do laser do leitor. Um é o **potenciômetro ajustável** e o outro é um **resistor fixo a 150 ohm**. 

Agora o detalhe importante: no modelo **DOL-001** a resistência que sai de fábrica para o leitor é na faixa de **450 ohm a 600 ohm**, enquanto o **DOL-101** a faixa é de **150 ohm a 250 ohm**. Não existe um número mágico, mas no entanto, melhorias de desempenho só podem ser esperadas ao dimunuir o valor da impedância do laser. 

Sendo assim, verique qual é o modelo do seu GC e ajuste o potenciômetro para ficar entre as faixas mencionadas, lembrando que o valor citado é a soma das duas resistências, ou seja, se deixarmos em 0 ohm o potenciômetro, teremos 150 ohm no total que é o valor do resistor fixo. Dito isso, vamos ajustar! 

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_modelo.jpg"
  description="No meu caso, o modelo é o DOL-101." %}

Precisamos agoras medir a resistência do potenciômetro com um multímetro. Para isto, ajuste seu multímetro para o modo de medição de resistência numa escala de **2.000 ohm** e coloque as duas pontas nos terminais do componente, conforme as fotos abaixo:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_fifth_step_1.jpg" 
  description="Este é o potenciômetro que vamos ajustar!" %}

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_fifth_step_2.jpg" 
  description="Qualquer multímetro baratinho serve!" %}

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_fifth_step_3.jpg"
  description="No meu caso, ajustei a resistência do potenciômetro em 10 ohm" %}

Caso a resistência esteja fora da faixa desejada, ajuste usando uma chave pequena girando levemente para esquerda ou direita, tanto faz:

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_fifth_step_2-5.jpg" %}

#### 5º passo - Testar

Para testar, você pode apenas encaixar a estrutura metálica de volta ao módulo do leitor, conectar o módulo na base, plugar a alimentação do cooler, conectar os cabos de energia e vídeo e sem a carcaça da tampa mesmo, colocar um disco e ligar. Para ligar o console, aperte o botão da esquerda e segure apertado o botão da direita (para simular a tampa fechada).

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_sixth_step.jpg" %}

E voilà, leitor funcionando perfeitamente! Mas caso não funcione de primeira, volte a etapa 4 e tente colocar outros valores no potenciômetro.

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_done.jpg" 
  description="Nome do jogo: Batman - Rise of Sin Tzu! :)" %}

Agora basta montar tudo de volta e curtir este ótimo videogame!

{% include image.html url="/imgs/posts/utilidade_publica/11_leitor_gc/gc_1.jpg" %}

E aí, você tem um GameCube? Já lidou com um problema como este? O que achou do tutorial?
