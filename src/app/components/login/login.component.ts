import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WebServiceService } from 'src/app/services/web-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ticket = './assets/ticket.png';
  queryParams: any;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private _webServiceService: WebServiceService,
    private _fb: FormBuilder
  ) {
    this.route.queryParams.subscribe((params) => {
      this.queryParams = params;
      console.log(this.queryParams);
    });
    this.form = this._fb.group({
      code: [this.queryParams.code],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  validateTicket(): void {
    const params = this.form.value;
    this._webServiceService.validateItemGame(params).subscribe({
      next: (res) => {
        this.ticket = './assets/ticket-disponivel.png';
        alert(res.message);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
