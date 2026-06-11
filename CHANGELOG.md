# Changelog

Todas as mudanças notáveis neste projeto são documentadas aqui.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)
e este projeto segue [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [Unreleased]

### Adicionado
- Página guia de flashcards (`/en/flashcards`)
- Módulo AdSense no layout master
- Módulo Google Analytics no layout master

### Corrigido
- Schema `itemReviewed` adicionado ao `Review`
- Variáveis no `TwitterCard` e `OpenGraph` corrigidas

---

## [1.0.0] — 2026-06-11

### Adicionado
- Site inicial com landing page, política de privacidade e termos de uso
- Roteador HTTP próprio com pattern matching e suporte a i18n
- CSS-in-JS com escopos por hash
- Detecção de bots para SEO
- Deploy na edge via Cloudflare Workers
