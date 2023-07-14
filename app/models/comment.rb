class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post
  
    validates :content, presence: true
  
    # Create
    def self.create_comment(user_id, post_id, content, user_name)
      Comment.create(user_id: user_id, post_id: post_id, content: content, user_name: user_name)
    end
    
    # get all
    def self.all_comments
      Comment.all
    end

    # get by id
    def self.find_comment(id)
      Comment.find(id)
    end
  
    # Delete
    def delete_comment
      self.destroy
    end
  end
  