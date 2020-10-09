Rails.application.routes.draw do
  
  resources :orders
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :bananas, only: [:index, :show, :new, :create, :edit, :update]
  # resources :bananas, except: [:destroy]
  resources :bananas

  # get "/bananas", to: "bananas#index", as: "bananas"
  # get "/bananas/new", to: "bananas#new", as: "new_banana"
  # get "/bananas/:id", to: "bananas#show", as: "banana"
  # get "/bananas/:id/edit", to: "bananas#edit", as: "edit_banana"

  # post "/bananas", to: "bananas#create"
  # patch "/bananas/:id", to: "bananas#update"
  # delete "/bananas/:id", to: "bananas#destroy"

end
