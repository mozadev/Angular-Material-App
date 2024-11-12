import { Component, OnInit } from '@angular/core';
import { Anexo } from '../../interfaces/anexo.interface';
import { AnexosService } from '../../services/anexos.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  public anexos: Anexo[] = [];

constructor(private anexosService: AnexosService){

}
  ngOnInit(): void {
   this.anexosService.getAnexos()
   .subscribe(anexos => this.anexos = anexos);
  }

}
