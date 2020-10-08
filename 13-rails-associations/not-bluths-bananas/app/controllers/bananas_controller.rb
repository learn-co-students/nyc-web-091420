class BananasController < ApplicationController
  before_action :find_banana, only: [:show, :edit, :update, :destroy]

  def index
    @bananas = Banana.all
    # render :index
  end

  def show 
    # @banana = Banana.find(params[:id])
    
    # render :show
  end 
  
  def new
    @banana = Banana.new
    # render :new 
  end 
  
  def create 
    banana = Banana.create(banana_params)
    
    redirect_to banana_path(banana)
    # redirect_to "/bananas/#{banan.id}"
    # redirect_to "/bananas/:id"
  end 
  
  def edit 
    # @banana = Banana.find(params[:id])
  end 
  
  def update 
    # @banana = Banana.find(params[:id])
    
    @banana.update(banana_params)
    
    redirect_to banana_path(@banana)
  end
  
  def destroy 
    # @banana = Banana.find(params[:id])

    @banana.destroy 

    redirect_to bananas_path
  end

  private 

  def banana_params 
    params.require(:banana).permit(:name, :toppings, :price)
  end 

  def find_banana 
    @banana = Banana.find(params[:id])
  end 

end
