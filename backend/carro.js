class Carro{
    constructor(marca, modelo, ) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar(){
        console.log(`O ${this.marca} ${this.modelo} está acelerando!`);
    }

    
}

 const meuCarro = new Carro("Toyota", "Corolla");
    meuCarro.acelerar()
