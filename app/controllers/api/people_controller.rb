module Api
  class PeopleController < Api::BaseController
    def index
      headers = {
        "Authorization" => "Bearer ak_528856d0bfc26793049709c4fa6b821a5354e4575ab72f56827aeb85ae3ddfc2", 
        'Content-Type' => 'application/json'
      }
      
      response = HTTParty.get("https://api.salesloft.com/v2/people.json", headers: headers)

      render json: response.to_json 
    end
  end
end
