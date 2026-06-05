# TWA / Bubblewrap

Este projeto ja esta preparado como PWA estatica:

- `manifest.webmanifest` na raiz.
- `sw.js` na raiz, com cache offline do app shell.
- Icones Android em `assets/icons/`.
- Registro do service worker em `index.html`.

## Fluxo recomendado

1. Publique o conteudo desta pasta em um dominio HTTPS.
2. Confira se estas URLs respondem com `200`:
   - `https://SEU_DOMINIO/`
   - `https://SEU_DOMINIO/manifest.webmanifest`
   - `https://SEU_DOMINIO/sw.js`
3. Instale o Bubblewrap:

```bash
npm i -g @bubblewrap/cli
```

4. Valide a PWA:

```bash
bubblewrap validate --url=https://SEU_DOMINIO/
```

5. Gere o projeto Android a partir do manifest:

```bash
bubblewrap init --manifest=https://SEU_DOMINIO/manifest.webmanifest
```

6. Build para teste/publicacao:

```bash
bubblewrap build
```

7. Gere e publique o Digital Asset Links dentro do projeto Android gerado:

```bash
bubblewrap fingerprint generateAssetLinks --manifest=./twa-manifest.json --output=assetlinks.json
```

Depois publique esse arquivo em:

```text
https://SEU_DOMINIO/.well-known/assetlinks.json
```

Sem o `assetlinks.json` correto, o app pode abrir como Custom Tab com UI do navegador em vez de TWA verificada.
