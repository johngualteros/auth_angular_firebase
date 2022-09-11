import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      await this.userService.register(this.user);
      console.log(this.user);
      this.router.navigate(['/login']);
    }catch(err){
      console.log(err);
    }
  }

}
