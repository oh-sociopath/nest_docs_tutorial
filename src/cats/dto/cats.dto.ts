export class CreateCatDto {
  id: number;
  name: string;
  birthdate: Date;
  owner: string;
  breed: string;
}

export class ListAllEntities {
  idk: any;
  limit: any;
}

export class UpdateCatDto extends CreateCatDto {}
