# Guia de Contribuição

Obrigado pelo interesse em contribuir com o **Memoize Site**! Este documento descreve o processo para reportar bugs, sugerir melhorias e enviar código.

---

## Índice

- [Código de Conduta](#código-de-conduta)
- [Como reportar um bug](#como-reportar-um-bug)
- [Como sugerir uma melhoria](#como-sugerir-uma-melhoria)
- [Configurando o ambiente](#configurando-o-ambiente)
- [Fluxo de desenvolvimento](#fluxo-de-desenvolvimento)
- [Padrão de commits](#padrão-de-commits)
- [Abrindo um Pull Request](#abrindo-um-pull-request)
- [Padrões de código](#padrões-de-código)

---

## Código de Conduta

Este projeto adota o [Contributor Covenant](CODE_OF_CONDUCT.md). Ao contribuir, você concorda em respeitar esse código.

---

## Como reportar um bug

1. Verifique se o bug já foi reportado nas [Issues](../../issues).
2. Se não, abra uma nova issue usando o template **Bug Report**.
3. Inclua o máximo de contexto possível: passos para reproduzir, comportamento esperado vs. atual, screenshots e ambiente (SO, browser, versão do Bun).

---

## Como sugerir uma melhoria

1. Verifique as [Issues](../../issues) e [Discussions](../../discussions) para evitar duplicatas.
2. Abra uma issue usando o template **Feature Request**.
3. Descreva o problema que a feature resolve, não apenas a solução.

---

## Configurando o ambiente

### Pré-requisitos

- [Bun](https://bun.sh/) `>= 1.x`
- [Git](https://git-scm.com/)

### Passos

```bash
# 1. Fork e clone
git clone https://github.com/<seu-usuario>/site.git
cd site

# 2. Instale as dependências
bun install

# 3. Suba o servidor local
bun run dev
```

O servidor estará disponível em `http://localhost:8787`.

---

## Fluxo de desenvolvimento

```
main
 └── feat/nome-da-feature   ← branch de trabalho
      └── commits atômicos
           └── Pull Request → main
```

1. Crie uma branch a partir de `main`:
   ```bash
   git checkout -b feat/minha-feature
   ```
2. Faça seus commits seguindo o [padrão abaixo](#padrão-de-commits).
3. Execute `bun run check` antes de abrir o PR.
4. Abra o Pull Request apontando para `main`.

---

## Padrão de commits

Este projeto usa [Conventional Commits](https://www.conventionalcommits.org/). O hook de pre-commit valida automaticamente via commitlint.

### Formato

```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

### Tipos aceitos

| Tipo | Quando usar |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Apenas documentação |
| `style` | Formatação, sem mudança de lógica |
| `refactor` | Refatoração sem feat/fix |
| `perf` | Melhoria de performance |
| `test` | Adição ou correção de testes |
| `chore` | Tarefas de build, CI, dependências |
| `revert` | Revertendo um commit anterior |

### Exemplos

```
feat(flashcards): adicionar animação de virada do card
fix(router): corrigir captura de parâmetros com regex
docs: adicionar exemplos de uso do pacote @css
chore: atualizar biome para v2.4
```

---

## Abrindo um Pull Request

- Título seguindo Conventional Commits: `feat(escopo): descrição`.
- Descrição clara do **problema** e da **solução**.
- Screenshots ou vídeos para mudanças visuais.
- Todos os checks de CI devem passar antes do review.
- PRs pequenos e focados têm review mais rápido.

---

## Padrões de código

### Geral

- **Biome** cuida de lint e formatação. Rode `bun run check` antes de commitar.
- Indentação: 2 espaços.
- Aspas simples, sem ponto-e-vírgula.
- Sem comentários óbvios — o nome do identificador já documenta.

### Componentes JSX

- Cada página vive em `src/<nome>/` seguindo a estrutura padrão (veja README).
- Estilos ficam no arquivo do componente usando `@css`.
- Traduções ficam em `i18n.js` — nunca hardcode texto em componentes.

### Pacotes internos

- Alterações em `packages/` devem ser genéricas e reutilizáveis.
- Não adicione dependências externas sem discussão prévia em issue.

---

Dúvidas? Abra uma [Discussion](../../discussions) ou entre em contato via [suporte@memoize.cards](mailto:suporte@memoize.cards).
