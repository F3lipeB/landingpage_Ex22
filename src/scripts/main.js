AOS.init();

const dataDoEvento = new Date("May 20, 2025 12:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 *24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;
    const segundoEmMs = 1000

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMS);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMS / minutoEmMS);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMS / segundoEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);