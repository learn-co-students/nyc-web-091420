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
    
    3.times { @banana.orders.build }
    # render :new 
  end 
  
  def create 
    @banana = Banana.create(banana_params)
    # banana = Banana.new(banana_params)
    
    # if banna.save
    if @banana.valid?
      flash[:success] = "WELCOME TO THE MENU!!"
      redirect_to banana_path(@banana)
    else 
      flash[:my_errors] = @banana.errors.full_messages
      
      redirect_to new_banana_path
    end 
    # redirect_to "/bananas/#{banan.id}"
    # redirect_to "/bananas/:id"
  end 
  
  def edit 
    # @banana = Banana.find(params[:id])
  end 
  
  def update 
    # @banana = Banana.find(params[:id])
    
    if @banana.update(banana_params)
      redirect_to banana_path(@banana)
    else 
      flash[:my_errors] = @banana.errors.full_messages
      redirect_to edit_banana_path(@banana)
    end 
  end
  
  def destroy 
    # @banana = Banana.find(params[:id])

    @banana.destroy 

    redirect_to bananas_path
  end

  private 

  def banana_params 
    params.require(:banana).permit(:name, :toppings, :price_plus_10)
  end 

 
  # def banana_params 
  #   params.require(:banana).permit(:name, :toppings, :price, orders_attributes: [:user_id])
  # end 

  def find_banana 
    @banana = Banana.find(params[:id])
  end 

end


def methog(*args)
end