import {
  Column,
  DataType,
  ForeignKey,
  IsDate,
  Model,
  Table,
} from "sequelize-typescript";
import { Faculty } from "./faculty.model";

interface StudyGroupCreationAttre {
  group_id: number;
  faculty_id: number;
  title: string;
  students_amount: number;
}

@Table({ tableName: "study_group" })
export class StudyGroup extends Model<StudyGroup, StudyGroupCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  group_id: number;

  @ForeignKey(() => Faculty)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  faculty_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  title: string;

  @IsDate
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  students_amount: number;
}
