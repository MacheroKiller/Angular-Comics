import { CharacterService } from './services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit{

  constructor(
    private characterService: CharacterService
  ){}

  // Variables:
  character = new Array<any>();

  /**
   * This method is called when the component is initialized
   */

  ngOnInit(){

    this.characterService.getAllCharacters(8,0).subscribe((data) => {
      this.character = data;
    });
  }

  /**
   * This method calls the service to get all comics
   */

  getAllCharacters(){
    this.characterService.getAllCharacters(10,0).subscribe((data) => {
      console.log(data);
    });
  }

  /**
   * This method get the image for the character
   * @param characterObject to get image
   * @returns image url
   */

  getImageUrl(characterObject: any){
    return characterObject.thumbnail.path + '.' + characterObject.thumbnail.extension;
  }

  /**
   * This method get the description 
   * @param characterObject 
   */
  insertDescription(characterObject: any){
    if(characterObject.description == ""){
      return "No description available";
  }
    return characterObject.description;
  }

}


