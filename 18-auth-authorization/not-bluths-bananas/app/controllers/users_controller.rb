class UsersController < ApplicationController
  skip_before_action :authorized?, only: [:new, :create]

  def index 
    @users = User.all
  end 

  def show 
    @user = User.find(params[:id])

    if @current_user != @user 
      flash[:wrong_user] = "You can only see your own profile"
      redirect_to users_path
    end 
  end 

  def new 
    @user = User.new
  end 
  
  def create 
    user = User.create(user_params)

    if user.valid? 
      session[:user_id] = user.id
      
      redirect_to bananas_path
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path 
    end 
  end 


  private

  def user_params 
    params.require(:user).permit(:password, :name, :email, :age)
  end 
end
