class RenameTypeToCompoundInParameter < ActiveRecord::Migration[7.0]
  def change
    rename_column :parameters, :type, :compound
  end
end
