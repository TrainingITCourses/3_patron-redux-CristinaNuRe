import { CriteriaTypes } from "./criteriaTypes";

export class Criteria {

    type: CriteriaTypes;
    results: any[];

    constructor(type: CriteriaTypes, results: any[]) {
        this.type = type;
        this.results = results;
    };
}