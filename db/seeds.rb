require "csv"

filepath = "./app/assets/data"

# i = 0

puts "Clearing the database!"
PollutantsLevel.destroy_all
Room.destroy_all
Parameter.destroy_all


puts "Repopulating the database"
CSV.foreach(filepath, headers: :first_row, col_sep: "\t") do |row|
  # p row[12]
  # puts "#{i} done"
  room = Room.new(room_number: row[12])
  room.save!
  # p room
  # p row[1]
  parameter = Parameter.new(compound: row[1])
  parameter.save!
  reading = PollutantsLevel.new(room: room, parameter: parameter, time_stamp: row[0], level: row[2] )
  reading.save!
  # p reading
  # i = i+1
end
