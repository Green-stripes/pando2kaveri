class Room < ApplicationRecord
  has_many pollutants_levels, dependents: :destroy
end
