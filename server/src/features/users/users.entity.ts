import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  email: string;

  @Column({
    nullable: true,
  })
  googleId: string;

  @Column({
    nullable: true,
  })
  facebookId: string;

  @Column({
    nullable: true,
  })
  userInfo: string;

  @Column({
    nullable: true,
  })
  profilePictureUrl: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  status: string;

  @Column({
    nullable: true,
  })
  label: string;

  @Column({
    type: 'boolean',
    nullable: true,
  })
  isBanned: boolean;

  @Column({
    nullable: true,
  })
  banEnd: number;
}
