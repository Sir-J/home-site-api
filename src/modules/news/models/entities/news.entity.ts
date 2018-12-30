import { Entity, PrimaryGeneratedColumn, Column, ColumnType } from 'typeorm';

@Entity('news')
export class NewsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('datetime')
    createDate: Date;

    @Column({ length: 100 })
    header: string;

    @Column({ length: 500 })
    description: string;

    @Column({ length: 8000, type: 'nvarchar' })
    text: string;

    @Column('boolean')
    isActive: boolean;

    @Column()
    author: string;
}
