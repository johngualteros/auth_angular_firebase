import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    try {
      await this.userService.login(this.user).then(res=>{
        console.log(res);
        this.router.navigate(['/main']);
      });
    }catch(error){
      console.log(error);
    }
  }
  loginWithGoogle(){
    this.userService.loginwithGoogle().then(res=>{
      console.log(res);
      this.router.navigate(['/main']);
    });
  }

}
