let usuario= prompt ("Ingrese su nombre")
while(usuario == ""){
    alert("Dato invalido")
    usuario= prompt ("Ingrese su nombre")
}
let prestamo=(prompt("¿Cuánto dinero necesitas "+usuario+"?"))
let cuotas=(prompt ("¿En cuántas cuotas podés pagarlo?"))


function interes (){
    if (cuotas <=6) {interes= 1.2}
    else if(cuotas >6 && cuotas<=18) {interes=1.8}
    else {interes=2.2}
}
function prestamototal (){
    if(parseInt(prestamo)){
    let resultado= (prestamo*interes)
    alert ("Deberá pagar " + resultado+ " en "+cuotas+" cuotas de "+(resultado/cuotas)+ " cada una")
    }
}
interes()
prestamototal()
