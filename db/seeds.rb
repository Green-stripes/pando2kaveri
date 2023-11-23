# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "csv"

filepath = "./app/assets/data"

i = 0

CSV.foreach(filepath, headers: :first_row, col_sep: "\t") do |row|
  p row[12]
  puts "#{i} done"
  room = Room.new(room_number: row[12])
  room.save!
  p room
  p row[1]
  parameter = Parameter.new(type: row[1])
  parameter.save!
  reading = Pollutants_level.new(room: room, parameter: parameter, time_stamp: row[0], level: row[2] )
  reading.create
  p reading
  i = i+1
end



# array = []
# CSV.foreach((filepath), headers: true, col_sep: " ") do |row|
#     array << row[]
# end
# puts array

# require 'csv'
# require 'scanf' if (RUBY_VERSION >= '1.9.3')

# FORMAT = '%15c %d %d %d'

# data = <<EOF >> filepath
# EOF

# data.split("\n").each do |li|
#   fields = li.scanf(FORMAT)
#   puts [fields.first.strip, *fields[1 .. -1]].to_csv
# end
