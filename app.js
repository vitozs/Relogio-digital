

setInterval(() => {
    
    let d = new Date()
    let horas = d.getHours()
    let minutos = d.getMinutes()
    let segundos = d.getSeconds()

   document.getElementById('horas').innerHTML = horas
   document.getElementById('minutos').innerHTML = minutos
   document.getElementById('segundos').innerHTML = segundos


    if (segundos<10){
        document.getElementById('segundos').innerHTML = '0' + segundos

    }
    if (minutos<10){
        document.getElementById('minutos').innerHTML = '0' + minutos
    }

}, 10);

