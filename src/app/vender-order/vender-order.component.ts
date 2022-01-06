import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DeleteModelComponent } from "../delete-model/delete-model.component";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-vender-order',
  templateUrl: './vender-order.component.html',
  styleUrls: ['./vender-order.component.scss']
})
export class VenderOrderComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  download(type) {
    console.log(type);
  }
  deleteModel() {
    const dialogRef = this.dialog.open(DeleteModelComponent, {
      width: "25%",
      data: "user",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "user" },
    });
  }


}
