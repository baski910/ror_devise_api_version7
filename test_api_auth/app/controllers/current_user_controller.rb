class CurrentUserController < ApplicationController
  before_action :authenticate_user!
  def index
    #current_user = find_verified_user
    puts("current user is #{current_user}")
    render json: current_user, status: :ok
  end
 
end
