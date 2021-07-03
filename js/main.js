fetch("./js/estudios.json")
.then(response => response.json())
.then(data => {
    console.log(data)

    data.forEach(element => {
        let acumulador = ``;
        acumulador+= `
                <div class="row">
                    <div class="col-lg-3 ms-auto"><p class="lead">
                        ${element.certificado}
                    </p></div>
                    <div class="col-lg-3 ms-auto"><p class="lead">
                        ${element.institucion}
                    </p></div>
                    <div class="col-lg-3 ms-auto"><p class="lead">
                        ${element.fechaInicio} - ${element.fechaFinal}
                    </p></div>
                </div>
                <br/>
        `

        document.getElementById("estudios").innerHTML += acumulador
    });
})