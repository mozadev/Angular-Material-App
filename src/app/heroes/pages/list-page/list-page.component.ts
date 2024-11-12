import { Component, OnInit } from '@angular/core';
import { Anexo } from '../../interfaces/anexo.interface';
import { AnexosService } from '../../services/anexos.service';
import { MatDialog } from '@angular/material/dialog';
import { AnexoDetailComponent } from '../anexo-detail/anexo-detail.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  public anexos: Anexo[] = [];
  displayedColumns: string[] = ['key', 'anexo', 'duration', 'registro', 'details'];

  constructor(private anexosService: AnexosService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.anexosService.getAnexos()
      .subscribe(anexos => this.anexos = anexos);
  }

  openDetailDialog(anexo: any):void {
    this.anexosService.getAnexoDetail(anexo.key__key).subscribe(details => {
      this.dialog.open(AnexoDetailComponent,{
        width: '600px',
        data: {...anexo, record: details.data},
      })
    })
  }
}
