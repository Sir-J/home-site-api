import { Column, Entity, JoinTable, OneToMany } from 'typeorm';

import { BaseEntity } from '../../../app-common/models/entities';
import { UserClaimEntity } from './user-claim.entity';

@Entity('users')
export class UserEntity extends BaseEntity<number> {
    @Column()
    fullName: string;

    @Column({
        unique: true,
    })
    login: string;

    @Column()
    password: string;

    @OneToMany(type => UserClaimEntity, userClaims => userClaims.user, {
        eager: true,
    })
    @JoinTable()
    claims: UserClaimEntity[];
}
