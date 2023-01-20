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

    start() {
        let selection = this.showMainMenuOptions;
        while(selection != 0) {
            switch(selection){
                case '1':
                    this.createCompany();
                    break;
                case '2':
                    this.viewCompany();
                    break;
                case '3':
                    this.deleteCompany();
                    break;
                case '4':
                    this.displayCompanies();
                    break;
                default: 
                    selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }


    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create new car Company
            2) View Company
            3)  Delete company
            4) Display all companies
        `);
    }

    showCompanyMenuOptions(companyInfo){
        return prompt(`
        0) back
        1) create car
        2) delete car
        ------------------------
        ${companyInfo}
        `);
    }

    displayCompanies() {
        let comString = '';
        for (let i = 0; i < this.company.length; i++) {
            comString += i + ') ' +  this.company[i].name + '\n';
        }
        alert(comString);
    }

    createCompany() {
        let name = prompt('Enter the name of the new company');
        this.company.push(new Company(name));
    }

    viewCompany() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.company.length) {
            this.selectedCompany = this.company[index];
            let description = 'Company name: ' + this.selectedCompany.name + '\n';
            
            for (let i= 0; i< this.selectedCompany.cars.length; i++){
                description += i + ') ' + this.selectedCompany.cars[i].name 
                + '-' + this.selectedCompany.cars[i].type + '\n';
            }
            
            let selection = this.showCompanyMenuOptions(description);
            switch( selection ) {
                case '1':
                    this.createCar();
                    break;
                case '2':
                    this.deleteCar();
            }

        }
    }


    deleteCompany(){
        let index = prompt( 'Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.company.length){
            this.company.splice(index, 1);
        }
    }


    createCar(){
        let name = prompt('Enter name of the car');
        let position = prompt(' Enter the type of car IE sportscar, sedan, truck, van ');
        this.selectedCompany.cars.push( new Cars(name, position));
    }


    deleteCar(){
        let index = prompt(' Enter the index of the car you wish to delete');
        if(index > -1 && index < this.selectedCompany.cars.length){
            this.selectedCompany.cars.splice(index, 1);
        }
    }
}

let menu = new Menu();

menu.start();


