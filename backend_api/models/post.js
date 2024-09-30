'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Um Post tem muitos Comments
      Post.hasMany(models.Comment, {
        foreignKey: 'postsId',  // Associado à coluna postsId em Comment
        as: 'comments',  // Alias para acessar os comentários
        onDelete: 'CASCADE',  // Remove comentários ao deletar o post
      });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
