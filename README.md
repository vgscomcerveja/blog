# Videogames com Cerveja

[Videogames com Cerveja](https://www.vgscomcerveja.com.br) é um blog independente sobre games.

Compartilhar experiências e opiniões gamísticas tanto ao jogo em si quanto no colecionismo é o foco principal! Aqui você encontrará recomendações de jogos, notícias selecionadas, curiosidades, dicas de colecionismo e tudo mais que é relacionado ao universo virtual que tanto gostamos! :)

Este repositório contém o código-fonte do blog que atualmente está desenvolvido em **Ruby** utilizando [Jekyll](https://jekyllrb.com/) como gerador de site estático (SSR - Server-side rendering).

## Como rodar a aplicação

Depois do [Jekyll instalado](https://jekyllrb.com/docs/) e com código-fonte na sua máquina local, basta rodar o seguinte comando para subir a aplicação:

```
bundle exec jekyll serve --drafts --watch --config=_config.yml,_dev_config.yml
```

Se quiser limitar a quantidade de posts para otimizar o processo em desenvolvimento, adicione a flag `--limit_posts 10` no comando acima.

## Como converter as imagens para o formato *.webp

A aplicação espera que todas as imagens sejam no formato `*.webp`, porém a conversão atualmente é feita manualmente utilizando o software `webp parallel` e para instalá-lo:

```
sudo apt install webp parallel -y
```

Depois, use esse comando para converter as imagens:

```
find . -name "*.jpg" | parallel --bar --eta cwebp -q 90 -m 6 -segments 4 -sharp_yuv -v -metadata all {} -o {.}.webp
```

---
Desenvolvido por [@felipebbarbosa](https://github.com/felipebbarbosa)