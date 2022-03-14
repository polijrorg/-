# Eh tudo nosso 💯

Coleção oficial de libs para te ajudar a fazer projetos em 💻 React e 📱 React Native, feita por e para o NTec 🐒

## Pacotes 📦

<details>
<summary>@ntec/native 📱</summary>
<p>

### `@ntec/native` 📱

Lib de componentes básicos para utilizar em 📱 React Native.

<p float="left">
 <a href="#-exemplos">Exemplos</a>
 <img />
 <a href="#-como-instalar">Como instalar</a>
</p>

### 📎 Exemplos:

#### DropDown:

<!-- GIF criado com https://ezgif.com/video-to-gif -->
![DropDown](https://user-images.githubusercontent.com/58156196/158094670-e4cac6f9-f336-4705-881b-189df8d60f36.gif)

```tsx
import { useState } from "react";
import { DropDown } from "@ntec/native";

const options = ["Muito bom! 😜", "Estou impressionado. 😳"];

const Component = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <DropDown
      label="Selecione a opção"
      disableSelectAll
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
};

export default Component;
```

### 👾 Como instalar:

1. Rode no diretório do seu projeto:

```sh
expo add @ntec/native react-native-reanimated
```

2. Adicione um arquivo `metro.config.js` no root do projeto com este conteúdo:

```javascript
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

3. Altere o conteúdo do arquivo `babel.config.js` para isto:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
```

4. Reinicie o Expo com `expo start -c`
  
</p>
</details>

<details>
<summary>@ntec/utils 🛠</summary>
<p>

### `@ntec/utils` 🛠

Lib de funções bem úteis de 🛠 TypeScript.

<p float="left">
 <a href="#-exemplos-1">Exemplos</a>
 <img />
 <a href="#-como-instalar-1">Como instalar</a>
</p>

#### 📎 Exemplos:

##### keySort:
 
Alternativa ao `.sort()` do TS, que pode ser um saco de se utilizar.
Consegue ordenar automaticamente por:
- `string`
- `number`
- `boolean`

```ts
import { keySort } from "@ntec/utils";

const people = [{ name: "Mateus" }, { name: "Jorel" }, { name: "Amanda" }];

// Ordena em relação ao nome:
const ordered = keySort(people, (p) => p.name);

console.log(ordered);
// Resultado: [{ name: "Amanda" }, { name: "Jorel" }, { name: "Mateus" }];
```

#### 👾 Como instalar:

1. Rode no diretório do seu projeto:

```sh
yarn add @ntec/utils
```
  
</p>
</details>

## Documentação 📓

🚧 Estado de manutenção... Aguarde enquanto a mágica está sendo feita 👀

<!-- [A documentação](inserir link aqui) -->
