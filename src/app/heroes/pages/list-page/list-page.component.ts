import { Component, OnInit } from '@angular/core';
import { Anexo } from '../../interfaces/anexo.interface';
import { AnexosService } from '../../services/anexos.service';
import { MatDialog } from '@angular/material/dialog';
import { AnexoDetailComponent } from '../anexo-detail/anexo-detail.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public anexos: Anexo[] = [];
  public count = 0;
  public up = 0;
  public dow = 0;
  public upRate = '';
  public dowRate = '';

  displayedColumns: string[] = ['key', 'anexo', 'duration', 'registro', 'details'];

  constructor(private anexosService: AnexosService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.anexosService.getAnexos().subscribe(data => {
      this.anexos = data.data;
      this.count = data.count;
      this.up = data.up;
      this.dow = data.down;
      this.upRate = data.up_rate;
      this.dowRate = data.down_rate;
    });
  }

  openDetailDialog(key: string):void {
    this.anexosService.getAnexoDetail(key).subscribe(details => {
      this.dialog.open(AnexoDetailComponent,{
        width: '600px',
        data: {duration_hrs: details.duration_hrs, records:details.data},
      })
    })
  }
}
