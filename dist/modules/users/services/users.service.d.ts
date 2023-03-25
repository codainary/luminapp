import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UsersService {
    create(payload: CreateUserDto): string;
    findAll(): void;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
