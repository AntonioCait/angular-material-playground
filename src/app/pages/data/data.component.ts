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
  // Define the columns to display in the table
  displayedColumns: string[] = ['position', 'name', 'delete'];
  
  // Define the data to display in the table
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

  // Add a new data object to the dataSource array
  addData() {
    // Find the highest position number in the current dataSource
    const highestPosition = this.dataSource.reduce((max, item) => Math.max(max, item.position), 0);
    // Increment the highest position to get a new unique position
    const newPosition = highestPosition + 1;
    // Create a new data object with the new position and a generated name
    const newData = {position: newPosition, name: `Data ${newPosition}`};
  
    // Add the new data object to the dataSource array
    this.dataSource = [...this.dataSource, newData];
    // Log action to console for debugging
    console.log('Add data button clicked');
  }

  // receive the position of the data to delete
  deleteData(position: number) {
    this.dataSource = this.dataSource.filter(item => item.position !== position);
    console.log('Delete data button clicked');
  }
}
