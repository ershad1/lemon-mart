import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //     'lemon',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg'
  //     )
  //   );
  // }

  displayAccountIcons = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => (this.displayAccountIcons =
        authStatus.isAuthenticated)
    );
  }

}
