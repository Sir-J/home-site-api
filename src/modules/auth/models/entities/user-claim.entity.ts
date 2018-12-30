import { BaseEntity } from 'src/modules/app-common/models/entities';
import { ClaimsEntity } from 'src/modules/auth/models/entities/claims.entity';
import { UserEntity } from 'src/modules/auth/models/entities/user.entity';
import { ManyToOne, Entity, JoinTable } from 'typeorm';

@Entity('usersClaims')
export class UserClaimEntity extends BaseEntity<number> {
    @ManyToOne(type => UserEntity, user => user.claims, { onDelete: 'CASCADE' })
    user: UserEntity;

    @ManyToOne(type => ClaimsEntity, claim => claim.userClaims, { onDelete: 'CASCADE', eager: true })
    @JoinTable()
    claim: ClaimsEntity;
}
