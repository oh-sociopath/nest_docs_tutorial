export class CreateCatDto {
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
