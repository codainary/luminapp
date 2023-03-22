import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';
export declare class AffiliatesService {
    create(createAffiliateDto: CreateAffiliateDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAffiliateDto: UpdateAffiliateDto): string;
    remove(id: number): string;
}
