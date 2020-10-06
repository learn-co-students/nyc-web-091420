class BananasController < ApplicationController
  def index
    @bananas = Banana.all
    # render :index
  end

  def show 
    @banana = Banana.find(params[:id])
    # render :show
  end 
end
