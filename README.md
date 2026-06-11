# Memoize Site

> Aprenda qualquer assunto **2 a 5× mais rápido** com repetição espaçada científica.

O **Memoize** é uma plataforma educacional baseada no algoritmo SM-2 de repetição espaçada. Este repositório contém o site de marketing e landing pages, construído sobre uma stack 100% JavaScript rodando na edge com Cloudflare Workers — sem framework externo, sem bundle pesado.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Runtime | [Cloudflare Workers](https://workers.cloudflare.com/) (edge, zero cold-start) |
| Tooling | [Bun](https://bun.sh/) + [Wrangler](https://developers.cloudflare.com/workers/wrangler/) |
| Qualidade | [Biome](https://biomejs.dev/) (lint + format) |
| Commits | [Conventional Commits](https://www.conventionalcommits.org/) via commitlint + Husky |
| Tipagem | TypeScript (verificação estática, sem transpilação) |
| Renderização | SSR via JSX customizado (`@h`) sem VDOM |
| CSS | CSS-in-JS com escopos hash (`@css`) |
| Roteamento | Router próprio baseado em pattern matching (`@router`) |
| i18n | Proxy dinâmico por idioma (`@i18n` + `@lang`) |

---

## Pacotes Internos

O projeto usa um monorepo leve com pacotes locais referenciados via `imports` no `package.json`:

```
packages/
├── agent/      Detecção de bots vs. usuários reais
├── component/  Classe base de componentes
├── css/        CSS-in-JS com minificação e escopo por hash
├── env/        Acesso tipado às variáveis de ambiente do Worker
├── h/          Função h() + JSX runtime customizado
├── i18n/       Internacionalização via Proxy
├── lang/       Estado global do idioma da requisição
├── paint/      Decorador @paint — vincula classe a função de render
└── router/     Router HTTP com pattern matching
```

---

## Pré-requisitos

- [Bun](https://bun.sh/) `>= 1.x`
- Conta na [Cloudflare](https://dash.cloudflare.com/) (para deploy)

---

## Instalação

```bash
git clone https://github.com/memoize-cards/site.git
cd site
bun install
```

---

## Desenvolvimento

```bash
bun run dev
```

O servidor local sobe via `wrangler dev`. Acesse `http://localhost:8787`.

---

## Scripts disponíveis

| Script | O que faz |
|---|---|
| `bun run dev` | Servidor local com hot reload |
| `bun run deploy` | Deploy para Cloudflare Workers |
| `bun run lint` | Lint com Biome |
| `bun run format` | Formata o código com Biome |
| `bun run check` | Lint + format juntos |

---

## Deploy

```bash
bun run deploy
```

Requer autenticação prévia com `wrangler login`. O deploy é feito diretamente na edge da Cloudflare.

---

## Estrutura de uma página

Cada rota segue o mesmo padrão:

```
src/<pagina>/
├── component.jsx   Componente JSX da página
├── <pagina>.js     Classe decorada com @paint
├── i18n.js         Traduções (pt, en, es…)
├── init.js         Headers e status da Response
├── route.jsx       Registro da rota no router
└── schema.json     JSON-LD para SEO
```

---

## Convenção de commits

Este projeto usa [Conventional Commits](https://www.conventionalcommits.org/). Exemplos:

```
feat(flashcards): adicionar seção de benefícios
fix(router): corrigir match de rotas com parâmetros opcionais
docs: atualizar README com instruções de deploy
```

O hook de pre-commit roda lint-staged (Biome) automaticamente.

---

## Contribuindo

Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Código de Conduta

Veja [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Segurança

Veja [SECURITY.md](SECURITY.md).

---

## Licença

Proprietário — © Memoize. Todos os direitos reservados.
