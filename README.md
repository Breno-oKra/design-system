- ele vai converter nosso codigo para que possamos usar em outras aplicações

```bash
    npm i tsup -D
```

- --format desejamos formattar em ecmascript e commonJS
- dts exporta os arquivo de definição de tipagem,arquivos que auxiliam na tipagem

```json
   "build": "tsup src/index.ts --format esm,cjs --dts",
```

<p>agora podemos rodar npm run build para gerar os arquivos, eles seram minificados na pasta dist</p>

```bash
    npm run build
```

# usando monorepo

primeiro criamos um package.json na raiz do projeto com nom init -y e depois configuramos

<p>private:true diz que esse pacote não vai ser publicado no npm</p>

- "workspaces" nome das pastas ondes vão estar os repositorios
  colocamos /\* para dizer todas dentro de packages

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

depois pegamos um projeto que vai ter depencia de outro, ou seja ira precisar de bibliotecas parecidas ou iguais:

- exemplo: nosso projeto react precisa das bibliotecas tsup e typescript, ao invez de instalar elas dentro do projeto tokens e dentro do projeto react, pegamos o projeto react e colocamo como dependencia o projeto token, e colocamos o nome dele como esta no package dele

```json
{
  "devDependencies": {
    "@igniteOkra-ui/tokens": "*",
    "tsup": "^8.2.3",
    "typescript": "^5.5.4"
  }
}
```

<p>agora apartir da pasta raiz, fazemos um npm i, e agora so vai existir uma pasta node_modules, antes tinha uma no projeto react e tokens ja que cada uma tinha suas dependencias, agora esta de modo global na raiz do projeto</p>

# importando as funções no projeto

para fazer isso:

```tsx
import { colors } from "@igniteOkra-ui/tokens";
```

antes precisamos apontar certinho o arquivo principal de cada projeto que foi feito pelo tsup na pasta dist

- estava assim

```json
    "name": "@igniteOkra-ui/tokens",
    "version": "1.0.0",
    "main": "index.js",
```

- precisamos deixar assim

```json
    "name": "@igniteOkra-ui/tokens",
    "version": "1.0.0",
    "main": "dist/index.js",
    "module":"dist/index.mjs",
    "types":"dist/index.d.ts",
```
<p> module: é para para projetos que usam      </p>

```html
    <script type="module" src="endereco"></script> 
```

<p> types é para apontar o arquivo de tipagem para o tupescript usar </p>
