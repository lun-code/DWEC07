const tabla = document.querySelector("#tabla")
const buscador = document.querySelector("#buscador")
const btnBuscar = document.querySelector("#btnBuscar")

let coches = []
let fabricantes = []

fetch("https://my-json-server.typicode.com/luismiguel-fernandez/javascript23-24/fabricantes")
    .then(
        resp => resp.json()
    )
    .then(
        json => {
            fabricantes = json

            fetch("https://my-json-server.typicode.com/luismiguel-fernandez/javascript23-24/coches")
                .then(
                    resp => resp.json()
                )
                .then(
                    json => {
                        json.forEach(coche => {
                            let nuevoTR = document.createElement("tr")

                            let nuevoTD = document.createElement("td")
                            let imagen = document.createElement("img")
                            imagen.src = coche.imagen
                            nuevoTD.append(imagen)

                            let fabricanteTD = document.createElement("td")
                            let fabricante = fabricantes.find(fab => fab.id === coche.fabricante)
                            fabricanteTD.textContent = fabricante.nombre

                            let nuevoTD2 = document.createElement("td")
                            let modelo = document.createElement("p")
                            modelo.textContent = coche.nombre
                            nuevoTD2.append(modelo)

                            let nuevoTD3 = document.createElement("td")
                            let precio = document.createElement("p")
                            precio.textContent = coche.precio
                            nuevoTD3.append(precio)

                            nuevoTR.append(nuevoTD)
                            nuevoTR.append(fabricanteTD)
                            nuevoTR.append(nuevoTD2)
                            nuevoTR.append(nuevoTD3)

                            tabla.append(nuevoTR)
                        })
                        coches = json

                        buscador.addEventListener("keyup", (ev) => {
                            if (ev.key === "Enter") {

                                let criterio = buscador.value

                                let cochesFiltrados = coches.filter(coche => coche.nombre.toLowerCase().includes(criterio.toLowerCase()) || fabricantes.find(fab => fab.id === coche.fabricante).nombre.toLowerCase().includes(criterio.toLowerCase()))

                                tabla.innerHTML = ""

                                let cabeceraFoto = document.createElement("th")
                                cabeceraFoto.textContent = "Foto"

                                let cabeceraFabricante = document.createElement("th")
                                cabeceraFabricante.textContent = "Fabricante"                                

                                let cabeceraModelo = document.createElement("th")
                                cabeceraModelo.textContent = "Modelo"

                                let cabeceraPrecio = document.createElement("th")
                                cabeceraPrecio.textContent = "Precio"

                                tabla.append(cabeceraFoto, cabeceraFabricante ,cabeceraModelo, cabeceraPrecio)

                                cochesFiltrados.forEach(coche => {

                                    let trFiltrado = document.createElement("tr")

                                    let tdImagenFiltrado = document.createElement("td")
                                    let imagenFiltrado = document.createElement("img")
                                    imagenFiltrado.src = coche.imagen
                                    tdImagenFiltrado.append(imagenFiltrado)

                                    let tdFabricanteFiltrado = document.createElement("td")
                                    tdFabricanteFiltrado.textContent = fabricantes.find(fab => fab.id === coche.fabricante).nombre

                                    let tdModeloFiltrado = document.createElement("td")
                                    tdModeloFiltrado.textContent = coche.nombre

                                    let tdPrecioFiltrado = document.createElement("td")
                                    tdPrecioFiltrado.textContent = coche.precio

                                    trFiltrado.append(tdImagenFiltrado, tdFabricanteFiltrado ,tdModeloFiltrado, tdPrecioFiltrado)
                                    tabla.append(trFiltrado)
                                })
                            }
                        })

                        btnBuscar.addEventListener("click", function () {
                            let criterio = buscador.value

                            let cochesFiltrados = coches.filter(coche => coche.nombre.toLowerCase().includes(criterio.toLowerCase()))

                            tabla.innerHTML = ""

                            let cabeceraFoto = document.createElement("th")
                            cabeceraFoto.textContent = "Foto"

                            let cabeceraFabricante = document.createElement("th")
                            cabeceraFabricante.textContent = "Fabricante"                                

                            let cabeceraModelo = document.createElement("th")
                            cabeceraModelo.textContent = "Modelo"

                            let cabeceraPrecio = document.createElement("th")
                            cabeceraPrecio.textContent = "Precio"

                            tabla.append(cabeceraFoto, cabeceraFabricante ,cabeceraModelo, cabeceraPrecio)

                            cochesFiltrados.forEach(coche => {

                                let trFiltrado = document.createElement("tr")

                                let tdImagenFiltrado = document.createElement("td")
                                let imagenFiltrado = document.createElement("img")
                                imagenFiltrado.src = coche.imagen
                                tdImagenFiltrado.append(imagenFiltrado)

                                let tdFabricanteFiltrado = document.createElement("td")
                                tdFabricanteFiltrado.textContent = fabricantes.find(fab => fab.id === coche.fabricante).nombre

                                let tdModeloFiltrado = document.createElement("td")
                                tdModeloFiltrado.textContent = coche.nombre

                                let tdPrecioFiltrado = document.createElement("td")
                                tdPrecioFiltrado.textContent = coche.precio

                                trFiltrado.append(tdImagenFiltrado, tdFabricanteFiltrado ,tdModeloFiltrado, tdPrecioFiltrado)
                                tabla.append(trFiltrado)
                            })
                        })
                    }
                )
        }
    )
