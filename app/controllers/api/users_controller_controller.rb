class Api::UsersControllerController < ApplicationController

  def show
    @user = User
      .includes(:watchlist)
      .includes(:hashtags)
      .find(session[:user_id])
    render :show
  end

end
