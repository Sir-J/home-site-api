import { PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity<T> {
    @PrimaryGeneratedColumn()
    id: T;
}
