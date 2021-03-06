import api from './api'

export function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
}

export const uploadFile = async (e) => {
    e.stopPropagation()
    e.preventDefault();
    let file = e.target.files[0];
    let form = new FormData();

    form.append("arquivo", file)
    await api
    .post("/transactionFixed/uploadTxt", form, {
        headers: {"Content-Type": "multipart/form-data"},
    })
    .then(res => {
        window.location.reload();
    }).catch(err => {
        console.log(err);
    })
}

export const uploadImage = async (file) => {
    let form = new FormData();
    form.append("image", file)
    await api
    .put("/users/upload/avatar", form, {
        headers: {"Content-Type": "multipart/form-data"},
    })
    .then(res => {
        window.location.reload();
    }).catch(err => {
        console.log(err);
    })
}

export const isInThePast = (date) => new Date(date.toLocaleDateString("pt-BR")) < new Date()

export const isInTheFuture = (date) => new Date(date.toLocaleDateString("pt-BR")) > new Date()
export const validPassword = (novaSenha) => {
    const hasUpperCase = /[A-Z]/.test(novaSenha);
    const hasSymbol = /[!@#%&*><?]/.test(novaSenha);
    return hasUpperCase && hasSymbol
}

export const validName = (name) => {
    return name.length > 2 
}

export const validEmail = (email) => {
    return /@\w{5,}.com/.test(email)
}

export const validDescTransaciton = (descTransaciton) => {
    return descTransaciton.length > 0
}

export const validValueTransaciton = (valueTransaciton) => {
    return valueTransaciton > 0 
}

export const validCategoriaTransaciton = (categoriaTransaciton) => {
    return categoriaTransaciton !== ""
}

export const validTypeTransaciton = (typeTransaciton) => {
    return typeTransaciton !== ""
}

export const downloadCsv = (event) => {
    api
        .get('transactions/report', { responseType: 'blob' })
        .then(async (res) => {
            let blob = new Blob([res.data], { type: 'text/plain' })
            let link = document.createElement("a");
            link.href = await URL.createObjectURL(blob);
            link.download = 'movimentacoes.txt'
            link.click()
            URL.revokeObjectURL(link.href)
        })
        .catch((err) => {
            console.log(err);
        });
}