const btn = document.getElementById('btn')
const nome = document.getElementById('nomeUser')


btn.addEventListener('click', () => {
    alert(`Dados enviados com sucesso Sr(a) ${nome.value} `)
})  
