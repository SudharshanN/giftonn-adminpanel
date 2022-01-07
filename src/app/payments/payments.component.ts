import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ApprovedModelComponent } from '../approved-model/approved-model.component';
import { DeleteModelComponent } from "../delete-model/delete-model.component";
import { DenyProductComponent } from '../deny-product/deny-product.component';
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {


  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addProduct() {
    this.router.navigate(["app-payments"]);
  }
  openFilter() {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "50%",
      data: { filterType: "Payment" },
    });
  }
  approveProduct(Payment) {
    const dialogRef = this.dialog.open(ApprovedModelComponent, {
      width: "30%",
      data: "Payment",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  denyProduct(Payment) {
    const dialogRef = this.dialog.open(DenyProductComponent, {
      width: "30%",
      data: "Payment",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }









}
