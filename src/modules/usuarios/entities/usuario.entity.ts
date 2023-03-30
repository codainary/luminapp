import { Column, Entity, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { Contribuyente } from '../../contribuyentes/entities/contribuyente.entity';
@Entity({ name: 'usuarios' })
export class Usuario extends AbstractEntity {
  @Column({
    type: 'character varying',
    length: 15,
    nullable: false,
    unique: true,
  })
  usuario: string;

  @Column({
    type: 'character varying',
    length: 255,
    nullable: false,
  })
  contrasena: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  activo: boolean;

  @OneToOne(() => Contribuyente, (contribuyente) => contribuyente.usuario, {
    nullable: true,
  })
  contribuyente: Contribuyente;
}
