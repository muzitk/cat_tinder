class Cat < ApplicationRecord
    validates :name, presence: true
    validates :age, presence: true
    validates :enjoys, presence: true

end
