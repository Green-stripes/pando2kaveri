class PollutantsLevelController < ApplicationController

  def create
    pollutants_level = PollutantsLevel.new
    pollutants_level.save!
  end

  def index
    @pollutants_levels = PollutantsLevel.all
    @data_by_room = {}
    @pollutants_levels.each do |entry|
      room_no = entry.room.room_number
      @data_by_room[room_no] ||= { times_CO2: [], levels_CO2: [], times_TMP: [], levels_TMP: [], times_VOCT: [], levels_VOCT: [], times_HUM: [], levels_HUM: [] }
        case entry.parameter.compound
          when "CO2"
            @data_by_room[room_no][:times_CO2] << entry.time_stamp
            @data_by_room[room_no][:levels_CO2] << entry.level
          when "TMP"
            @data_by_room[room_no][:times_TMP] << entry.time_stamp
            @data_by_room[room_no][:levels_TMP] << entry.level
          when "VOCT"
            @data_by_room[room_no][:times_VOCT] << entry.time_stamp
            @data_by_room[room_no][:levels_VOCT] << entry.level
          when "HUM"
            @data_by_room[room_no][:times_HUM] << entry.time_stamp
            @data_by_room[room_no][:levels_HUM] << entry.level
        end
    end
  end
end
