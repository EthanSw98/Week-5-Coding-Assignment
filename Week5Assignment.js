class Cars {
    constructor( name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return `$(this.name) is a $(this.type)`
    }
}


class Company {
    constructor(name) {
        this.name = name;
        this.cars = [];
    }

    addCar(car){
        if( car instanceof Cars){
            this.cars.push(car);
        }else{
            throw new Error(`You can only add an instance of Cars. Your input is not a recognized car: ${car}`);
        }
    }

    describe(){
        return `${this.name} has ${this.cars.length} different cars.`;
    }
}


class Menu {
    constructor(){
        this.company = [];
        this.selectedCompany = null;
    }

    
}