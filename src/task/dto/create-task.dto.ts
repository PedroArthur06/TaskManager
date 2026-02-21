import { IsDate, IsIn, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTaskDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    title: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    description: string;

    @IsNotEmpty()
    @IsDate()
    dueDate: Date;

    @IsNotEmpty()
    @IsString()
    @IsIn(['pending', 'in-progress', 'completed'])
    status: string;
}
