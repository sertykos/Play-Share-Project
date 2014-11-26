class IndexController < ApplicationController

	def home
		render 'home'
	end

	def game
		@score = Score.new
		@scores = Score.order('kills desc')
		render 'game'
	end

	def aboutme
		render 'aboutme'
	end

	def set_avatar
		if current_user
			current_user.avatar = avatar_params[:avatar_selected]
			current_user.save
		end
		redirect_to :back
	end

	private

    def avatar_params
      params.require(:user).permit(:avatar_selected)
    end

end
