class OrdersController < ApplicationController

  def new
    @order = Order.new

    @users = User.all
    @bananas = Banana.all
  end 


  def create 
    byebug
    order = Order.create(order_params)

    redirect_to banana_path(order.banana)
  end 

  private 
  
  def order_params
    params.require(:order).permit(:banana_id, :user_id)
  end 
end
