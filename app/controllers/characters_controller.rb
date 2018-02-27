class CharactersController < ApplicationController
  def index
  end

  def new
    @character = Character.new
  end

  def create
    @chracter = Chracter.new(character_params)

    if @character.save
      redirect_to @character, notice: "Save Successful"
    else
      render 'new'
    end
  end

private
  def character_params
    params.require(:character).permit(:name, :description)
  end
end
