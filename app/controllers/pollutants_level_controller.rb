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
        if entry.parameter.compound == "CO2" && entry.room.room_number == 4
          @times_co2 << entry.time_stamp
          @levels_co2 << entry.level
        elsif entry.parameter.compound == "TMP" && entry.room.room_number == 4
          @times_TMP << entry.time_stamp
          @levels_TMP << entry.level
        elsif entry.parameter.compound == "VOCT" && entry.room.room_number == 4
          @times_VOCT << entry.time_stamp
          @levels_VOCT << entry.level
        elsif entry.parameter.compound == "HUM" && entry.room.room_number == 4
          @times_HUM << entry.time_stamp
          @levels_HUM << entry.level
        end
      end
  end
end
