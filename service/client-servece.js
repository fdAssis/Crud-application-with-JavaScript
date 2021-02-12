const novaLinha = (nome, email, id) => {

  const linhaNovoCliente = document.createElement('tr');

  const conteudo = `
    <td class="td" data-td>${nome}</td>
      <td>${email}</td>
      <td>
        <ul class="tabela__botoes-controle">
          <li>
            <a href="../screens/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">
              Editar
            </a>
          </li> 
          
          <li> 
            <button class="botao-simples botao-simples--excluir" type="button">
              Excluir
            </button>
          </li>
        </ul>
      </td>
  `

  linhaNovoCliente.innerHTML = conteudo;
  return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

const listaClientes = () => {
  
  /* Fazendo requisição usando Promise **
  const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();

    http.open('GET', 'http://localhost:3000/profile');

    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response));
      } else {
        resolve(JSON.parse(http.response));
      }
    }

    http.send();
    
  });
  //console.log(promise);
  return promise;
  */

  // Fazendo requisição com fetchAPI
  return fetch(`http://localhost:3000/profile`).then(
    response => {
      return response.json();
    }
  )
}

listaClientes().then(data =>
  data.forEach(element => {
    tabela.appendChild(novaLinha(element.nome, element.email));
  })
);

