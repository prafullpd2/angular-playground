export interface IUser{
    name: string;
    age: number;
    gender: string;
    imageUrl: string;
}

export class User implements IUser{
    name!: string;
    age!: number;
    gender!: string;
    imageUrl!: string;

    constructor(name: string, age: number, gender: string, imageUrl: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.imageUrl = imageUrl;

    }
    
}