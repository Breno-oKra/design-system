# turborepo

o turborepo premite que rodemos um run build e seja criado um build de todos os projetos ao mesmo tempo, ou ate mesmo um run dev, alem disso ele guarda os build em cache ou seja somente o primeiro build é demorado, os outros ele procura atualizar somente os arquivos alterado

- site : https://turbo.build/repo/docs/getting-started/installation

```bash
    npm install turbo --save-dev
```

- depois criamos um arquivo turbo.json e configuramos de acordo com a documentação

```json
    {
        "$schema": "https://turbo.build/schema.json",
        "tasks": {
            "build": {
                "dependsOn": ["^build"],
                "outputs": [".next/**", "!.next/cache/**"]
            },
            "check-types": {
                "dependsOn": ["^check-types"]
            },
            "dev": {
                "persistent": true,
                "cache": false
            }
        }
    }
```
- depois no package.json criamos os script e mais algumas informações adicionais como na documentação
como um name,scripts e packageManager
```json
    {
        "name":"igniteOkra-ui",
        "scripts": {
            "build": "turbo run build",
            "dev": "turbo run dev",
            "lint": "turbo run lint"
        },
        "packageManager": "npm@10.0.0"
    }
```
- agora conseguimos rodar o npm run dev

para rodar o build precisamos adicionar mais algumas configurações

- no turbo.json em build, o outputs significa a saida, o local dos arquivos que serão gerado pelo build dos projetos, no caso do projeto react e tokens quando rodamos build, é criado a pasta dist

- no caso do storybook, quando rodamos npm run storybook-build, é gerado a pasta storybook-statics

- como o turbo executa do comando run build, troquei o comando storybook-build para somente build em package.json do projeto docs

- algumas build dependem de outras build de outros projetos dentro da raiz então precisamos avisar por isso colocamos dependsOn e avisamos com ^build 

```json
     "build": {
        "outputs": [ 
            "dist/**",
            "storybook-statics/**"
        ],
        "dependsOn": [
            "^build"
        ]
    },
```
