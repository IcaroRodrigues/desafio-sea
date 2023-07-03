
# Desafio SEA
## Como começar

Clone o repositório:

```bash
  git clone https://github.com/IcaroRodrigues/desafio-sea
```
    
Apos clonar o repositório entre na pasta do projeto:

```
  yarn install
```

Caso esteja utilizando npm ou npx basta rodar o script para rodar as dependencias de acordo com seu Package Manager.

Após essas etapas para rodar o projeto, basta rodar dois comandos:

Rode os comandos em terminais diferentes, pois um é para rodar o projeto React com o localhost:5173 e o outro é para rodar o servidor simulado do backend na porta localhost:3000

```
  yarn dev
```

```
  yarn server
```
## Formulário da aplicação
- Apenas os campos **Nome**, **CPF**, **Cargo** e **Ativo** são necessários para criar um novo funcionário no servidor. Todos os outros campos são apenas visuais.

## Funcionalidades
- Botão switch **"A etapa está concluída?"** está funcionando mostrando etapa concluída nos passos do formulário.
- Ao clicar no botão **"Adicionar Funcionário"** é mostrado o componente de formulário de cadastro de funcionário.
- Listar funcionários que estão ativos ou não, clicando no botão **"Ver apenas ativos"**.
- Ao clicar no botão **"Limpar Filtros"**, todos os funcionários serão mostrados novamente.
- Ao clicar nos botões da sidebar, indicam em qual página você está ( atualmente só mostra a página de formulário ).

## Roadmap das funcionalidades para serem implementadas
- Validação de formulário
- Máscaras para inputs como **CPF**, **RG**, **Data de nascimento**
## Tecnologias utilizadas

**Front-end:** React, Redux ( Gerenciar estados globais ), Styled-Components, ant design ( para inputs e switches ), Axios ( fazer chamadas para o backend )

**Back-end:** json-server ( simular backend )

