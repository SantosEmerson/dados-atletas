class Atleta {

    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        }
        else if(this.idade >= 12 && this.idade <= 13) {
            return "Juvenil"
        }
        else if(this.idade >= 14 && this.idade <= 15) {
            return "Intermediário"
        }
        else if(this.idade >= 16 && this.idade <= 30) {
            return "Adulto"
        }
        else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura); 
    }

    calculaMediaValida() {

        let notasOrdenadas = this.notas.sort(function (a, b) {
            return a - b; 
        });

        let notasValidas = notasOrdenadas.slice(1,4);

        let soma = 0; 

        for(let i = 0; i < notasValidas.length; i++) {
            soma = soma + notasValidas[i]; 
        }
    
        return soma / 3;
    }

    obtemNomeAtleta() {
        return this.nome;
    }
    
    obtemIdadeAtleta() {
        return this.idade;
    }
    
    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return  this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

const atleta = new Atleta("Cesar Abascal",
30, 80, 1.70,
[10, 9.34, 8.42, 10, 7.88]);
    
console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.altura);
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());



   