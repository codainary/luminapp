import { Column, Entity } from 'typeorm';

import { AbstractEntity } from 'src/common/abstract.entity';

@Entity({ name: 'recibos_cobro' })
export class Cobro extends AbstractEntity {
  @Column({
    type: 'character varying',
    length: 20,
    nullable: false,
    unique: true,
  })
  consecutivo: string;

  //TODO: FK ID UNIDAD

  //TODO: FK ID CONTRIBUYENTE

  @Column({
    type: 'character varying',
    length: 2,
    nullable: false,
    default: 'NO',
  })
  pagado: string;

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

  @Column({
    type: 'timestamp',
    name: 'fecha_documento',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  fechaDocumento: Date;

  // TODO: Establecer fecha en base a una operacion matematica.
  @Column({
    type: 'timestamp',
    name: 'fecha_vencimiento',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  fechaVencimiento: Date;
}
