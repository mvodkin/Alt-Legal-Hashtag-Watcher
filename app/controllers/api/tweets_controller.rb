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
      "##{params[:hashtag]}",
      lang: "en",
      result_type: "recent",
      filter_level: params[:content_filter]
    ).take(params[:number_of_tweets].to_i)
    @embeded_tweets = @tweets.map do |tweet|
      client.oembed(tweet.id, hide_media: true, maxwidth: 400).to_json
    end

    if (@embeded_tweets)
      render json: @embeded_tweets, status: 200
    else
      render json: "tweet not found", status: 422
    end
  end

end
