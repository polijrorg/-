# @ntec/native

A biblioteca de componentes React Native da Poli Júnior 👨🏻‍💻

## Recomendação caso esteja criando um novo projeto

Crie um aplicativo que utiliza Expo com este comando:

```bash
expo init -t expo-template-blank-typescript
```

## Instalação (para aplicações com Expo)

1. Rodar o seguinte comando:

```bash
expo add @ntec/native moti react-native-reanimated react-native-svg react-native-svg-transformer styled-components
```

2. Adicionar um arquivo `metro.config.js` no root do projeto com este conteúdo:

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

3. Alterar o conteúdo do arquivo `babel.config.js` para isto:

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

4. Reiniciar o Expo com `expo start -c`

## Detalhes de desenvolvimento do pacote

Por algum motivo, o pacote apenas funciona com esta sequência de passos:
1. Trocar, no `package.json`, `peerDependencies` por `dependencies`
2. Remover `node_modules` deste diretório
3. Rodar `yarn`
4. Trocar, no `package.json`, `dependencies` por `peerDependencies` novamente
5. Rodar `npm publish` neste diretório

