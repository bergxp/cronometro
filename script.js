let c = document.getElementById('contador')
let seg = 0
let min = 0
let hora = 0
let cron ;

function digitos(n){
  if(n < 10 ){
    return '0' + n
  } else{
    return n
  }
}

function iniciar(){
  contar()
  cron = setInterval(contar,1000)

}
function pausar (){
  clearInterval(cron)
}
function parar(){
  clearInterval(cron)
  seg = 0
  min = 0 
  hora = 0
  c.innerHTML = "00:00:00"
}
function contar(){
  seg ++
  if(seg >=60){
    min ++
    seg = 0
  }if(min>=60){
    min = 0
    hora ++
  }
  c.innerHTML = `${digitos(hora)}: ${digitos(min)}: ${digitos(seg)}`
}