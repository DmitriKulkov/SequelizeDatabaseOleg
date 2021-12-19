import {
  Column,
  DataType,
  ForeignKey,
  IsDate,
  Model,
  Table,
} from "sequelize-typescript";
import { StudyGroup } from "./studyGroup.model";

interface StudentCreationAttre {
  student_id: number;
  second_name: string;
  first_name: string;
  patronymic: string;
  group_id: number;
  birthday: Date;
  gender: string;
  address: string;
}

@Table({ tableName: "student" })
export class Student extends Model<Student, StudentCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  student_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  second_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  patronymic: string;

  @ForeignKey(() => StudyGroup)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  group_id: number;

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: false,
    unique: false,
  })
  birthday: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  gender: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  address: string;
}
