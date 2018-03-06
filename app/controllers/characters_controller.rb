class CharactersController < ApplicationController
#  before_action :authenticate_user!
  before_action :find_character, only: [:show, :edit, :update, :destroy, :edit]
  def index
    if user_signed_in?
      @character = current_user.characters.all.order("created_at DESC")
      @user = current_user
    else
      redirect_to new_user_registration_path
    end
  end

  def new
    @character = current_user.characters.build
    @user = current_user
  end

  def create
    @character = current_user.characters.build(character_params)
    @user = current_user
    if @character.save
      redirect_to @character, notice: "Save Successful"
    else
      render 'new'
    end
  end

  def show
    @user = current_user
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
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
      params.require(:character).permit(:name, :description, :image, :id)
    end

    def user_params
      params.require(:user).permit(:email, :id, :avatar)
    end

    def find_character
      @character = Character.find(params[:id])
    end

end
