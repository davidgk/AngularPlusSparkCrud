import {Component, OnInit} from "@angular/core";
import {Partner} from "app/crud/partner/shared/model/partner";
import {PartnerService} from "app/crud/partner/shared/services/partner.service";

@Component({
  selector: 'partner-home',
  templateUrl: './partner-home.component.html',
  styleUrls: ['./partner-home.component.css']
})
export class PartnerHomeComponent implements OnInit {

  partners: Partner[] = [];

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getPartners()
      .subscribe(data => this.partners = data);
  }

  deletePartner(partner){
    if (confirm("Are you sure you want to delete " + partner.name + "?")) {
      var index = this.partners.indexOf(partner);
      this.partners.splice(index, 1);

      this.partnerService.deletePartner(partner.partner_id)
        .subscribe(null,
          err => {
            alert("Could not delete partner.");
            // Revert the view back to its original state
            this.partners.splice(index, 0, partner);
          });
    }
  }

}








