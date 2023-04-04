Rails.application.routes.draw do
  #get 'invoices/index'
  #get 'current_user/index'
  #get '*', to: 'home#index'
  root "home#index"
  get "/current_user", to: "invoices#index"
  get "/myreferrals", to: "referrals#show"
  
  get '*path', to: "home#index", constraints: lambda { 
    | request| !request.xhr?  
  }
  
  #root "home#index"
  #devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/me", to: "invoices#index"

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup',
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
  }

  #get 'referrals/create'
  #get 'referrals/show'
  #namespace :api do
  #  namespace :v1 do
  #    resources :referrals, only: [:create, :show]
  #  end
  #end

  #resources :current_user

  post "/referrals/new", to:  "referrals#create"
  get "/referrals", to: "referrals#show"
  
  
end
