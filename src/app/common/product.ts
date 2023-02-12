export class Product {

    constructor(
        public id: number,
        public sku: string,
        public name: string,
        public description: string,
        public unitPrice: number,
        public imageUrl: Blob,
        public unitsInStock: number,
    ) {


    }

}


