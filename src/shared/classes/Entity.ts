import { formatDate, formatDateFromString } from "@/shared/helpers/format";

export abstract class Entity {
  
  id!: string;
  created_at!: string;
  updated_at!: string;
  
  constructor(args: any){
    this.id = args.id;
    this.created_at = formatDateFromString(args.created_at , {formatMatcher: "yyyy-MM-dd"})
    this.updated_at = formatDateFromString(args.updated_at)
  }
}