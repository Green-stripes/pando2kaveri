class PollutantsLevelController < ApplicationController

  def create
    pollutants_level = Pollutants_level.new
    pollutants_level.save!
  end

end
