class ReferralsController < ApplicationController
  before_action :authenticate_user!
  def create
    @referral = Referral.create(referral_params)
    user = User.find(params[:user_id])
    UserReferralMailer.send_referral_mail(@referral).deliver
    render json:  @referral
  end

  def show
    user = User.find(current_user.id)
    render json: user.referrals
  end
  
  private
  def referral_params
    params.require(:referral).permit(:email,:content,:user_id)
  end
end
