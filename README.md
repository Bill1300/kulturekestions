<div align="center">
  <img width="100" src="./images/icon-page.png">
</div>

O KultureKestions é uma plataforma de quiz interativa que oferece uma experiência educacional envolvente e desafiadora. Nossa missão é fornecer uma maneira divertida e eficaz de aprender sobre uma variedade de tópicos.

### Categorias disponíveis:
Explore uma ampla gama de categorias para desafiar seus conhecimentos:

<ul>
  <li>Esportes;</li>
  <li>Geografia;</li>
  <li>História;</li>
  <li>Artes e Entretenimento;</li>
  <li>Ciências e Tecnologia;</li>
  <li>Literatura;</li>
  <li>Cultura Pop;</li>
  <li>Natureza e Meio Ambiente;</li>
  <li>Política e Atualidades;</li>
  <li>Saúde e Bem-Estar;</li>
  <li>Economia;</li>
  <li>Jogos eletrônicos;</li>
  <li>Super-heróis;</li>
</ul>

### Como funcionam as kestões geradas por IA?

As kestões do KultureKestions são criadas por meio de algoritmos de IA que analisam e sintetizam informações de diversas fontes confiáveis. Cada kestão é cuidadosamente elaborada para desafiar seus conhecimentos e incentivá-lo a aprender mais sobre o mundo ao seu redor. Caso encontre algum erro em uma questão, você pode <ins>[**Relatar um erro**](https://forms.gle/qDdDuDgYUGfjnWnGA)</ins> para que seja avaliada e corrigida conforme necessário.

### Funcionalidade de segurança

Para garantir uma experiência justa e autêntica, implementamos uma funcionalidade de segurança que impede a abertura de outras guias ou janelas do navegador enquanto você estiver respondendo ao quiz. Se ocorrer a abertura de outra guia, o quiz será automaticamente cancelado para manter a integridade e a validade dos resultados.

### Adicione e modifique as kestões
A estrutura das questões JSON segue o seguinte formato:

```
{
  "id": 42, //Identificador de kestão
  "category": "Geografia", //Categoria de kestão
  "question": "Qual \u00e9 o rio mais longo do mundo?", //Texto de kestão
  "options": [
    "Rio Nilo", //Opção de resposta 1
    "Rio Amazonas", //Opção de resposta 2
    "Rio Yangtz\u00e9", //Opção de resposta 3
    "Rio Mississipi" //Opção de resposta 4
  ],
  "correct_answer": "Rio Amazonas" //Resposta korreta descrita eu uma das opções
},
```
<ins>[Ver arquivo **questions.json**](https://raw.githubusercontent.com/Bill1300/kulturekestions/main/questions/questions.js)</ins>

Para adicionar mais questões ao arquivo, você pode seguir o mesmo padrão de estrutura, substituindo os valores com suas próprias kestões, opções de resposta e respostas corretas. O ID deve ser único para cada kestão. Certifique-se de usar caracteres Unicode, para lidar com caracteres especiais, como acentos ou caracteres não-ASCII.

### Comece a sua jornada de aprendizado agora mesmo!

Explore nossa ampla seleção de categorias e desafie seus conhecimentos com o KultureKestions. Divirta-se enquanto aprende e melhore suas habilidades em uma variedade de assuntos. Boa sorte e aproveite a experiência educacional!

<div align="left">
<a href="https://bill1300.github.io/kulturekestions">
  <img width="200" src="https://i.imgur.com/mOa9W0w.png">
</a>
</div>
<div align=center>
<p>Desenvolvido por <a href="https://github.com/Bill1300"><ins>Bill1300</ins></a>.</p>
<p>KultureKestions © 2024 de Gabriel Cerutti está licenciado sob <a href="https://creativecommons.org/licenses/by-nc/4.0/"><ins>CC BY-NC 4.0</ins></a>.</p>
</div>