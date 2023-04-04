class Api::V1::ReferralsController < ApplicationController
    def create
      referral = Referral.create(referral_params)
      user = User.find(params[:user_id])
      user.UserReferralMailer.send_referral_mail(referral).deliver
      render json:  referral
    end
  
    def show
      render json: current_user.referral.email
    end
    
    private
    def referral_params
      params.require(referral).permit(:email,:content,:user_id)
    end
  end
  