Rails.application.routes.draw do

  # Match URL  - Send to correct Place in Application
                # Controller#Method
  get "/students", to: 'students#index', as: "students"
  get "/students/:id", to: 'students#show', as: 'student'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
