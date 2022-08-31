//ES1
function es1(x, y){
    if(x==y){
        return (x+y) * 3;
    } else {
        return x+y
    }
}
// function es1(x, y) {
//     if(x==y){
//         return (x+y) * 3
//     }
//     return x+y
// }
// function es1(x, y) {
//     let res = x+y;
//     if(x==y){
//         res *= 3
//     }
//     return res
// }

//ES2
//Posso assegnare dei valori di deafult ai parametri che verranno usati in caso il parametro non dovesse essere specificato
//NB: per usare il valore di deafult il parametro deve essere omesso, se però è omesso non possono esserci altri parametri dopo (o verrebbero scambiati per quello di default) -> Il parametro default deve essere l'ultimo e se ce ne sono di più vanno in ordine di come possono essere omessi
function testDefault(a, b, c=20) {
    console.log("A", a);
    console.log("B", b);
    console.log("C", c);
}
// testDefault(1, 2, 3) -> a:1 b:2 c:3
// testDefault(1, 2) -> a:1 b:2 c:20
// testDefault(1, 3) -> a:1 b:3 c:20 -- non posso avere c esplicito e b deafult

// function anyDefault(a, b, c) {
//     if(a == null) a = 10
//     if(b == null) b = 20
//     if(c == null) c = 30
// }
// anyDefault(null, 3, null)

// function omettoDefault(a, b, c) {
//     if(!a) a = 10
//     if(!b) b = 20
//     if(!c) c = 30
//     console.log(a, b, c);
// }
// omettoDefault(false, "", 0)
function valoriDeafult(obj){
    if(obj.a == undefined) obj.a = 10
    if(obj.b == undefined) obj.b = 20
    if(obj.c == undefined) obj.c = 30
    console.log("A", obj.a);
    console.log("B", obj.b);
    console.log("C", obj.c);
}
valoriDeafult({a: false, b: 0})

function es2(x, y){
    if(x==50 || y==50 || (x+y)==50) {
        return true
    }
    return false
}

// console.log(es2(30, 20));
// console.log(es2(40));


//ES3
function es3(s, p){
    return s.substr(0, p) + s.substr(p+1)
}
// function es3(s, p){
//     let arr = s.split("");
//     let prima = arr.splice(0, p)
//     let dopo = arr.splice(1)
//     let nuovoArr = prima.concat(dopo)
//     return nuovoArr.toString()
// }

//ES4
function es4(x, y, z) {
    if(x > y) {
        if(x > z) return x
    } else {
        if(y > z) return y
    }
    return z
}