#json.array! @character, partial: 'characters/character', as: :character
json.partial! 'characters/character', character: @character
