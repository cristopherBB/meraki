import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class firebaseService {

    //productList!: AngularFireList<any>

    //constructor(public firebase: AngularFireDatabase){}

    getData(){
        let data = [{
            "img":"assets/img/galeria-1.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        },
        {
            "img":"assets/img/galeria-2.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        },
        {
            "img":"assets/img/galeria-3.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        },
        {
            "img":"assets/img/galeria-4.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        }
        ,{
            "img":"assets/img/galeria-5.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        }
        ,{
            "img":"assets/img/galeria-6.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        }
        ,{
            "img":"assets/img/galeria-7.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        }
        ,{
            "img":"assets/img/galeria-8.jpg",
            "name":"Soy un producto delicioso",
            "description":"rellena y cubierta con una rica crema de limón. Decorada con merengue italiano y figuras de azúcar."
        }]
        return data
    }
}