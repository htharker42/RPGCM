class CharactersController < ApplicationController
  before_action :find_character, only: [:show, :update, :destroy, :edit]
  def index
    @character = current_user.characters.all.order("created_at DESC")
  end

  def new
    @character = current_user.characters.build
  end

  def create
    @character = current_user.characters.build(character_params)

    if @character.save
      redirect_to @character, notice: "Save Successful"
    else
      render 'new'
    end
  end

  def show

  end

  def edit
  end

  def update
    if @character.update(character_params)
      redirect_to @character, notice: "Character has been updated!"
    else
      render edit
    end
  end

  def destroy
    @character.destroy
    redirect_to root_path, notice: "Character has been deleted!"

  end

  private
    def character_params
      params.require(:character).permit(:name, :description, :id)
    end

    def find_character
      @character = Character.find(params[:id])
    end


end
