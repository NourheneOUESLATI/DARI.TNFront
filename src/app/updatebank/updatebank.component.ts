import {Component, OnInit, Input, Output} from '@angular/core';
import {Bank} from '../model/bank';
import {BankserviceService} from '../services/bankservice.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-updatebank',
  templateUrl: './updatebank.component.html',
  styleUrls: ['./updatebank.component.css']
})
export class UpdatebankComponent implements OnInit {
  currentbank = new Bank();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private bankService: BankserviceService) { }

  ngOnInit(): void {
    this.bankService.getBankbyid(this.activatedRoute.snapshot.params.id).
    subscribe( bank => { this.currentbank = bank; });
  }

  update(){
    this.bankService.updateBank(this.currentbank).subscribe(() => {this.router.navigate(['banks']);},
      (error) => { alert("error while updating"); });
}
}
