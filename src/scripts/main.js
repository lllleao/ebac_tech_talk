document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

    const dataDoEvento = new Date('Mar 20, 2024 19:00:00')
    const timeStampDoEvento = dataDoEvento.getTime()

    const ateEvento = setInterval(() => {
        const agora = new Date()
        const timeStampAgora = agora.getTime()

        const distanciaEmTimeStamp = timeStampDoEvento - timeStampAgora

        const diasAteEvento = Math.floor(distanciaEmTimeStamp / (1000 * 60 * 60 * 24))
        const horasAteEvento = Math.floor((distanciaEmTimeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutosAteEvento = Math.floor((distanciaEmTimeStamp % (1000 * 60 * 60)) / (1000 * 60))
        const segundosAteEvento = Math.floor((distanciaEmTimeStamp % (1000 * 60)) / (1000))

        document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

        if (distanciaEmTimeStamp < 0) {
            clearInterval(ateEvento)
            document.getElementById('contador').innerHTML = 'Evento expirado'
        }

    }, 1000)
})