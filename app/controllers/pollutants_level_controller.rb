class PollutantsLevelController < ApplicationController

  def create
    pollutants_level = PollutantsLevel.new
    pollutants_level.save!
  end

  def index
    @pollutants_levels = PollutantsLevel.all
    @times_co2 = []
    @levels_co2 = []
    @times_TMP = []
    @levels_TMP = []
    @times_VOCT = []
    @levels_VOCT = []
    @times_HUM = []
    @levels_HUM = []
    @pollutants_levels.each do |entry|
      if entry.parameter.compound == "CO2"
        @times_co2 << entry.time_stamp
        @levels_co2 << entry.level
      elsif entry.parameter.compound == "TMP"
        @times_TMP << entry.time_stamp
        @levels_TMP << entry.level
      elsif entry.parameter.compound == "VOCT"
        @times_VOCT << entry.time_stamp
        @levels_VOCT << entry.level
      else
        @times_HUM << entry.time_stamp
        @levels_HUM << entry.level
      end
    end
  end
end
