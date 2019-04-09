require 'rails_helper'

describe "Cats API" do
  it "gets a list of Cats" do
    # Create a new cat in the Test Database (not the same one as development)
    Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')

    # Make a request to the API
    get '/cats'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to be_success

    # Assure that we got one result back as expected
    expect(json.length).to eq 1
  end




it "creates a cat" do
    # The params we are going to send with the request
    cat_params = {
      cat: {
        name: 'Buster',
        age: 4,
        enjoys: 'Meow Mix, and plenty of sunshine.'
      }
    }

    # Send the request to the server
    post '/cats', params: cat_params

    # Assure that we get a success back
    expect(response).to be_success

    # Look up the cat we expect to be created in the Database
    new_cat = Cat.first

    # Assure that the created cat has the correct attributes
    expect(new_cat.name).to eq('Buster')
  end

  it "doesn't create a cat without a name" do
    cat_params = {
      cat: {
        age: 4,
        enjoys: 'Meow Mix, and plenty of sunshine.'
      }
    }

    post '/cats', params: cat_params
    expect(response.status).to eq 422
    json = JSON.parse(response.body)
    expect(json['name']).to include "can't be blank"

    it "doesn't create a cat without a age" do
      cat_params = {
        cat: {
         name:'Bob',
          enjoys: 'Meow Mix, and plenty of sunshine.'
        }
      }

      post '/cats', params: cat_params
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['aga']).to include "can't be blank"

      it "doesn't create a cat without a enjoys" do
        cat_params = {
          cat: {
           name:'Bob',
            age: 13
          }
        }

        post '/cats', params: cat_params
        expect(response.status).to eq 422
        json = JSON.parse(response.body)
        expect(json['enjoys']).to include "can't be blank"



end


end
