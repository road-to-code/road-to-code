require 'sinatra/base'
require_relative 'data_mapper_setup'
require 'json'


class ScoreServer < Sinatra::Base

  before do
    headers 'Access-Control-Allow-Origin' => '*'
  end

  get '/scores' do
    scores = Score.all
    return scores.to_json unless scores == nil
  end

post '/scores' do
  puts params
  Score.create(name: params[:name], level: params[:level], score: params[:score])
end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
