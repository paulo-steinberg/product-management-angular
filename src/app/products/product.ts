import { IProduct } from './product.interface';

export class Product implements IProduct {
    
    constructor(public id: number,
        public name: string,
        public code: string,
        public releaseDate: string,
        public price: number,
        public description: string,
        public starRating: number,
        public imageUrl: string) {
        
    }

    calculateDiscount(percent:number): number {
        return this.price - (this.price * percent / 100);
    }
}