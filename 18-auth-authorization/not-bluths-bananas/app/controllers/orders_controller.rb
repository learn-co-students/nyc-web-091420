class OrdersController < ApplicationController

  def new
    @order = Order.new

    @users = User.all
    @bananas = Banana.all
  end 


  def create 
    orders = @current_user.orders << Order.create(order_params)

    # order = Order.create(order_params)

    redirect_to banana_path(orders.last.banana)
  end 

  private 
  
  def order_params
    params.require(:order).permit(:banana_id)
  end 
end
