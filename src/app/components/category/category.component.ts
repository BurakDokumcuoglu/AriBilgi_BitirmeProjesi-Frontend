import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  //html tarafında kullanacağımız dataları bu şekilde tutmamız gerekir
  categories : Category[]=[];
  currentCategory:any;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories=response;
    })
  }

  setCurrentCategory(category:Category){  //üzerine tıklanan kategoriyi yakalamak için gerekli metot
    this.currentCategory=category;
   }
 
   getCurrentCategoryClass(category:Category){//ngFor ile dönülürken seçilen kategori parametre ile gönderilene eşitse css class'ını değiştir
    if(category == this.currentCategory){
      return "list-group-item active";
    }
    else{
     return "list-group-item";
    }
   }
 
   getAllCategoryClass(){
     if(!this.currentCategory){
       return "list-group-item active";
     }
     else{
       return "list-group-item";
     }
   }

   
   removeCurrentCategory(){
   this.currentCategory=null;
   }

}
