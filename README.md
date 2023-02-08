# ReactJS

## Fundamentos do ReactJS

- Biblioteca JavaScript para construir interfaces de usuário;
- Existem frameworks que utilizam React "por baixo dos panos", exemplo: NextJS;
- React é uma biblioteca *Single Page Application* - SPA (aplicação de página única);

- Rendering Patterns (Padrões de renderização)
  - **SSR**
  Toda vez que o usuário (o Browser) requisita uma página(rota) da aplicação, essa página é recebida pelo servidor; o servidor contém todo o código (back-end e front-end da aplicação), o back-end interpleta a requisição do browser e monta todo o HTML, CSS e JS da página solicitada e devolve para o Browser.
  
  <div align="center">
    <img width="400" src="https://user-images.githubusercontent.com/86172286/216845518-3e835666-c768-4224-a8dc-a43d0e635e09.jpg" >
  </div>

  - **SPA**
  Toda vez que o usuário (o Browser) requisita uma página(rota) da aplicação, o back-end(API) busca no banco de dados, porém, o back-end não contém mais as informações para construção do HTML, CSS e JS da página, ele vai apenas retornar os dados(nesse caso é os dados dos usuários - users) em formato de JSON; e esses dados são mandados para a aplicação front-end (React) e ela será responsável por converter esses dados de JSON para HTML, CSS e JS.
  
  <div align="center">
    <img width="400" src="https://user-images.githubusercontent.com/86172286/216845522-26703e0a-88b8-4761-a932-4929cd90ba78.jpg" >
  </div>

## Bundlers & Compilers (Empacotadores e Compiladores)

Com o mundo de desenvolvimento evoluindo à todo momento, nem sempre todos os browsers conseguem acompanhar a evolução da tecnologia para dar suporte à sintaxe mais moderna. 

Para isso existem os **compilers**, como o **babel** que convertem o código moderno para uma sintaxe mais antiga que os browsers reconhecem; e os **bundlers** como o **webpack** que faz um bundling de todos os arquivos da nossa aplicação de uma forma que todos os browsers reconheçam.

Atualmente, a grande maiorida dos browsers já suportam a importação de módulos (importação e exportação entre arquivos JS) através da feature de **ESModules** e com isso não precisamos mais utilizar o webpack, mantendo o nosso fluxo de desenvolvimento e processo de construção da aplicação muito mais performático. 

Temos outra alternativa para criar o nosso projeto, que é o **Vite** para substituir os bundlers e compilers tradicionais (como babel e webpack) que já utiliza por padrão o ESModules e com ele tiramos proveito das funcionalidades mais modernas dos navegadores para ter uma melhor performance de compilação e execução.

## Criando um projeto React com o Vite

Para a criação do projeto React com o Vite utilizei o passo a passo que consta na documentação do Vite: https://vitejs.dev/guide/;

- Primeiramente, vamos executar o comando seguinte:

```
> npm create vite@latest
```

- Feito isso, temos que inserir o nome do projeto, selecionar o framework(React) e a variante (JS ou TS):

 <div align="center">
    <img width="400" src="https://user-images.githubusercontent.com/86172286/216845535-2fee644b-eaa5-4f01-a952-4dd3acdde56a.jpg" >
  </div>

- Para abrirmos a aplicação, vamos primeiro instalar as dependências e em seguida rodar:

```
> npm install
> npm run dev
```

### Exibindo uma string na tela

- Precisamos que o `main.jsx` interaja com uma biblioteca chamada React DOM - Document Object Model(Modelo de Objeto de Documentos) é que exatamente a extrutura da nossa página. Para isso vamos importar o React DOM no nosso arquivo index.js:

``` JSX
                     [nome_módulo]
import ReactDOM from "react-dom/client";
       [nome_variavel]
```

- A partir do React DOM vamos renderizar "algo" na tela. Então vamos chamá-lo junto aos métodos *createRoot* e *render*. O *createRoot* recebe o elemento(nesse caso é a div no index.html que contém o id root) no qual queremos inserir/injetar o conteúdo e no *render* informamos o conteúdo que queremos renderizar nesse elemento selecionado:

``` JSX
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- Acima, estamos informando como conteúdo a ser exibido na tela o componente `App`. Esse componente será injetado e será exibido o seu conteúdo (Hello World):

``` JSX
export default function App() {

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}
```

### Estrutura de pastas

- Antes de tudo, para organizar melhor nossa aplicação, em `src` vamos criar uma pasta chamada `components` e dentro desta pasta vamos criar uma subpasta chamada `Header` e dentro dela o componente funcional `Header.jsx` e seu arquivo estilo(css module - css escopado) `Header.module.css`.

- Também vamos criar dentro da pasta `Header` um arquivo chamado `index.jsx` que será responsável por importar/`import` e exportar/`export` por padrão/`default` esse componente para que fique acessível externamente e não seja necessário informar Header/Header na importação.

Vamos seguir essa mesma estrutura para a criação dos demais componentes.

### CSS Modules

Um Módulo CSS é um arquivo CSS no qual todos os nomes de classe e nomes de animação são definidos localmente por padrão. Todas as URLs ( `url(...)`) e `@imports` estão no formato de solicitação de módulo (`./xxx` e `../xxx` significa relativo, `xxx` e `xxx/yyy` significa na pasta de módulos, ou seja, em `node_modules`).

- Módulos CSS compilam em um formato de intercâmbio de baixo nível chamado ICSS ou Interoperable CSS, mas são escritos como arquivos CSS normais. 
Podemos notar na prática inserindo no arquivo `Header.module.css` a aplicação de estilo abaixo:

``` CSS
.header {
  background: #333;
  height: 80px;
}
```

- Ao importar o Módulo CSS de um Módulo JS, ele exporta um objeto com todos os mapeamentos de nomes locais para nomes globais:

``` JSX
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  )
}
```

- Para visualizarmos em tela a aplicação desses estilos, vamos importar o componente `Header` dentro do componente principal(`App`):

``` JSX
import Header from "./components/Header";

export default function App() {

  return (
    <div>
      <Header />
    </div>
  )
}
```

### CSS Global

Agora que já começamos a estilizar a nossa aplicação, vamos criar também algumas estilizações globais para que todos os elementos da nossa página compartilhem de alguns estilos como tamanho e tipos de fontes, resets de CSS e também algumas cores padrões que vamos utilizar na nossa aplicação.

- Em `src` vamos criar um arquivo chamado `global.css`(se já não existir) e importá-lo dentro de `App.jsx`. 

- Dentro desse arquivo de estilização global (`global.css`) vamos definir algumas aplicações de estilo:

``` CSS
:root { /*Variáveis css*/
  --white: #fff;

  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-500: #00875f;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray-900);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased; /*Aplica nos navegadores baseados no webkit uma padronização das fontes que não são padrões do sistema, elas ficam mais finas*/
}

body, input, textarea, button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
```