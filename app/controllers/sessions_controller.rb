class SessionsController < ApplicationController

  def create
    begin
      @user = User.from_omniauth(request.env['omniauth.auth'])
      session[:user_id] = @user.id
      redirect_to root_path
    rescue
      render json: "error", status: 422
    end
  end

  def destroy
    session.delete(:user_id) if current_user
    redirect_to root_path
  end

end
