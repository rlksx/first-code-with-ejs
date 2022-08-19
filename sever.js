const express = require('express')
const app = express() // instânciando express na variavel app.

app.set('view engine', 'ejs')
// setando a ferramente de redenrização html como o ejs, para o express conseguir renderizar.

app.get('/', function (req, res) {
  const items = [
    { title: 'P', message: 'resunto' },
    { title: 'A', message: 'tum' },
    { title: 'O', message: 'vo' },
  ]
  res.render('pages/index', { bread: items })
  // app.get => Criando rota - "/" => rota princital => https://www.youtube.com/
  // quando a rota '/' for chamada a função vai executar o res.render('index'), ou seja, vai ser a pagina principal do site.
  // res.render => como resposta(res) renderizar(render) o index.ejs
})

app.get('/sobre', function (req, res) {
  res.render('pages/about')
})
// criando rota sobre => https://www.youtube.com/sobre/

app.listen(8080) // Ouvindo rota 8080, esperando chamar na porta 8080 da maquina - http://localhost:8080/
console.log('UI QUE DELIÇIA CARA')
// obs: o expres já espera que o index e outras pages esteja dentro da pasta views.
