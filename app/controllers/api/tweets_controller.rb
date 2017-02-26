class Api::TweetsController < ApplicationController

  def index
    user = User.find(params[:id])
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "lbF8j2sr62zqk2MsyaNfOsYwc"
      config.consumer_secret     = "JRicGQaidP6RnRJv5Nw83Nz9P2S8lMPLJtNtT7WGJhc7sG8rNu"
      config.access_token        = user.token
      config.access_token_secret = user.secret
    end

    @tweets = client.search(
      "##{params[:hashtag]}#{parse_search_flags}",
      lang: "en",
      result_type: "recent",
      since_id: params[:last_tweet_id].to_i
    ).take(params[:number_of_tweets].to_i)

    @embeded_tweets = client.oembeds(@tweets, hide_media: true, maxwidth: 400).to_json

    if (@embeded_tweets)
      render json: @embeded_tweets, status: 200
    else
      render json: "tweet not found", status: 422
    end
  end

  private

  def parse_search_flags
    flags = []
    flags << ":)"           if params[:attitude_filter] == "positive"
    flags << ":("           if params[:attitude_filter] == "negative"
    flags << "filter:safe"  if params[:content_filter] == "safe"
    " " + flags.join(" ")
  end

end
