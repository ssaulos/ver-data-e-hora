function carregar (){
var msg = window.document.getElementById('msg')
var img =window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()

msg.innerHTML = `Agora sao ${hora} H : ${minuto} M <br>    ${dia}
/  ${mes} / ${ano} <br>`
if (hora >= 0 && hora < 12 ){
    img.src = 'manha.jpg'
    document.body.style.background = '#FA7B5F'
    msg.innerHTML += 'bom dia '
} else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    document.body.style.background = '#71E6A8'
    msg.innerHTML += 'boa tarde'
} else{
    img.src = 'noite.jpg'
    document.body.style.background = '#9E735D'
    msg.innerHTML += 'boa noite '

}
}