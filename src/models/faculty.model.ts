import {
  Column,
  DataType,
  ForeignKey,
  IsDate,
  Model,
  Table,
} from "sequelize-typescript";

interface FacultyCreationAttre {
  faculty_id: number;
  title: string;
  dean: string;
  auditorium: number;
}

@Table({ tableName: "faculty" })
export class Faculty extends Model<Faculty, FacultyCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  faculty_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  dean: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: false,
  })
  auditorium: number;
}
