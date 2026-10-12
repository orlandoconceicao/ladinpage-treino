# FORJA — Landing Page de Treino

Landing page moderna e responsiva para apresentação de um plano de força, resistência e hipertrofia com preparação complementar para o Corpo de Bombeiros / CBMMS.

O projeto foi desenvolvido com foco em consulta rápida durante o treino, boa legibilidade e experiência em celulares — especialmente em telas próximas de 360 px, como o Motorola Moto G10.

## Projeto online

Acesse a aplicação em produção:

[Ver projeto online](https://ladinpage-treino.vercel.app/)

## Tecnologias

- React
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- Lucide React

## Funcionalidades

- Tema escuro em preto, branco e tons neutros de cinza
- Interface pensada primeiro para celulares, sem rolagem horizontal
- Cabeçalho fixo com menu responsivo
- Navegação interna com rolagem suave
- Apresentação com atalho direto para o treino
- Treinos organizados por dia da semana
- Seletor de treino no celular e abas no computador
- Exercícios renderizados a partir de dados TypeScript
- Séries e repetições apresentadas no mesmo bloco
- Divisão semanal de cinco treinos: dois dias de pernas, dois de costas e um de peito e ombros
- Descanso no sábado e no domingo
- Orientações de descanso entre séries, técnica e progressão de carga
- Animações discretas com suporte a movimento reduzido
- Botão móvel para voltar ao topo

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado.

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O terminal exibirá o endereço local da aplicação, normalmente `http://localhost:5173`.

## Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

## Estrutura do projeto

```text
.
├── src/
│   ├── data/
│   │   └── workouts.ts    # Dados dos treinos e exercícios
│   ├── App.tsx            # Componentes e seções da landing page
│   ├── index.css          # Tema, estilos globais e responsividade
│   ├── main.tsx           # Inicialização da aplicação
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Dados dos treinos

Os exercícios ficam separados da interface em `src/data/workouts.ts`.

Cada exercício possui:

- Nome
- Número de séries
- Faixa de repetições ou duração
- Unidade (`repetições` ou `segundos`)

Exemplo:

```ts
ex('Agachamento Livre', '4', '6–8')
```

O componente de exercício apresenta essa informação como:

```text
4 séries × 6–8 repetições
```

## Responsividade

O projeto foi preparado para:

- 320 px
- 360 px
- 375 px
- 390 px
- 414 px
- Dispositivos móveis maiores
- Notebooks
- Desktops e telas ultrawide

A configuração de exibição está preparada e o CSS protege a página contra rolagem horizontal. No celular, cartões e botões são empilhados e recebem dimensões maiores para facilitar leitura e toque.

## Identidade visual

A interface utiliza uma paleta monocromática:

```text
Fundo principal:    #050505
Fundo secundário:   #0A0A0A
Cartões:            #111111
Destaque:           #FFFFFF
Texto principal:    #FAFAFA
Texto secundário:   #D4D4D8
```

As cores estão centralizadas no tema e nas variáveis CSS de `src/index.css`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Valida o TypeScript e gera a versão de produção |
| `npm run preview` | Executa uma prévia local do build |

## Acessibilidade

- Contraste adequado entre textos e fundos
- Áreas de toque ampliadas no celular
- Indicadores de foco para navegação por teclado
- Labels acessíveis nos controles
- Suporte a `prefers-reduced-motion`
- Títulos e textos ampliados em telas pequenas

## Autor

**Orlando Conceição Vilhalba de Almeida**

Desenvolvedor Backend em formação, com foco em Python, Django, Django REST Framework, PostgreSQL, APIs REST e Docker, utilizando React como tecnologia complementar para integração das aplicações.

GitHub: https://github.com/orlandoconceicao

LinkedIn: https://www.linkedin.com/in/orlando-concei%C3%A7%C3%A3o-582234315

Portfólio: https://orlandoconceicao.github.io/
