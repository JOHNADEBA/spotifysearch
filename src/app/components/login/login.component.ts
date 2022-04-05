import { Component, OnInit } from '@angular/core';
import { SpotifyendpointsService } from '../../services/spotifyendpoints.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private user: SpotifyendpointsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    this.user.getLogin().subscribe((result) => {
      result.filter((ele: any) => {
        if (data.email == ele.email && data.password == ele.password) {
          console.log(ele);
          this.router.navigate([''], { relativeTo: this.route });
        }
      });
    });
    console.log(data);
  }
}
