export class Restaurant {
  public soldOut : boolean = false;
  public imageUrl : string = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTO7m-2M7EIAhEe71efG2FAGPCXR4eBe0nSWXICCpCnb0fy9sM-Ug";

  constructor(public name : string, public phoneNumber : number, public address: string, public price: number, public review: string, public id : number,public rating=4) {

  }
}
