# ReactJS

## Fundamentos do ReactJS

- Biblioteca JavaScript para construir interfaces de usuário;
- Existem frameworks que utilizam React "por baixo dos panos", exemplo: NextJS;
- React é uma biblioteca *Single Page Application* - SPA (aplicação de página única);

- Rendering Patterns (Padrões de renderização)
  - **SSR**
  Toda vez que o usuário (o Browser) requisita uma página(rota) da aplicação, essa página é recebida pelo servidor; o servidor contém todo o código (back-end e front-end da aplicação), o back-end interpleta a requisição do browser e monta todo o HTML, CSS e JS da página solicitada e devolve para o Browser.
  ![ssr](https://user-images.githubusercontent.com/86172286/216845518-3e835666-c768-4224-a8dc-a43d0e635e09.jpg)

  - **SPA**
  Toda vez que o usuário (o Browser) requisita uma página(rota) da aplicação, o back-end(API) busca no banco de dados, porém, o back-end não contém mais as informações para construção do HTML, CSS e JS da página, ele vai apenas retornar os dados(nesse caso é os dados dos usuários - users) em formato de JSON; e esses dados são mandados para a aplicação front-end (React) e ela será responsável por converter esses dados de JSON para HTML, CSS e JS.
  ![spa](https://user-images.githubusercontent.com/86172286/216845522-26703e0a-88b8-4761-a932-4929cd90ba78.jpg)

## Bundlers & Compilers (Empacotadores e Compiladores)

- Com o mundo de desenvolvimento evoluindo à todo momento, nem sempre todos os browsers conseguem acompanhar a evolução da tecnologia para dar suporte à sintaxe mais moderna. 

- Para isso existem os **compilers**, como o **babel** que convertem o código moderno para uma sintaxe mais antiga que os browsers reconhecem; e os **bundlers** como o **webpack** que faz um bundling de todos os arquivos da nossa aplicação de uma forma que todos os browsers reconheçam.

- Atualmente, a grande maiorida dos browsers já suportam a importação de módulos (importação e exportação entre arquivos JS) através da feature de **ESModules** e com isso não precisamos mais utilizar o webpack, mantendo o nosso fluxo de desenvolvimento e processo de construção da aplicação muito mais performático. 

- Temos outra alternativa para criar o nosso projeto, que é o **Vite** para substituir os bundlers e compilers tradicionais (como babel e webpack) que já utiliza por padrão o ESModules e com ele tiramos proveito das funcionalidades mais modernas dos navegadores para ter uma melhor performance de compilação e execução.

## Criando um projeto React com o Vite

Para a criação do projeto React com o Vite utilizei o passo a passo que consta na documentação do Vite: https://vitejs.dev/guide/;

- Primeiramente, vamos executar o comando seguinte:

```
> npm create vite@latest
```

- Feito isso, temos que inserir o nome do projeto, selecionar o framework(react) e a variante (reactJS ou ReactTS):
![select](https://user-images.githubusercontent.com/86172286/216845535-2fee644b-eaa5-4f01-a952-4dd3acdde56a.jpg)

- Para abrirmos a aplicação, vamos primeiro instalar as dependências e em seguida rodar:

```
> npm install
> npm run dev
```

### Exibindo uma string na tela

- Precisamos que o `index.js` interaja com uma biblioteca chamada React DOM - Document Object Model(Modelo de Objeto de Documentos) é que exatamente a extrutura da nossa página. Para isso vamos importar o React DOM no nosso arquivo index.js:

``` JS
                     [nome_módulo]
import ReactDOM from "react-dom/client";
       [nome_variavel]
```

- A partir do React DOM vamos renderizar "algo" na tela. Então vamos chamá-lo junto aos métodos *createRoot* e *render*. O *createRoot* recebe o elemento(nesse caso é a div no index.html que contém o id root) no qual queremos inserir/injetar o conteúdo e no *render* informamos o conteúdo que queremos renderizar nesse elemento selecionado:

``` JS
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

``` JS
export default function App() {

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}
```
