class ParameterController < ApplicationController

  def create
    parameter = Parameter.new
    parameter.save
  end


end
