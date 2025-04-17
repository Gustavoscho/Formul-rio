let specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ 1234567890]/;
document.getElementById("formulario").addEventListener("submit",function(e)){
    e.preventDefault();

    let a = (document.getElementById(nome).value);
    if(specialChars.test(a)){ 
        alert("apenas letras são permitidas")
    }
    
    //let b = (document.getElementById(idade).value);

    let c = (document.getElementById(cpf).value);

    let d = (document.getElementById(naturalidade).value);

    let e = (document.getElementById(nacionalidade).value);

    let f = (document.getElementById(genero).value);
    let g = (document.getElementById(rg).value);
    let h = (document.getElementById(civil).value);
    let i = (document.getElementById(cep).value);
    let j = (document.getElementById(endereco).value);
    let k = (document.getElementById(bairro).value);
    let l = (document.getElementById(cidade).value);
    let m = (document.getElementById(estado).value);
    let n = (document.getElementById(pais).value);
    let o = (document.getElementById(email).value);
    let p = (document.getElementById(telefone).value);
    let q = (document.getElementById(promocao).value);
    let r = (document.getElementById(entrega).value);
    let s = (document.getElementById(info).value);
    let t = (document.getElementById(trabalho).value);
    let u = (document.getElementById(areatrabalho).value);
    let v = (document.getElementById(salario).value);
    let w = (document.getElementById(vegano).value);
    let x = (document.getElementById(policia).value);
    let y = (document.getElementById(serasa).value);
    let z = (document.getElementById(filhos).value);
    let adois= (document.getElementById(aviao).value);
    let bdois = (document.getElementById(hino).value);
    let cdois = (document.getElementById(time).value);
    let ddois = (document.getElementById(termos).value);
};