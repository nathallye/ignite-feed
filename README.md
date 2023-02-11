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

  --green-300: #00B37E;
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

### Componente: Header

- Alterações no componente Header:

``` JSX
import styles from "./Header.module.css";

import igniteLogo from "../../assets/ignite-logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}
```

- Alterações no CSS Module do Componente Header:

``` CSS
.header {
  background: var(--gray-800);
  display: flex;
  justify-content: center;

  padding: 1.25rem 0; /*1rem = 16px -> 0.25rem = 4px -> 1.25rem = 20px*/
}

.header img {
  height: 2rem; /*32px*/
}
```

### Componente: SideBar

- Alterações no componente principal(App):

``` JSX
import Header from "./components/Header";
import Sidebar  from "./components/Sidebar";
import Post from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export default function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
          />
          <Post
            author="Nathallye Bacelar"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
```

- Criação do CSS Module do componente App:

``` CSS
.wrapper {
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;

  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
}
```

- Instalação da biblioteca de icons `Phosphor Icons`. No terminal iremos rodar o comando seguinte:

```
npm i phosphor-react
```

Link documentação: https://github.com/phosphor-icons/homepage;

- Criação do componente Sidebar:

``` JSX
import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
        alt="" 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://github.com/nathallye.png" alt="" 
        />

        <strong>Nathallye Bacelar</strong>
        <span>Full-Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
```

- Criação do CSS module do componente Sidebar:

``` CSS
.sidebar {
  background: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
}

.sidebar footer {
  border-top: 1px solid var(--gray-600);
  margin-top: 1.5rem;
  padding: 1.5rem 2rem 2rem;
}

.sidebar footer a {
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /*Para separar os elementos*/

  background: transparent;
  color: var(--green-500);

  border-radius: 8px;
  border: 1px solid var(--green-500);

  height: 50px;
  padding: 0 1.5rem;

  font-weight: bold;
  text-decoration: none;

  transition: color 0.1s, background-color 0.1s;
} 

.sidebar footer a:hover {
  background: var(--green-500);
  color: var(--white);
}

.cover {
  width: 100%;
  height: 72px;
  object-fit: cover; /*Para não distorcer a imagem para caber, irá cortá-la*/
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -2rem; /*Ou margin-top: calc(0px -1.5rem - 6px;*/
}

.profile strong {
  margin-top: 1rem;

  color: var(--gray-100);
  line-height: 1.6;
}

.profile span {
  font-size: 0.875rem;
  color: var(--gray-400);
  line-height: 1.6;
}

.avatar {
  box-sizing: initial; /*Faz com que as bordas adicionadas, ocupem espaço a mais e não exprema para caber no container*/

  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}
```

### Componente: Post

- Alterações no componente principal(App):

``` JSX
import Header from "./components/Header";
import Sidebar  from "./components/Sidebar";
import Post from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export default function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post
            author="Nathallye Bacelar"
            img="https://github.com/nathallye.png"
            contentHeader="Fala galera! 👋"
            contentBody="Acabei de subir mais um projeto no meu github. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é IgniteFeed 🚀"
            link="https://github.com/nathallye/ignite-feed"
            hashtag="#novoprojeto"
          />
          <Post
            author="Paulo Bacelar"
            img="https://github.com/henrique-dev.png"
            contentHeader="Fala galera! 👋"
            contentBody="Acabei de subir mais um projeto no meu github. 🚀"
            link="https://github.com/henrique-dev/nosso_financeiro"
            hashtag="#novoprojeto"
          />
        </main>
      </div>
    </div>
  )
}
```

- Alterações no componente Post:

``` JSX
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.img} alt="" />

          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <time title="09 de Fevereiro às 19:45h" dateTime="2023-02-09 19:45:44">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>{props.contentHeader}</p>
        <p>{props.contentBody}</p>
        <p>👉<a href={props.link}>{props.link}</a></p>
        <p><a href="#">{props.hashtag}</a></p>
      </div>
    </article>
  )
}
```

- Alterações no CSS Module do Componente Post:

``` CSS
.post {
  background: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
}

.post + .post { /*Irá estilizar somente o post que contêm outro post antes(acima)*/
  margin-top: 2rem;
}

.post > header { /* > irá estilizar somente o header que está dentro do post*/
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post > header time {
  color: var(--gray-400);
  font-size: 0.875rem;
}

.author {
  display: flex; 
  align-items: center;
  gap: 1rem;
}

.author img {
  box-sizing: initial; /*Faz com que as bordas adicionadas, ocupem espaço a mais e não exprema para caber no container*/

  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}

.authorInfo strong {
  display: block; /*Força que os elementos quebrem a linha e não fiquem em*/

  color: var(--gray-100);
  line-height: 1.6;
}

.authorInfo span {
  display: block; /*Força que os elementos quebrem a linha e não fiquem em*/

  color: var(--gray-400);
  font-size: 0.875rem;
  line-height: 1.6;
}

.content {
  margin-top: 1.5rem;

  color: var(--gray-300);
  line-height: 1.6;
}

.content p {
  margin-top: 1rem;
}

.content a {
  color: var(--green-500);
  font-weight: bold;
  text-decoration: none;
}

.content a:hover {
  color: var(--green-300);
}
```

### Formulário de comentários - Componente Post

- Alterações no CSS Global da aplicação(global.css):

``` CSS
/*[...]*/

:focus { /*sobreescrevendo o foco (ao selecionar um elemento) do navegador padrão*/
  outline: transparent;
  box-shadow: 0 0 0 2px var(--green-500);
}

/*[...]*/
```

- Alterações no componente Post:

``` JSX
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.img} alt="" />

          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <time title="09 de Fevereiro às 19:45h" dateTime="2023-02-09 19:45:44">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>{props.contentHeader}</p>
        <p>{props.contentBody}</p>
        <p><a href={props.link}>{props.link}</a></p>
        <p><a href="#">{props.hashtag}</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu faeedback</strong>

        {/*Hoje em dia o textarea não necessita mais dos atribulos name="" id="" cols="30" rows="10", e pode ser "autofechada*/}
        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
```

- Alterações no CSS Module do Componente Post:

``` CSS
/*[...]*/

.commentForm {
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-600);
}

.commentForm > strong {
  color: var(--gray-100);
  line-height: 1.6;
}

.commentForm textarea {
  background: var(--gray-900);

  resize: none;
  width: 100%;
  height: 6rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;

  color: var(--gray-100);
  line-height: 1.4;
}

.commentForm footer {
  visibility: hidden;
  max-height: 0;
}

.commentForm:focus-within footer { /*focus-within - se houver um foco em qualquer elemento dentro do commentForm, será aplicado os estilos seguintes no footer*/
  visibility: visible;
  max-height: none;
}

.commentForm button[type="submit"] { /*Irá selecionar somente os buttons do commentForm que contém type="submit"*/
  background: var(--green-500);
  
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  border: 0;
  border-radius: 8px;

  color: var(--white);
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.1s;
}

.commentForm button[type="submit"]:hover {
  background: var(--green-300);
}
```