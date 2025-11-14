import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type']) // composite index
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  /**
   * to help speed up this search, we can define an index on the "name" column
   */
  @Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
