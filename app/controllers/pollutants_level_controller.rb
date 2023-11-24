class PollutantsLevelController < ApplicationController

  def create
    pollutants_level = PollutantsLevel.new
    pollutants_level.save!
  end

  def index
    @pollutants_levels = PollutantsLevel.all
    # @data = PollutantsLevel.pluck(:level, :time_stamp)
    # @data = [
    #   { name: 'January', data: 20 },
    #   { name: 'February', data: 35 },
      # Add more data points as needed
    # ]
  end


end
