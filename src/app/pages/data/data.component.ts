import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  displayedColumns: string[] = ['position', 'name', 'delete'];
  dataSource = [
    {
      position: 1,
      name: 'Alice',
    },
    {
      position: 2,
      name: 'Bob',
    },
    {
      position: 3,
      name: 'Charlie',
    }
  ];

  addData() {
    const newPosition = this.dataSource.length + 1;
    const newData = {position: newPosition, name: `Data ${newPosition}`};

    // Create a new array with the new data and assign it to dataSource
    this.dataSource = [...this.dataSource, newData];
    console.log('Add data button clicked');
  }

  // receive the position of the data to delete
  deleteData(position: number) {
    this.dataSource = this.dataSource.filter(item => item.position !== position);
    console.log('Delete data button clicked');
  }
}
