import { AffiliatesService } from './affiliates.service';
import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';
export declare class AffiliatesController {
    private readonly affiliatesService;
    constructor(affiliatesService: AffiliatesService);
    create(createAffiliateDto: CreateAffiliateDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAffiliateDto: UpdateAffiliateDto): string;
    remove(id: string): string;
}
