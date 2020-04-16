/* constructor de promesa
    Promise((resolved, reject) => {
        if (todo ok) {
            resolve('ok')
            return
        }
        reject ('error')
    })
*/
// si qiuero crear una promesa
/*
const miPrimerPromesa = new Promise((resolve, reject) => {
    if (todo mal) {
        reject ('todo mal')
        return
    }
    resolve('ok')
})
miPrimerPromesa
    .then((resultado) => {  //recibe lo que se pasa en resolve
        console.log('resultado:', resultado) // result: ok
    })
    .catch((error) => {
        console.log ('error:', error) // error: todo mal
    })
*/
/*
    function miPrimerPromesa () {
        return new Promise((resolve, reject) => {
            if (todo mal) {
                reject('todo está en llamas')
                return
            }
            resolve('todo cool')
        })
    }

    miPrimerPromesa()
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
*/

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


