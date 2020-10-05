class StudentsController < ApplicationController

  def index 
    @students  = Student.all

    # render :index
  end 

  def show 
    # Find Student by id
   @student = Student.find(params[:id])

    # render :show
  end 
end 