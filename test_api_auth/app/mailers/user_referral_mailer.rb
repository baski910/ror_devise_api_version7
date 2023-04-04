class UserReferralMailer < ApplicationMailer
    default :from => 'baskar910@gmail.com'

    def send_referral_mail(referral)
        @referral = referral
        mail( :to => @referral.email,
              :subject => 'A welcome mail for this group')
    end
end
