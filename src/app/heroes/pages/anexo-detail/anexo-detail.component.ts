import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-anexo-detail',
  templateUrl: './anexo-detail.component.html',
  styleUrls: ['./anexo-detail.component.css']
})
export class AnexoDetailComponent  {

  displayedColumns: string[] = ['index', 'registro', 'status'];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any ){}

}
