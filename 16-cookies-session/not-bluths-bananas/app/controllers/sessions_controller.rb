class SessionsController < ApplicationController


  def reset_page_count
    # session[:view_count] = 0
    session.delete(:view_count)

    redirect_back fallback_location: bananas_path
  end

end
