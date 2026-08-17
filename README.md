# FORJA — Landing Page de Treino

Landing page moderna e responsiva para apresentação de um plano de força, resistência, hipertrofia e Muay Thai.

O projeto foi desenvolvido com foco em consulta rápida durante o treino, boa legibilidade e experiência mobile — especialmente em telas próximas de 360 px, como o Motorola Moto G10.

## Tecnologias

- React
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- Lucide React

## Funcionalidades

- Tema escuro com identidade em azul bebê
- Layout mobile-first sem rolagem horizontal
- Header fixo com menu responsivo
- Navegação interna com scroll suave
- Hero com atalhos para treino e alimentação
- Plano alimentar com timeline de refeições
- Treinos organizados por dia da semana
- Seletor de treino no celular e tabs no desktop
- Exercícios renderizados a partir de dados TypeScript
- Séries e repetições apresentadas no mesmo bloco
- Cards de correção de assimetria
- Orientações de condicionamento e descanso
- Exemplo visual de progressão de carga
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
- Tablets
- Notebooks
- Desktops e telas ultrawide

A meta viewport está configurada e o CSS protege a página contra overflow horizontal. No celular, cards e botões são empilhados e recebem dimensões maiores para facilitar leitura e toque.

## Identidade visual

A interface utiliza tema escuro com azul bebê como destaque principal:

```text
Azul bebê:          #89CFF0
Fundo principal:    #0B1120
Fundo secundário:   #0F172A
Cards:              #111827
Texto principal:    #F8FAFC
Texto secundário:   #CBD5E1
```

As cores estão centralizadas no tema e nas variáveis CSS de `src/index.css`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Valida o TypeScript e gera o build de produção |
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

GitHub: [[github.com/orlandoconceicao](https://github.com/orlandoconceicao)](https://github.com/orlandoconceicao)

LinkedIn: [[linkedin.com/in/orlando-conceição-582234315](https://www.linkedin.com/in/orlando-concei%C3%A7%C3%A3o-582234315)](https://www.linkedin.com/in/orlando-concei%C3%A7%C3%A3o-582234315)

Portfólio: [[orlandoconceicao.github.io](https://orlandoconceicao.github.io/)](https://orlandoconceicao.github.io)
