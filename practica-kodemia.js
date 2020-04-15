/*
1. llamar koder
2. entrevistar koder
3. apartar koder
4. clase koder
*/


const koder = {
    realizarLlamada: false,
    venirEntrevista: false,
    hacerApartado: false,
    tomarClase: false
}

function llamar (koderALlamar, callback) {
    setTimeout(() =>{
        let error = null
        koderALlamar.realizarLlamada = true
        if (koderALlamar.realizarLlamada === false) {
            error = 'no se ha realizado llamada a koder'
        }
        callback(error, koderALlamar)
    }, 3000)
}

function entrevistar (koderAEntrevistar, callback) {
    setTimeout (() => {        
        koderAEntrevistar.venirEntrevista = true
        let error = koderAEntrevistar.venirEntrevista
            ? null
            : 'no se ha realizado entrevista a koder'
        callback(error, koderAEntrevistar)
    }, 3000)
}

function apartar (koderAApartar, callback) {
    setTimeout (() => {
        koderAApartar.hacerApartado = true
        let error = koderAApartar.hacerApartado
            ? null
            : 'no se ha realizado el apartado del koder'
        callback(error, koderAApartar)
    }, 3000)
}

function tomar (koderAVenir, callback) {
    setTimeout (() => {
        koderAVenir.tomarClase = true
        let error = koderAVenir.tomarClase
            ? null
            : 'el koder no se presentó a clase'
        callback (error, koderAVenir)
    }, 3000)
}

llamar (koder, (errorDeLlamada, koderLlamo) => {
    if (errorDeLlamada) {
        console.error ('errorDeLlamada :', errorDeLlamada)
        return
    }
    entrevistar (koderLlamo, (errorDeEntrevista, koderEntrevisto) => {
        if (errorDeEntrevista) {
            console.error ('errorDeEntrevista: ', errorDeEntrevista)
            return
        }
        apartar (koderEntrevisto, (errorDeApartado, koderAparto) => {
            if (errorDeApartado) {
                console.error ('errorDeApartado: ', errorDeApartado)
                return
            }
            tomar (koderAparto, (errorDeClase, koderTomoClase) => {
                if (errorDeClase) {
                    console.error ('errorDeClase: ', errorDeClase)
                    return
                }
                console.log ('koderTomoClase: ', koderTomoClase)
            })
        })
    })
})

console.log('koder: ', koder)