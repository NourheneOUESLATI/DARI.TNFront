import { Component, OnInit } from '@angular/core';
import {Bank} from '../model/bank';
import {BankserviceService} from '../services/bankservice.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css']
})
export class AddbankComponent implements OnInit {
  bank: Bank;
  constructor(private bankService: BankserviceService) {
  }
  ngOnInit(): void {
   this.bank = new Bank();
  }
  addbank(){
    this.bankService.addBank(this.bank).subscribe((response: Bank) => {console.log(response);},
      (error: HttpErrorResponse) => {alert(error.message);});
  }
}
