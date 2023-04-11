import { Column, Entity } from 'typeorm';

import { AbstractEntity } from 'src/common/abstract.entity';

@Entity({ name: 'deuda_total' })
export class Deuda extends AbstractEntity {
  //TODO: FK UNIDAD

  @Column({
    type: 'float',
    name: 'total_capital',
    nullable: false,
  })
  totalCapital: number;

  @Column({
    type: 'float',
    name: 'total_interes',
    nullable: false,
  })
  totalInteres: number;
}
