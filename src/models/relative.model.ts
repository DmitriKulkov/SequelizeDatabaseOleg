import { Column, DataType, IsDate, Model, Table } from "sequelize-typescript";

interface RelativeCreationAttre {
  relative_id: number;
  second_name: string;
  first_name: string;
  patronomic: string;
  address: string;
  birthday: Date;
}

@Table({ tableName: "relative" })
export class Relative extends Model<Relative, RelativeCreationAttre> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  })
  relative_id: number;

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
  patronomic: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  address: string;

  @IsDate
  @Column({
    type: DataType.DATE,
    allowNull: false,
    unique: false,
  })
  birthday: Date;
}
