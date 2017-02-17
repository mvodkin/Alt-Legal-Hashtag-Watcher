class SessionsController < ApplicationController

  def create
    begin
      @user = User.from_omniauth(request.env['omniauth.auth'])
      session[:user_id] = @user.id
      render json: @user, status: 200
    rescue
      render json: "error", status: 422
    end
  end

end
