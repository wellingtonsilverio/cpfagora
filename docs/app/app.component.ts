import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCpfCnpj: FormGroup;
  cpf: any;
  error: any;

  constructor(
    public fb: FormBuilder,
    public searchService: SearchService
  ) {
    this.searchCpfCnpj = fb.group({
      cpfcnpj: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  async search(form: any) {
    await this.getCPFOrCNPJ(form.email, form.cpfcnpj);
  }

  async getCPFOrCNPJ(email: string, cpfcnpj: string) {
    this.error = undefined;
    this.cpf = undefined;

    try {
      const cpfOrCnpj = await this.searchService.getCPFOrCNPJ(email, cpfcnpj).toPromise();
      if (!cpfOrCnpj || cpfOrCnpj.status === false) {
        throw cpfOrCnpj.data.error;
      } else {
        if (cpfOrCnpj.data.cpf) {
          this.cpf = cpfOrCnpj.data;
          this.goto('searchcpf');
        }
      }
    } catch (error) {
      console.log('[ERROR 001] ', error);
      this.error = error;
      this.goto('searcherror');
    }
  }

  goto(hashtag: string) {
    const link = document.createElement('a');
    link.setAttribute('class', 'nav-link js-scroll-trigger');
    link.href = '#'+hashtag;
    setTimeout(() => {
      link.click();
    }, 100);
  }

  get cpfcnpj() { return this.searchCpfCnpj.get('cpfcnpj'); }
  get email() { return this.searchCpfCnpj.get('email'); }
}
