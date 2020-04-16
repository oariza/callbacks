const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

function construir (muroAConstruir, callback) {
    setTimeout(() => {
        let error = null
        muroAConstruir.estaConstruido = true
        if (muroAConstruir.estaConstruido === false) {
            error = 'No se pudo construir el muro'
        }
        callback(error, muroAConstruir)
    }, 3000)
}

function aplanar (muroAAplanar, callback) {
    setTimeout (() => {
        muroAAplanar.estaAplanado = true
        let error = muroAAplanar.estaAplanado
            ? null
            : 'no se pudo aplanar'
        callback(error, muroAAplanar)        
    }, 3000)
}

function pintar (muroAPintar, callback) {
    setTimeout (() => {
        muroAPintar.estaPintado = true
        let error = muroAPintar.estaPintado
            ? null
            : 'no se pudo pintar'
        callback(error, muroAPintar)        
    }, 3000)
}

function construirPromificada (muroAConstruir) {
    return new Promise((resolve, reject) => {
        construir(muroAConstruir, (error, muroConstruido) => {
            if (error) {
                reject(error)
                return
            }
            resolve(muroConstruido)
        })
    })
}

function aplanarPromificada (muroAAplanar) {
    return new Promise((resolve, reject) => {
        aplanar(muroAAplanar, (error, muroAplanado) => {
            if(error) {
                reject(error)
                return
            }
            resolve(muroAplanado)
        })
    })
}

function pintarPromificada (muroAPintar) {
    return new Promise((resolve, reject) => {
        pintar(muroAPintar, (error, muroPintado) => {
            if (error) {
                reject(error)
                return
            }
            resolve(muroPintado)
        })
    })
}

/*
construirPromificada(muro)
    .then(muroConstruido => {
        console.log('muroConstruido: ', muroConstruido)
        aplanarPromificada(muroConstruido)
        .then(muroAplanado => {
            console.log('muroAplanado: ', muroAplanado)
            pintarPromificada(muroAplanado)
                .then(muroPintado => {
                    console.log('muroPintado: ', muroPintado)
                    })
                    .catch(error => console.error('error pintado:', error))
        })
        .catch(error => console.error('errorAplanado: ', error))
    })
    .catch(error => console.error('error: ', error))
*/

//async/await
//Donde use wawit, la funcion que lo contiene debe ser marcada como asincrona
// las funciones marcadas con await, regresan una promesa
//await construirPromificada(muro)  -> asi no sirve
/*
async funcion principal() {
    await construirPromificada(muro)
}

*/

async function principal () {
    const muroConstruido = await construirPromificada(muro)
    console.log('muroConstruido: ', muroConstruido)
    const muroAplanado = await aplanarPromificada(muroConstruido)
    console.log('muroAplanado: ', muroAplanado)
    const muroPintado = await pintarPromificada(muroAplanado)
    console.log('muroPintado: ', muroPintado)
    return muroPintado
}

principal()
    .then(resultado => {
    console.log('resultado: ', resultado)
    console.log('FIN')
    })
    .catch(error => console.error('ERROR: ', error))

