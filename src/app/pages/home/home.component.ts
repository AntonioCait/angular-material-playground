import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardTitle,
    MatCard,
    MatList,
    MatListItem,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  transactions = [
    { description: 'Transaction 1', amount: 123.45 },
    { description: 'Transaction 2', amount: 67.89 },
    { description: 'Transaction 3', amount: 210.11 }
  ];

  metrics = [
    { label: 'Total Balance', value: '$12,345.67' },
    { label: 'Monthly Expenses', value: '$3,210.45' },
    { label: 'Monthly Income', value: '$4,567.89' }
  ];
}
