import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})

@Injectable({
  providedIn: 'root',
})

export class service {

}
