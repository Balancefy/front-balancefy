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

export let isInThePast = (date) => date.setHours(0, 0, 0, 0) <= new Date().toLocaleDateString("pt-br");
