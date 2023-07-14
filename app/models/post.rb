class Post < ApplicationRecord

    belongs_to :user
    has_many :comments, dependent: :destroy
    has_one_attached :image

    validates :title, :content, presence: true
  
    def has_comments?
      comments.any?
    end
  end
  