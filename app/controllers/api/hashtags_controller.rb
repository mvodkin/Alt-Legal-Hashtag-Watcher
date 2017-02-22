class Api::HashtagsController < ApplicationController

  

  private

  def hashtag_params
    params.permit(:user_id, :text)
  end

end
