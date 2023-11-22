class PollutantsLevel < ApplicationRecord
  belongs_to :room
  belongs_to :parameter
end
