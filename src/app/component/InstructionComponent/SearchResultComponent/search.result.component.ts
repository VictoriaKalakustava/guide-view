import {Component} from "@angular/core";
import {InstructionService} from "../../../service/instruction.service";
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../../service/guards/search.service";
import {Instruction} from "../../../entity/instruction";

@Component({
  selector: 'search-result',
  templateUrl: './search.result.component.html',
  styleUrls: ['./search.result.component.css'],
})
export class SearchResultComponent {
  private searchParam: string;
  private searchResult: Instruction[];
  constructor(private route: ActivatedRoute,
              private instructionService: InstructionService,
              private searchService: SearchService) {
    this.route.params.subscribe(params => {
      this.searchParam = params['searchParam'];
    });
    if(this.searchParam){
      this.searchService.search(this.searchParam).subscribe(
        data => {
          this.searchResult = data;
          console.log(this.searchResult);
        }
      );
    }
  }
}
