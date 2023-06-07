import { Expose } from 'class-transformer';

export default class UserRdo {
  @Expose()
  public email!: string ;

  @Expose()
  public avatarPath!: string;

  @Expose()
  public userName!: string;
}
