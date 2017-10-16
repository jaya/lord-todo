# Coisinhas legais em Front-end para serem estudadas

### CSS

#### FlexBox
> FlexBox é novo conceito para se criar `grids` para layout. Hoje um pouco mais maduro e com suporte nos browsers mais novos. A ideia é ele compor os elementos de seu layout para `estrutura`, ponto ruim e que se você `flex` normalmente vai ter dificuldade de usar `float`, os 2 não se combinam muito bem. Se você tem um component mais `quadrado` é muito lindo usar `flex`, caso contrario vai pelo `float` mesmo.

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- http://flexboxgrid.com/
- https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties

#### GridLayout
> Esse é muito novo e esta vindo para substituir o flexbox, ele é novo mais já tem alguns browser com suporte e galera usando em produção, caso seu publico use browsers com suporte vale a pena ir por esse caminho. Aqui não tenho experiencia pois nunca trabalhei ainda com ele, mas pelo que já li e vi o pessoal falando vale muito a pena usar. 
- https://css-tricks.com/collection-interesting-facts-css-grid-layout/
- https://css-tricks.com/things-ive-learned-css-grid-layout/
- https://pt.slideshare.net/CriciumaDev/css-grid-layout-its-evolution-baby
- https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
- https://imasters.com.br/desenvolvimento/adeus-flexbox-bem-vindo-css-grid-layout/?trace=1519021197&source=single
- https://css-tricks.com/snippets/css/complete-guide-grid/

#### Processadores CSS

- [postCSS](http://postcss.org/)

  - > Particularmente eu não gosto muito pois vc componetiza tando o CSS e acaba tendo bastante duplicidade de código, ele segue a linha de componetizar CSS e não componetizar componentes. E complicado esse cara, tem a turma que curte a que não curte e turma que nao liga, eu usei bastante no Descomplica e minha experiencia não foi legal pelo motivo que falei.

  - https://www.smashingmagazine.com/2015/12/introduction-to-postcss/

  - https://ashleynolan.co.uk/blog/postcss-a-review

- [CSSModules](https://github.com/css-modules/css-modules)

  - > Esse é um ponto legal, ele modulariza e deixa o nome da classe encripitada, ajuda bastante para projetos que tem parceiros, que injetam coisa no seu HTMl, assim vc não corre o risco de algo conflitar com terceriro e nem confilitar com CSS interno. A turma usa bastante ele em projetos react com postCSS

  - https://blog.taller.net.br/introducao-ao-css-modules/

  - https://imasters.com.br/front-end/css/voce-deveria-usar-css-modules/?trace=1519021197&source=single

  - https://css-tricks.com/css-modules-part-1-need/

### Javascript

- [React.js](https://reactjs.org/)

  - > Uso esse cara a uns 3 anos com projetos em produção para mais de 10k user simultâneos. Sou um pouco suspeito para falar. Mas pela minha experiencia é ele foda, o conceito dele é criar componentes isolados e com sua logica, e tudo fica modularizado, o código fica facil, lindo de ler, (vc consegue isso com qualquer linguagem, o programador que tem de ter esse cuidado) mas da forma que ele é feito, ajuda o cara a pensar em componentes. Entre os 3 citados realmente eu não tenho nada de ponto negativo nele.

  ##### Frameworks para React

  - [Next.js](https://github.com/zeit/next.js/)
  - [Create React App](https://github.com/facebookincubator/create-react-app)

  ##### Tests 
  - [Jest](https://github.com/facebook/jest)
  - [Enzyme](https://github.com/airbnb/enzyme)

  ##### Utils
  - [StoryBook](https://github.com/storybooks/storybook)

- [Angular.js](https://angularjs.org/)

  - > Tive contato a uns 3 anos atras, antes de usar react, é bom e ruim, o grande probema que vejo é que fica tudo muito verboso, gera bastante código e arquivos, tem problemas de binding, a galera fala que nao, mas colocar em produção com mais de 3k simultaneos para ver como se comporta. Se vc so tem formulario na sua app, talvez o angular seja melhor que React, por ser mais facil usar e agilidade em manipular as coisas. Mas fora isso eu correria desse cara, experiencia minha. Vale a pena ouvir opniões de outras pessoas. Não tenho links para compartilhar por não usar no meu dia a dia

- [Vue.js](https://vuejs.org/)

  - > Também nunca trabalhei, nem sequer fiz um hello World, mas tem muit gente falando bem do projeto, mas a comunidade ainda é pequena, a grande maioria e `chines/japones` então fica tudo muito dificil ver/ler as referencias, e ó codigo fonte é tenso de ler, mas dizem que funciona bem e é performatico, parece bem com angular mas é melhor eles falam ehehe. Esse esta na lista de criar um app para ter uma opnião mehor, como também não fiz nada, nao tenho links ainda para compartilhar.

- [Babel](https://babeljs.io/)

  - > Apenas um compilador de ES6 para ES5 o que os browsers e servidores tem suporte

- [TypeScript](https://www.typescriptlang.org/)

  - > Para que gosta de código tipado, vale a pena dar uma olhada, da para escrever React assim também.

- [WebPack](https://webpack.js.org/)

  - > Bundle das coisas para vc poder escrever seus javascript nas coisas mais modernas, ele faz a mágica por traz de tudo.
