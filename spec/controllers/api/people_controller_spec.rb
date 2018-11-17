require 'rails_helper'

describe Api::PeopleController do
  describe 'GET index' do
    it 'returns all people' do
      get :index

      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json") 

      json_response = JSON.parse(response.body, symbolize_names: true)
      person = json_response[:data].first
      
      expect(person.keys).to include(:display_name, :email_address, :title)
    end
  end
end
