Rails.application.routes.draw do
  root to: "pollutants_level#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :rooms, only: [:create]
  resources :parameters, only: [:create]
  resources :pollutants_level, only: [:create, :index]
end
