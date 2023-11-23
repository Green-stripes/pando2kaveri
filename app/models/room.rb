class Room < ApplicationRecord
  has_many :pollutants_levels 
  has_many :parameters, through: :pollutants_level
end
