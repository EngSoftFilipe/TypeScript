# TypeScript - Consumo de API com Async/Await

Projeto de estudo sobre **consumo de API** em TypeScript utilizando `async/await`, `fetch` e tipagem com `interface`.

## O que o projeto faz

Faz uma requisição para a [Fake Store API](https://fakestoreapi.com) e exibe no console as informações de um produto, como nome, ID e preço — com tipagem estática garantida pelo TypeScript.

## Arquivo

### `AsyncAwait.ts`
Função assíncrona que:
- Define uma `interface` para tipar o produto retornado pela API
- Faz uma requisição HTTP com `fetch`
- Converte a resposta para JSON com tipagem `Product`
- Exibe os dados no console
- Trata erros com `try/catch`

## Exemplo de saída

```
Nome: Fjallraven - Foldsack No. 1 Backpack
ID: 1
Preço: 109.95
```

## Conceitos utilizados

- `interface` — define a estrutura e os tipos do objeto retornado pela API
- `Promise<void>` — indica que a função é assíncrona e não retorna valor
- `async/await` — permite trabalhar com código assíncrono de forma legível
- `fetch` — realiza requisições HTTP
- `.json()` — converte a resposta da API em objeto JavaScript
- `try/catch` — captura e trata erros na requisição

## Diferença para o JavaScript

A versão em TypeScript adiciona a `interface Product`, garantindo que o objeto retornado pela API tenha exatamente os campos `title`, `id` e `price` com os tipos corretos — evitando erros em tempo de desenvolvimento.

## API utilizada

- [Fake Store API](https://fakestoreapi.com) — API gratuita para fins de estudo e testes

## Tecnologias

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
