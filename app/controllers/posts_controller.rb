class PostsController < ApplicationController

	def community

		@post = Post.new

		@posts = Post.all
		render 'community'
	end

	def create
		@post = Post.new(post_params)
		@post.user = current_user

      	if @post.save
          redirect_to community_path, notice: 'Post was successfully created.'
      	else
      	  @posts = Post.all
          render 'community'
      	end
	end


	private

    def post_params
      params.require(:post).permit(:title, :comment)
    end

end
