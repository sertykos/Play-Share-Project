class Score < ActiveRecord::Base
	belongs_to :user

	validates :kills, presence: true
	validates :chronotime, presence: true
	validates :user_id, presence: true

end
