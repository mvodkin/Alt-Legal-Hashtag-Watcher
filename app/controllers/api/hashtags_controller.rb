class Api::HashtagsController < ApplicationController

  def create
    watchlist = Watchlist.find_by(user_id: params[:user_id])
    @hashtag = Hashtag.new(watchlist_id: watchlist.id, text: params[:text])
    if @hashtag.save
      render json: @hashtag
    else
      render json: @hashtag.errors.full_messages, status: 422
    end
  end

  def destroy
    @hashtag = Hashtag.find(params[:id])
    if @hashtag
      render json: @hashtag
      @hashtag.destroy
    else
      render json: ["Hashtag not found"], status: 422
    end
  end

  def update
    @hashtag = Hashtag.find(params[:id])
    if @hashtag.update_attributes(hashtag_params)
      render json: @hashtag
    else
      render json: @hashtag.errors.full_messages
    end
  end

  private

  def hashtag_params
    params.permit(:user_id, :text, :content_filter, :attitude_filter, :number_of_tweets)
  end

end
