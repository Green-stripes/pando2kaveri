class CreatePollutantsLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :pollutants_levels do |t|
      t.references :room, null: false, foreign_key: true
      t.references :parameter, null: false, foreign_key: true
      t.datetime :time_stamp
      t.integer :level

      t.timestamps
    end
  end
end
