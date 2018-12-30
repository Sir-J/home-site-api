import { UserClaimEntity } from 'src/modules/auth/models/entities/user-claim.entity';
import { Column, OneToMany, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('claims')
export class ClaimsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => UserClaimEntity, userClaims => userClaims.claim)
    userClaims: UserClaimEntity[];
}
