import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(payload: CreateUserDto): string;
    findAll(): Promise<void>;
    findOne(id: number): Promise<void>;
}
