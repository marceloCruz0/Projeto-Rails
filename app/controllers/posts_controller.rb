class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token


  # POST /posts
  def create
    # @post = Post.create_post(params[:user_id], params[:title], params[:content], params[:image])
    @post = current_user.posts.build(post_params)

    if @post.save
      render json: PostSerializer.new(@post).serializable_hash, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def index
    render json: PostSerializer.new(Post.all).serializable_hash
  end

  def show
    render json: PostSerializer.new(Post.find(params[:id])).serializable_hash
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: { message: "Sucesso ao excluir", status: 200}
    else
      render json: { message: "Não foi possível, tente mais tarde.", status: 400}
    end
  end

  def edit
    render json: PostSerializer.new(Post.find(params[:id])).serializable_hash
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: PostSerializer.new(@post).serializable_hash
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(
      :title,
      :content,
      :image,
      :user_id
    )
  end

end
