class RoomController < ApplicationController

  def create
    room = Room.new
    room.save
  end

end
