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


function llamarPromificada (koderALlamar) {
    return new Promise((resolve, reject) => {
        llamar(koderALlamar, (error, koderLlamo)=> {
            if(error) {
                reject(error)
                return
            }
            resolve(koderLlamo)
        })
    })
}

function entrevistarPromificada (koderAEntrevistar) {
    return new Promise((resolve, reject) => {
        entrevistar(koderAEntrevistar, (error, koderEntrevisto)=> {
            if(error) {
                reject(error)
                return
            }
            resolve(koderEntrevisto)
        })
    })
}

function apartarPromificada (koderAApartar) {
    return new Promise((resolve, reject) => {
        apartar(koderAApartar, (error, koderAparto)=> {
            if(error) {
                reject(error)
                return
            }
            resolve(koderAparto)
        })
    })
}

function tomarPromificada (koderAVenir) {
    return new Promise((resolve, reject) => {
        tomar(koderAVenir, (error, koderTomoClase)=> {
            if(error) {
                reject(error)
                return
            }
            resolve(koderTomoClase)
        })
    })
}

async function principal () {
    const koderLlamo = await llamarPromificada(koder)
    console.log('koderLlamo: ', koderLlamo)
    const koderEntrevisto = await entrevistarPromificada(koderLlamo)
    console.log('koderEntrevisto: ', koderEntrevisto)
    const koderAparto = await apartarPromificada(koderEntrevisto)
    console.log('koderAparto: ', koderAparto)
    const koderTomoClase = await tomarPromificada(koderAparto)
    console.log('koderTomoClase: ', koderTomoClase)
    return koderTomoClase
}

principal()
    .then(resultado => {
        console.log('resultado: ', resultado)
        console.log('FIN')
    })
    .catch(error => console.error('ERROR: ', error))
