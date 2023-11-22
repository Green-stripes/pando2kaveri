class CreateParameters < ActiveRecord::Migration[7.0]
  def change
    create_table :parameters do |t|
      t.string :type

      t.timestamps
    end
  end
end
