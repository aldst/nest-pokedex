import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreatePokemonDto {

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    no: number;

    @IsString()
    @IsNotEmpty()
    name: string;
}
