import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environments } from 'src/environments/environments';
import { AnexoDetail } from '../../interfaces/anexoDetail.interface';

interface AnexoDetailData{
  duration_hrs:string;
  records: AnexoDetail[];
}

@Component({
  selector: 'app-anexo-detail',
  templateUrl: './anexo-detail.component.html',
  styleUrls: ['./anexo-detail.component.css']
})
export class AnexoDetailComponent implements OnInit {
 // displayedColumns: string[] = ['index', 'registro', 'status'];

 constructor(
  public dialogRef: MatDialogRef<AnexoDetailComponent>,
  @Inject(MAT_DIALOG_DATA) public data: AnexoDetailData
 ) {}

  ngOnInit(): void {}

  closeDialog():void {
    this.dialogRef.close();
  }

}
