# começanco com react

- instalamos 

```bash
    npm i -D react @types/react @types/react-dom 
```
instalamos react como biblioteca de Desenvolvimento pois quando criamos uma biblioteca react, esperamos que quem ira usa-la ja vai ter o react, então deixamos como desenvolvimento para não ter duplicação


- agora criamos um scrip no json para dizer, quando for fazer o build, não se preocupar com a importação do react por que ela vai ser externa

```json
    "build": "tsup src/index.tsx --format esm,cjs --dts --external react",
    "dev": "tsup src/index.tsx --format esm,cjs --dts --external react --watch",
```