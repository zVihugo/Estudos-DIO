class Hero {

    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
        this.hability = '';
        
    }

    attack(){

        if(this.type === 'Guerreiro'){
            this.hability = 'espada';
        }else if(this.type === 'Mago'){
            this.hability = 'magia';
        }else if(this.type === 'Monge'){
            this.hability = 'Artes marciais';
        }else if(this.type === 'Ninja'){
            this.hability = 'Shuriken';
        }else{
            this.hability = 'Undefined';
        }

        return `O ${this.type} atacou usando ${this.hability}`;
    }
}

let mage = new Hero('Victor', 21, 'Mago');

console.log(mage.attack());