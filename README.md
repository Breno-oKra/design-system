# arquivo de tipagem global

- em base.json vai ficar a tipagem para os projetos que não usam react como o tokens

em react.json que é a tipagem para projetos que vão usar react

- extends para extender a configuração de base.json com mais algumas adicionais

```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["dom", "ES2015"],
    "module": "ESNext",
    "target": "es6"
  }
}
```

# caso queira entender os cada codigo desse faz, ou vai na documentação do typescript ouuu

joga todo o codigo em um arquivo tsconfig.json, e quando passar o mouse por cima ira aparecer oque cada um faz

ex: jogue o codigo nesse arquivo abaixo e veja

```js
    /packages/tokens/tsconfig.json
```

# agora referencie eles nos projetos para poder utilizar

- no tokens package.json

```json
   "devDependencies": {
        "@igniteOkra-ui/ts-config":"*",
        "tsup": "^8.2.3",
        "typescript": "^5.5.4"
    }
```

- no react package.json

```json
   "devDependencies": {
        "@igniteOkra-ui/tokens":"*",
        "@igniteOkra-ui/ts-config":"*",
        "tsup": "^8.2.3",
        "typescript": "^5.5.4"
    }
```
# depois instalei na raiz design-system

```bash
    npm i
```

# agora relacione a tipagem nos projetos

- crie um arquivo tsconfig.json em cada projeto

- react 

```json
    {
        "extends":"@igniteOkra-ui/ts-config/react.json",
        "include": ["src"],
    }
```
- tokens

```json
    {
        "extends":"@igniteOkra-ui/ts-config/base.json",
        "include": ["src"],
    }
```
# agora rode um npm run build no projeto react e token. menos no ts-config ja que ele é private