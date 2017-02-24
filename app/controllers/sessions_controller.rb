class SessionsController < ApplicationController

  def create
    begin
      @user = User.from_omniauth(request.env['omniauth.auth'])
      session[:session_token] = @user.reset_session_token
      redirect_to root_path
    rescue
      render json: "error", status: 422
    end
  end

  def destroy
    # current_user.reset_session_token
    @user = User.find(params[:id])
    @user.reset_session_token
    session[:session_token] = nil
    render json: {}, status: 200
  end

end
