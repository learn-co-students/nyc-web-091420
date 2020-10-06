Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/bananas", to: "bananas#index", as: "bananas"
  get "/bananas/:id", to: "bananas#show", as: "banana"

end
