import {
  Column,
  DataType,
  ForeignKey,
  IsDate,
  Model,
  Table,
} from "sequelize-typescript";
import { Student } from "./student.model";

interface PrivilegeCreationAttre {
  privilege_id: number;
  type: string;
  release_date: Date;
  student_id: number;
}

@Table({ tableName: "privilege" })
export class Privilege extends Model<Privilege, PrivilegeCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  privilege_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  type: string;

  @ForeignKey(() => Student)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  student_id: number;

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: false,
    unique: false,
  })
  release_date: Date;
}
