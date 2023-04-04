class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    #private
    #def current_user
    #    token = request.headers["Authhorization"].to_s
    #    Warden::JWTAuth::UserDecoder.new.call(token,:user,nil)
    #end
end
