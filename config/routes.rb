Rails.application.routes.draw do

  root 'entries#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  devise_scope :user do
    get 'sign_in', :to => 'devise/sessions#new', :as => :new_user_session
    delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  end


  # resources :collections, only: [:show] do
    resources :entries, param: :slug do
        resources :external_links, only: [:create, :destroy]    
    end
  # end



  get 'search', to: "entries#results"


  

end
