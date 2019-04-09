class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats
    end

    def create

      cat = Cat.create(cat_params)
      newSet = Cat.all

      if cat.valid?
          render json: newSet
      else
          render json: cat.errors, status: :unprocessable_entity
      end
  end

  def update
    cat = Cat.find(params[:id])
    if cat.update_attributes(cat_params)
        render json: cat
    end
  end

  def destroy
      cat = Cat.find(params[:id])
      cat.destroy
      newSet = Cat.all
      render json: newSet
    end

    def cat_params
      params.require(:cat).permit(:name, :age, :enjoys)
  end

end
