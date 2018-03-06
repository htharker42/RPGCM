# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180305075302) do

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.integer "class1"
    t.integer "class2"
    t.boolean "multiclass"
    t.string "alignment"
    t.integer "initiative"
    t.integer "proficiencybonus"
    t.integer "inspiration"
    t.text "ideals"
    t.text "bonds"
    t.text "flaws"
    t.text "attacks"
    t.text "spells"
    t.integer "age"
    t.integer "height"
    t.integer "weight"
    t.string "eyes"
    t.string "skin"
    t.string "hair"
    t.text "aliances"
    t.integer "speed"
    t.integer "intel"
    t.integer "strength"
    t.integer "dexterity"
    t.integer "constitution"
    t.integer "wisdom"
    t.integer "agility"
    t.integer "charisma"
    t.integer "deathsavessuccess"
    t.integer "deathsavesfailures"
    t.integer "armorclass"
    t.integer "perception"
    t.text "equipment"
    t.integer "otherprofs"
    t.integer "animalhandle"
    t.integer "arcana"
    t.integer "athletics"
    t.integer "deception"
    t.integer "history"
    t.integer "insight"
    t.integer "intimidation"
    t.integer "investigation"
    t.integer "medicine"
    t.integer "nature"
    t.integer "performance"
    t.integer "persuasion"
    t.integer "religion"
    t.integer "slightofhand"
    t.integer "stealth"
    t.integer "survival"
    t.text "factions"
    t.text "treasure"
    t.text "characterbackstory"
    t.text "features"
    t.integer "additionalfeatures"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
