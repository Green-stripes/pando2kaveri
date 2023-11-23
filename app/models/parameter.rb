class Parameter < ApplicationRecord
  has_many :pollutants_levels
  has_many :rooms, through: :pollutants_level
end
