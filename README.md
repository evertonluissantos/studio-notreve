# Studio Notreve

Site institucional em Next.js App Router, TypeScript, Tailwind CSS, Lucide e Motion. Interface responsiva em português com identidade exclusivamente neutra. As composições são SVG e CSS locais; não há imagens externas nem screenshots reais fornecidos.

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm install
npm run dev
```

Abra a URL exibida no terminal. Para produção:

```sh
npm test
npm run check
npm run build
npm start
```

## Configurar antes de publicar

Copie `.env.example` para `.env.local` e preencha:

- `NEXT_PUBLIC_WHATSAPP`: número comercial real, somente dígitos, com país e DDD.
- `NEXT_PUBLIC_EMAIL`: e-mail comercial real, opcional.
- `NEXT_PUBLIC_INSTAGRAM`: URL HTTPS do Instagram real, opcional.
- `NEXT_PUBLIC_SITE_URL`: URL HTTPS oficial, sem barra final. Habilita canonical e sitemap com URLs reais.

Sem número válido, o site encaminha CTAs ao orçamento e informa que o envio ainda não está disponível. Nunca abre um destinatário fictício. O formulário valida campos, prepara a mensagem e abre o WhatsApp para o visitante confirmar o envio; não envia automaticamente e não armazena dados.

O orçamento, os dados de contato e as redes sociais precisam ser configurados antes de abrir a captação comercial. Variáveis `NEXT_PUBLIC_*` são públicas e ficam incorporadas ao build: não use segredos nelas. Após alterações, faça um novo build/deploy.

## Conteúdo

- `src/config/company.ts`: dados e links da empresa.
- `src/data/content.ts`: serviços, projetos, processo e FAQ.
- `src/components/studio-site.tsx`: seções e interações.
- `src/app/globals.css`: identidade, layouts e responsividade.
- `src/lib/contact.mjs`: URL e mensagem do WhatsApp.

Os quatro projetos possuem conceitos visuais explicitamente identificados como demonstrações ilustrativas. As descrições foram fornecidas no briefing; não são adicionados clientes, resultados ou tecnologias não informadas. Preencha `demoUrl` somente com uma URL válida. Substitua conceitos por screenshots reais quando disponíveis; use `next/image` para imagens raster locais. Não há links de demonstração fictícios.

## Vercel

Importe este diretório como projeto Next.js, configure as variáveis acima e use o comando `npm run build`. O preset Next.js detecta as rotas e o output automaticamente. Não há banco, autenticação ou backend adicional.

## SEO

Título, descrição, Open Graph, favicon, robots e sitemap são gerados pelo App Router. A imagem de compartilhamento `public/og.png` tem 1200×630; seu original vetorial é `public/og.svg`. Configure a URL oficial antes de publicar. O build usa Webpack para compatibilidade com este ambiente Windows.

## Verificações

O teste do contato confirma a codificação de acentos, preservação dos dados e bloqueio de links sem número válido. FAQ usa `details` nativo, modal usa `dialog` nativo com Escape e restauração do foco, navegação de serviços aceita teclas de seta, Home e End. Preferência por movimento reduzido é respeitada.
