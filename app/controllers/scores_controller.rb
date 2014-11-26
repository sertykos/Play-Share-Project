class ScoresController < ApplicationController

	def create

			@score = Score.new(score_params)
			@score.user = current_user

      if @score.save
        redirect_to thegame_path, notice: 'Score shared!'
      else
      	# @scores = score.all
        redirect_to thegame_path
      end

	end

	private

    def score_params
      params.require(:score).permit(:kills, :chronotime)
    end

end
