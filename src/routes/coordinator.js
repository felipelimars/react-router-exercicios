export const goToHome = (navigate) => {
    navigate('/')
}

export const goToProfile = (navigate, id) => {
    navigate(`/product/${id}`)
}

/* Pagina para guardar as funções 
de navegação. Elas estão sendo exportadas
 e importadas no local do componente. */