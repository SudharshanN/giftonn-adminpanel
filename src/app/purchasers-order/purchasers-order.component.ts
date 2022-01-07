import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprovedModelComponent } from '../approved-model/approved-model.component';
import { DenyProductComponent } from '../deny-product/deny-product.component';
import { FilterComponent } from '../filter/filter.component';
import { FreezeRoleComponent } from '../freeze-role/freeze-role.component';

@Component({
  selector: 'app-purchasers-order',
  templateUrl: './purchasers-order.component.html',
  styleUrls: ['./purchasers-order.component.scss']
})
export class PurchasersOrderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router,) { }

  ngOnInit(): void {
  }


  action(value) {
    console.log(value)
    if (value == 'freeze') {
      const dialogRef = this.dialog.open(FreezeRoleComponent, {
        width: "50%",
        data: "purchasersOrder"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    if (value == 'approve') {
      const dialogRef = this.dialog.open(ApprovedModelComponent, {
        width: "30%",
        data: "purchasersOrder"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }



  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "purches" },
    });
  }
  approveProduct(purches) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "purches",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyProduct(purches) {
    const dialogRef = this.dialog.open(DenyProductComponent, {
      width: "30%",
      data: "purches",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
