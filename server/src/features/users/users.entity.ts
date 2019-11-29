import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  googleId: string;

  @Column('text')
  facebookId: string;

  @Column('text')
  userInfo: string;

  @Column('text')
  profilePictureUrl: string;

  @Column('text')
  password: string;

  @Column('text')
  role: string;

  @Column('text')
  status: string;

  @Column('text')
  label: string;

  @Column()
  isBanned: boolean;

  @Column()
  banEnd: number;
}
