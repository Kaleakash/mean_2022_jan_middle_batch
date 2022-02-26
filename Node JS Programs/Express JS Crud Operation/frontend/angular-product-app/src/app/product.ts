//This class is reponsible to map the json data from backend technologies. 
export class Product {
    constructor(
        public pid:number,
        public pname:string,
        public price:string,
        public url:string){}
}
