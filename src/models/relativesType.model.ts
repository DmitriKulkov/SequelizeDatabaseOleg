import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Relative } from "./relative.model";
import { Student } from "./student.model";

interface RelativesTypeCreationAttre {
  relatives_type_id: number;
  title: string;
  relative_id: number;
  student_id: number;
}

@Table({ tableName: "relatives_type" })
export class RelativesType extends Model<
  RelativesType,
  RelativesTypeCreationAttre
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  relatives_type_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  title: string;

  @ForeignKey(() => Relative)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  relative_id: number;

  @ForeignKey(() => Student)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  student_id: number;
}
