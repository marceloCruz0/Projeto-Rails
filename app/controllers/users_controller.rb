class UsersController < ApplicationController
  include Devise::Controllers::Helpers

  skip_before_action :verify_authenticity_token

   # Criar um novo usuário
   def create
    # recebe parâmetros
    user = User.create_user(params[:name], params[:email], params[:password])

    # código para validação ...
    if user.valid?
      render json: { message: 'Usuário cadastrado com sucesso!' }
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # Fazer login de um usuário
  def login
    user = User.find_by(email: params[:email])

    if user.present? && user.valid_password?(params[:password])

      sign_in(user) # Método fornecido pelo Devise para iniciar a sessão do usuário

      render json: { message: 'Login bem-sucedido!', user: user }
    else
      render json: { error: 'Email ou senha inválidos' }, status: :unauthorized
    end
  end

  def logout
    sign_out(current_user)
    render json: { message: 'Logout bem-sucedido!' }
  end
  

end
