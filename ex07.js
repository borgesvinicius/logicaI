let eleitores = 2000;
let votoBranco = 1000;
let votoNulo = 500;
let votoValido = eleitores - votoBranco - votoNulo 
const percentualBrancos = (votoBranco / eleitores) * 100;
const percentualNulos = (votoNulo / eleitores) * 100;
const percentualValido = (votoValido / eleitores) * 100;
document.write(`votos validos ${eleitores} percentual votos brancos ${percentualBrancos}% votos nulos ${percentualBrancos} votos nulos ${percentualNulos}%`)
