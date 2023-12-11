// interface data{
//     brand: string;
//     category: string;
//     description: string;
//     discountPercentage: number;
//     id: number;
//     images: any
//     price: number;
//     rating: number;
//     stock: number;
//     thumbnail: string;
//     title: string;
// }

export interface IProduct {
    id:number;
    name: string;
    desc: string;
    image: string;
    price: number;
    rate: number;
    addFav: () => void;
    currentProd: any
    // data: Array<data>;
}