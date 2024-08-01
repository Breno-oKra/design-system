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