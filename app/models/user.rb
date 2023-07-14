class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable

  has_many :posts, dependent: :destroy

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true
  
    # criar
    def self.create_user(name, email, password)
      User.create(name: name, email: email, password: password)
    end
  
    def self.authenticate(email, password)
      user = find_by(email: email)
      return user if user&.authenticate(password)
    end
  
    # procurar por todos usuarios
    def self.all_users
      User.all
    end
  
    # atualizar
    def update_user(name, email, password)
      self.name = name
      self.email = email
      self.password = password
      self.save
    end
  
    # deletar
    def delete_user
      self.destroy
    end
  end
  